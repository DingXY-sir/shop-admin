/*
 * @Descripttion: 页面操作方法封装
 * @Author: DXY
 * @Date: 2022-09-28 09:46:32
 * @LastEditors: DXY
 * @LastEditTime: 2022-10-24 11:39:01
 */
import { Table } from "@/types/table";
import { reactive, onMounted, toRefs, computed } from "vue";

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
    //只查询参数
    searchParam: {},
    //初始化查询参数
    searchInitParams: {},
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
    //表格数据
    tableData: [],
  });

  /**
   * @description 分页查询参数(只包括分页和表格字段排序,其他排序方式可自行配置)
   * */
  const pageParam = computed({
    get: () => {
      return {
        pageNum: state.pageable.pageNum,
        pageSize: state.pageable.pageSize,
      };
    },
    set: (newVal: any) => {
      console.log("我是分页更新之后的值", newVal);
    },
  });

  /** 获取table列表数据*/
  const getTableList = async () => {
    try {
      Object.assign(state.totalParams, initParams, isPageable ? pageParam.value : {});
      let data = await api(state.totalParams);
      // * 由于不同接口返回的数据格式不统一，做出如下判断
      if (data.data.data.list) {
        state.tableData = data.data.data.list.data;
        //将请求返回的分页数据解构
        const { pageNum, pageSize, total } = data.data.data.list;
        isPageable && updatePageable({ pageNum, pageSize, total });
      } else {
        state.tableData = data.data.data.datalist;
        //将请求返回的分页数据解构
        const { pageNum, pageSize, total } = data.data.data;
        isPageable && updatePageable({ pageNum, pageSize, total });
      }
    } catch (error) {
      console.log(error);
    }
  };
  /**更新查询（按条件搜索） */
  const updatedTotalParams = () => {
    state.totalParams = {};
    let newSearchParams: { [key: string | number]: any } = {};
    // * 当属性有值 或 一些存在false或者0的时候携带参数
    for (let key in state.searchParam) {
      if (state.searchParam[key] || state.searchParam[key] === false || state.searchParam[key] === 0) {
        newSearchParams[key] = state.searchParam[key];
      }
    }
    Object.assign(state.totalParams, newSearchParams, isPageable ? pageParam.value : {});
  };

  /**查询操作 */
  const search = () => {
    state.pageable.pageNum = 1;
    updatedTotalParams();
    getTableList();
  };

  /**表格数据重置 */
  const reset = () => {
    state.pageable.pageNum = 1;
    state.searchParam = {};
    Object.keys(state.searchInitParams).forEach(key => {
      state.searchParam[key] = state.searchInitParams[key];
    });
    updatedTotalParams();
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
    updatedTotalParams,
    search,
    handleSizeChange,
    handleCurrentChange,
  };
};
