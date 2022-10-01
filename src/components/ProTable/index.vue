<!--
 * @Descripttion: 公共表单组件
 * @Author: DXY
 * @Date: 2022-08-24 16:29:49
 * @LastEditors: DXY
 * @LastEditTime: 2022-09-30 17:20:26
-->
<template>
  <!-- 查询 -->
  <search-form
    :searchParam="initParams"
    :getSearchList="getSearchList"
    :reset="reset"
    v-show="isShowSearch"
  ></search-form>
  <div class="pro-table-container">
    <!-- 表格头部 -->
    <div class="table_header flx-justify-between">
      <div class="header_button_lf">
        <slot name="tableHeader"></slot>
      </div>
      <!-- 表格功能性 -->
      <div class="header_button_rt">
        <el-button :icon="Refresh" circle @click="handleRefresh"></el-button>
        <el-button :icon="Operation" circle @click="openColSetting"></el-button>
        <el-button
          :icon="ArrowUp"
          circle
          @click="isShowSearch = !isShowSearch"
        ></el-button>
      </div>
    </div>
    <!-- 表格主体 -->
    <el-table
      height="575"
      :data="tableData"
      :border="border"
      :row-key="getRowKeys"
    >
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
          v-if="!item.type && item.prop"
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
    <Pagination
      :pageable="pageable"
      :handleSizeChange="handleSizeChange"
      :handleCurrentChange="handleCurrentChange"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from "vue";
import { Refresh, Operation, ArrowUp } from "@element-plus/icons-vue";
import { Form } from "@/types/form";
import { useTable } from "@/hooks/useTable";

//表格功能
const isShowSearch = ref<boolean>(true);
const handleRefresh = () => {};
const openColSetting = () => {};

//表格数据
interface Table {
  getSearchList: Partial<Form.SearchFormItem>[]; //查询表单配置项
  border: boolean;
  tableColumns: Partial<Form.SearchFormItem>[]; //表格配置项
  // hooks
  requestApi: (params: any) => Promise<any>; //请求表格数据的api ==> 必传
  initParams: any; // 初始化请求参数 ==> 非必传（默认为{}）
}

const prop = withDefaults(defineProps<Table>(), {
  border: true,
  // initParams: {},
});
/**
 * 使用Table，hooks
 * */
const {
  searchParams,
  tableData,
  getTableList,
  reset,
  updatePageable,
  pageable,
  handleSizeChange,
  handleCurrentChange,
} = useTable(prop.requestApi, prop.initParams);

//获取行数据的 Key,用来优化 Table 的渲染;在使用跨页多选时,该属性是必填的
const getRowKeys = (row: { id: string }) => {
  return row.id;
};
//暴露查询表单方法和查询参数
defineExpose({ searchParams, getTableList });
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
