<!--
 * @Descripttion: 公共表单组件
 * @Author: DXY
 * @Date: 2022-08-24 16:29:49
 * @LastEditors: DXY
 * @LastEditTime: 2022-10-28 11:48:19
-->
<template>
  <!-- 查询 -->
  <search-form
    :columns="searchColumns"
    :searchParam="searchParam"
    :reset="reset"
    :search="search"
    v-show="isShowSearch"
  ></search-form>
  <div class="pro-table-container card">
    <!-- 表格头部 -->
    <div class="table_header flx-justify-between">
      <div class="header_button_lf">
        <slot name="tableHeader" :isSelected="isSelected" :selectedList="selectedList" :selectedListIds="selectedListIds"></slot>
      </div>
      <!-- 表格功能性 -->
      <div class="header_button_rt">
        <el-button :icon="Refresh" circle @click="getTableList"></el-button>
        <el-button :icon="Operation" circle @click="openColSetting"></el-button>
        <el-button :icon="ArrowUp" circle @click="isShowSearch = !isShowSearch"></el-button>
      </div>
    </div>
    <!-- 表格主体 -->
    <el-table height="575" :data="tableData" :border="border" :row-key="getRowKeys" @selection-change="selectionChange">
      <template v-for="item in tableColumns" :key="item">
        <!-- 单选或多选 -->
        <el-table-column
          v-if="item.type == 'index' || item.type == 'selection'"
          :type="item.type"
          :reserve-selection="item.type == 'selection'"
          :width="item.width"
          :fixed="item.fixed"
        ></el-table-column>
        <!-- 表单具体内容 -->
        <el-table-column
          v-if="!item.type && item.prop && item.isShow"
          :label="item.label"
          :prop="item.prop"
          :width="item.width"
          :sortable="item.sortable"
          :fixed="item.fixed"
          :resizable="true"
          :show-overflow-tooltip="true"
          header-align="center"
          align="center"
        >
          <template #default="scope">
            <slot :name="item.prop" :row="scope.row">
              <!-- 是否含有tag标签 -->
              <el-tag v-if="item.tag">{{ scope.row[item.prop] }}</el-tag>
              <!-- <span>{{ scope.row[item.prop] }}</span> -->
              <span v-else>{{ scope.row[item.prop] }}</span>
            </slot>
          </template>
        </el-table-column>
      </template>
      <template #empty>
        <div class="table-empty">
          <!-- <img src="@/assets/images/notData.png" alt="notData" /> -->
          <div>暂无数据</div>
        </div>
      </template>
    </el-table>
    <!-- 分页 -->
    <Pagination :pageable="pageable" :handleSizeChange="handleSizeChange" :handleCurrentChange="handleCurrentChange" />
  </div>
  <ColSetting ref="colRef" :colSetting="colSetting"></ColSetting>
</template>
<script setup lang="ts">
import ColSetting from "./components/ColSetting.vue";
import { ref, watch } from "vue";
import { Refresh, Operation, ArrowUp } from "@element-plus/icons-vue";
import { Form } from "@/types/form";
import { useTable } from "@/hooks/useTable";
import { useSelection } from "@/hooks/useSelection";

//表格数据
interface Table {
  border: boolean; //表格边框，默认为true
  columns: Partial<Form.Column>[]; //表格配置项
  selectedId?: string; //初始化多选列表id，（默认为id，可修改）
  // * 使用hooks，接受参数（requestApi、initParams）
  requestApi: (params: any) => Promise<any>; //请求表格数据的api ==> 必传
  initParams: any; // 初始化请求参数 ==> 非必传（默认为{}）
}
const prop = withDefaults(defineProps<Table>(), {
  border: true,
  selectedId: "id",
});

/**
 * 使用useTable（Hooks）
 * */
const { searchParam, searchInitParams, tableData, getTableList, reset, pageable, handleSizeChange, handleCurrentChange, search } =
  useTable(prop.requestApi, prop.initParams);

// * 监听 initParams 是否改变 ，改变则重新加载表格数据
watch(
  () => prop.initParams,
  () => {
    getTableList();
  },
  {
    deep: true,
  },
);

// * 设置单元格列
const tableColumns = ref<Partial<Form.Column>[]>();
tableColumns.value = prop.columns.map(item => {
  return {
    ...item,
    isShow: item.isShow ?? true,
  };
});

// * 如果enum为接口，获取数据 (当enum传接口类型自动转化)
tableColumns.value.forEach(async item => {
  if (item.enum && typeof item.enum === "function") {
    const { data } = await item.enum(); //（根据实际接口情况，返回对应的参数）
    item.enum = data.data;
  }
});

// * 过滤需要搜索的配置项 (需要搜索获取表数据参数项)
const searchColumns = tableColumns.value.filter(item => item.search);
// * 设置搜索默认值
searchColumns.forEach((column: Partial<Form.Column>) => {
  if (column.searchInitParams !== undefined && column.searchInitParams !== null) {
    searchInitParams[column.prop!] = column.searchInitParams;
  }
});

//表格功能
const isShowSearch = ref<boolean>(true);
const colRef = ref();
const colSetting = tableColumns.value.filter(item => {
  return item.type !== "expand" && item.type !== "index" && item.type !== "selection" && item.prop !== "operation";
});
const openColSetting = () => {
  colRef.value.openColSetting();
};

//获取行数据的 Key,用来优化 Table 的渲染;在使用跨页多选时,该属性是必填的
const getRowKeys = (row: { id: string }) => {
  return row.id;
};

/**
 * 使用多选，hooks
 */
const { isSelected, selectedList, selectedListIds, selectionChange } = useSelection(prop.selectedId);
//暴露查询表单方法和查询参数
defineExpose({ searchParam, getTableList });
</script>
<style lang="scss" scoped>
.pro-table-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow-x: hidden;
  .table_header {
    margin: 20px 0;
  }
  .el-pagination {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }
  .el-table {
    flex: 1;
    :deep(.el-table__inner-wrapper) {
      height: 100% !important;
    }
    .el-table__header th,
    .el-table__body td {
      text-align: center;
    }
    :deep(.el-table__header th) {
      height: 45px !important;
      font-size: 15px;
      font-weight: bold;
      color: #252525;
      background: #fafafa;
    }
    :deep(.el-table__row) {
      height: 45px !important;
    }

    // 设置 el-table 中 header 文字不换行
    .el-table__header .el-table__cell > .cell {
      white-space: nowrap;
    }

    // 解决表格数据为空时样式不居中问题(仅在element-plus中)
    .el-table__empty-block {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .table-empty {
        line-height: 30px;
      }
    }
  }
}
</style>
