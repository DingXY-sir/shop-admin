<!--
 * @Descripttion: 角色管理
 * @Author: DXY
 * @Date: 2022-08-19 14:23:49
 * @LastEditors: DXY
 * @LastEditTime: 2022-10-09 14:57:59
-->

<template>
  <div
    class="viev-container"
    v-waterMarker="{
      text: 'admin',
      textColor: 'rgba(180, 180, 180, 0.6)',
    }"
  >
    <pro-table
      ref="tableRef"
      :initParams="initParams"
      :getSearchList="getSearchList"
      :tableColumns="tableColumns"
      :border="border"
    >
      <template #tableHeader="scope">
        <el-button type="primary" :icon="CirclePlus" @click="openDrawer('新增')">新增用户</el-button>
        <el-button type="primary" :icon="Upload" plain @click="batchAdd">批量添加用户</el-button>
        <el-button type="primary" :icon="Download" plain v-debounce="handleExport">导出用户数据</el-button>
        <el-button type="danger" :icon="Delete" plain :disabled="scope.isSelected" v-debounce="batchDelete">
          批量删除用户
        </el-button>
      </template>
      <template #status="scope">
        <el-switch
          v-model="scope.row.status"
          :active-text="scope.row.status === '1' ? '禁用' : '启用'"
          active-value="0"
          inactive-value="1"
          @change="handleSwitchOpen(scope.row.id, scope.row.status)"
        ></el-switch>
      </template>
      <template #operation="scope">
        <el-button type="primary" link :icon="View" @click="openDrawer('查看', scope.row)">查看</el-button>
        <el-button type="primary" link :icon="EditPen" @click="openDrawer('编辑', scope.row)">编辑</el-button>
        <el-button type="primary" link :icon="Refresh" @click="resetPass(scope.row)">授权</el-button>
      </template>
    </pro-table>
    <card v-model="isDialogShow" v-model:adminId="adminId" :titleName="titleName" @success="handleSuccess" />
  </div>
</template>

<script setup lang="ts">
import Card from "./components/card.vue";
import { ref, reactive, onMounted } from "vue";
import { View, EditPen, Refresh, Delete, CirclePlus, Download, Upload } from "@element-plus/icons-vue";
import type { Form } from "@/types/form";
import type { RoleTableData } from "./index";
import { ElMessage } from "element-plus";

//表单查询条件
const getSearchList = ref([
  { searchType: "text", label: "角色名称", prop: "name", isShow: true },
  { searchType: "select", label: "角色状态", prop: "status", isShow: true },
]);
//表单内容
const tableColumns = ref<Partial<Form.SearchFormItem>[]>([
  { type: "selection", width: 80, fixed: "left" },
  {
    prop: "id",
    label: "ID",
    width: 100,
    searchType: "text",
  },
  {
    prop: "name",
    label: "角色名称",
  },
  {
    prop: "status",
    label: "角色状态",
  },
  {
    prop: "operation",
    label: "操作",
    fixed: "right",
  },
]);
//设置表单查询条件参数
const initParams = reactive({
  name: "",
  status: "" as RoleTableData["status"],
});

const border = true;
//获取ProTable组件实例
const tableRef = ref();
onMounted(() => {});
const handleSwitchOpen = (id: number, status: string) => {
  console.log(id, status);
};
//card操作
const isDialogShow = ref(false);
const titleName = ref("授权");
const adminId = ref<number | null>(null);
const openDrawer = (name: string, row?: any) => {
  if (name === "新增") {
    isDialogShow.value = true;
  }
  if (name === "编辑") {
    isDialogShow.value = true;
    adminId.value = row.id;
  }
  if (name === "查看") {
    isDialogShow.value = true;
    adminId.value = row.id;
  }
};
const resetPass = (row: any) => {};

//弹框成功操作
const handleSuccess = () => {
  isDialogShow.value = false;
};

const handleExport = () => {
  console.log("000");
};
const batchDelete = () => {
  ElMessage({
    type: "success",
    message: "防抖～",
    showClose: true,
  });
};
</script>
<style lang="scss" scoped></style>
