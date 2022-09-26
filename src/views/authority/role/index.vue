<!--
 * @Descripttion: 角色管理
 * @Author: DXY
 * @Date: 2022-08-19 14:23:49
 * @LastEditors: DXY
 * @LastEditTime: 2022-09-02 14:50:51
-->
<template>
  <div class="viev-container">
    <pro-table
      :tableData="tableData"
      :tableColumns="tableColumns"
      :searchParam="searchParam"
      :getSearchList="getSearchList"
      :page="page"
      :border="border"
      :getList="getList"
    >
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
        <el-button
          type="primary"
          link
          :icon="View"
          @click="openDrawer('查看', scope.row)"
          >查看</el-button
        >
        <el-button
          type="primary"
          link
          :icon="EditPen"
          @click="openDrawer('编辑', scope.row)"
          >编辑</el-button
        >
        <el-button
          type="primary"
          link
          :icon="Refresh"
          @click="resetPass(scope.row)"
          >授权</el-button
        >
      </template>
    </pro-table>
    <card
      v-model="isDialogShow"
      v-model:adminId="adminId"
      :titleName="titleName"
    />
  </div>
</template>

<script setup lang="ts">
import Card from "./components/card.vue";
import { ref, reactive, computed, watch, onMounted, PropType } from "vue";
import { View, EditPen, Refresh } from "@element-plus/icons-vue";
import type { Form } from "@/types/form";
import type { RoleTableData } from "./index";
import { getRoleList } from "@/api/modules/user";
import { useUserStore } from "@/store/modules/user";
//表单查询条件
const getSearchList = ref([
  { searchType: "text", label: "角色名称", prop: "name", isShow: true },
  { searchType: "select", label: "角色状态", prop: "status", isShow: true },
]);
const searchParam = reactive({
  name: "",
  status: "" as RoleTableData["status"],
});
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
const tableData = ref<Array<RoleTableData>>([]);
//表单配置
const page = reactive<Form.Pageable>({
  page: 1,
  limit: 10,
  total: 0,
});
const border = true;
//Role请求
const userStore = useUserStore();
const getList = async () => {
  const res = await getRoleList({
    ...page,
    ...searchParam,
    type: "0",
    ...userStore.userToken,
  });
  tableData.value = res.data.data.list;
  page.total = res.data.data.total;
};
onMounted(() => {
  getList();
});
const handleSwitchOpen = (id: number, status: string) => {
  console.log(id, status);
};
//card操作
const isDialogShow = ref(false);
const titleName = ref("授权");
const adminId = ref<number | null>(null);
const openDrawer = (name: string, row: any) => {
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
</script>
<style lang="scss" scoped></style>
