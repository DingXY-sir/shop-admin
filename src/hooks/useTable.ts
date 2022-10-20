/*
 * @Descripttion: 页面操作方法封装
 * @Author: DXY
 * @Date: 2022-09-28 09:46:32
 * @LastEditors: DXY
 * @LastEditTime: 2022-10-20 14:29:09
 */
import { Table } from "@/types/table";
import { reactive, onMounted, toRefs } from "vue";

/**
 * @params {Function} api 获取表格数据api方法，（必传）
 * @params {Object} initParams 获取页面初始化参数 （非必传 默认{}）
 * @params {Boolean} isPageable 是否有分页 （非必传 默认true）
 * @params {Function} dataCallBack 对请求数据返回data处理方法 （ 非必传 ）
 */
export const useTable = (
  api: (params: any) => Promise<any>,
  initParams: Object = {},
  isPageable: Boolean = true,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  dataCallBack?: (data: any) => any,
) => {
  const state = reactive<Table.TableStateProps>({
    //查询参数
    searchParams: {},
    //初始化查询参数
    searchInitParams: JSON.parse(JSON.stringify(initParams)),
    //表格数据
    tableData: [],
    pageable: {
      //当前页
      pageNum: 1,
      //每页显示条数
      pageSize: 10,
      //总条数
      total: 0,
    },
    //总查询参数（包含分页）
    totalParams: {},
  });

  /** 获取table列表数据*/
  const getTableList = async () => {
    try {
      Object.assign(state.totalParams, initParams, isPageable ? state.pageable : {});
      let data = await api(state.totalParams);
      state.tableData = data.data.data.list.data;
      //将请求返回的分页数据解构
      const { pageNum, pageSize, total } = data.data.data.list;
      isPageable && updatePageable({ pageNum, pageSize, total });
    } catch (error) {
      console.log(error);
    }
  };

  /**更新查询参数 */
  const search = () => {
    state.totalParams = {};
    Object.assign(state.totalParams, initParams, isPageable ? state.pageable : {});
    console.log("查询方法", state.totalParams);
    getTableList();
  };

  /**表格数据重置 */
  const reset = () => {
    state.pageable.pageNum = 1;
    state.totalParams = {};
    Object.keys(state.searchInitParams).forEach(key => {
      initParams[key] = state.searchInitParams[key];
    });
    Object.assign(state.totalParams, initParams, isPageable ? state.pageable : {});
    getTableList();
  };

  /**初始化时候需要设置表单查询默认值 并且 获取表单数据 */
  onMounted(() => {
    reset();
  });

  /**更新分页信息
   * @params {object} 后台返回的分页信息
   */
  const updatePageable = (resPageable: Table.Pageable) => {
    Object.assign(state.pageable, resPageable);
  };

  /**每页条数改变
   * @params {Number} val 当前条数
   * @return void
   */
  const handleSizeChange = (val: number) => {
    state.pageable.pageNum = 1;
    state.pageable.pageSize = val;
    getTableList();
  };

  /**当前页数改变
   * @params {Number} val 当前页
   * @return void
   */
  const handleCurrentChange = (val: number) => {
    state.pageable.pageNum = val;
    getTableList();
  };

  return {
    ...toRefs(state),
    getTableList,
    updatePageable,
    reset,
    search,
    handleSizeChange,
    handleCurrentChange,
  };
};
