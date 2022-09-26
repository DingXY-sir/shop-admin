<!--
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-08-19 17:08:10
 * @LastEditors: DXY
 * @LastEditTime: 2022-09-02 10:49:16
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
    >
      <template #tableHeader="scope">
        <el-button type="primary" :icon="CirclePlus" @click="openDrawer('新增')"
          >新增用户</el-button
        >
        <el-button type="primary" :icon="Upload" plain @click="batchAdd"
          >批量添加用户</el-button
        >
        <el-button type="primary" :icon="Download" plain @click="downloadFile"
          >导出用户数据</el-button
        >
        <el-button
          type="danger"
          :icon="Delete"
          plain
          :disabled="!scope.isSelected"
          @click="batchDelete()"
        >
          批量删除用户
        </el-button>
      </template>
      <template #gender="scope">
        <span>{{ scope.row["gender"] === "1" ? "男" : "女" }}</span>
      </template>
      <template #status="scope">
        <el-switch
          v-model="scope.row.status"
          :active-text="scope.row.status === 1 ? '启用' : '禁用'"
          :active-value="1"
          :inactive-value="0"
          @change="handleSwitchChange"
        />
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
          >重置密码</el-button
        >
        <el-button
          type="primary"
          link
          :icon="Delete"
          @click="deleteAccount(scope.row)"
          >删除</el-button
        >
      </template>
    </pro-table>
    <card
      v-model="isDialogShow"
      v-model:adminId="adminId"
      :titleName="titleName"
      :isView="isView"
      @success="handleSubmit"
    />
  </div>
</template>

<script setup lang="ts">
import Card from "./components/card.vue";
import { ref, reactive, computed, watch } from "vue";
import {
  View,
  EditPen,
  Refresh,
  Delete,
  CirclePlus,
  Download,
  Upload,
} from "@element-plus/icons-vue";
import type { Form } from "@/types/form";
import type { TableData } from "./index";
const searchParam = reactive({}); //查询表单字段
//条件查询表单
const getSearchList = ref([
  {
    searchType: "text",
    label: "商品名称",
    prop: "name",
    isShow: true,
  },
  {
    searchType: "text",
    label: "商品ID",
    prop: "id",
    isShow: true,
  },
  {
    searchType: "text",
    label: "商品价格",
    prop: "price",
    isShow: true,
  },
  {
    searchType: "text",
    label: "商品价格",
    prop: "price",
    isShow: true,
  },
  {
    searchType: "select",
    label: "商品种类",
    prop: "time",
    isShow: true,
  },
  {
    searchType: "daterange",
    label: "起始时间",
    prop: "time",
    isShow: true,
  },
]);
//表单数据
const tableData = ref<Array<TableData>>([
  {
    id: 1,
    gender: "1",
    idCard: "130626100112910011",
    status: "0",
    role: "运营",
    createTime: "2022-08-29 15:02:45",
  },
  {
    id: 2,
    gender: "0",
    idCard: "130626100112910011",
    status: "1",
    role: "财务",
    createTime: "2022-08-29 15:02:05",
  },
  {
    id: 3,
    gender: "1",
    idCard: "130626100112910011",
    status: "1",
    role: "超级管理员",
    createTime: "2022-08-29 15:02:05",
  },
]);
//表头字段以及配置
const tableColumns = ref<Partial<Form.SearchFormItem>[]>([
  { type: "selection", width: 80, fixed: "left" },
  // { type: "expand", label: "Expand", width: 100 },
  // { prop: "username", label: "用户姓名", width: 130, search: true, renderHeader },
  // // 😄 enum 可以直接是数组对象，也可以是请求方法(proTable 内部会执行获取 enum 的这个方法)，下面用户状态也同理
  // // 😄 enum 为请求方法时，后台返回的数组对象 key 值不是 label 和 value 的情况，可以在 searchProps 中指定 label 和 value 的 key 值
  {
    prop: "id",
    label: "ID",
    width: 100,
    searchType: "text",
  },
  {
    prop: "role",
    label: "用户身份",
    width: 100,
    tag: true,
  },
  {
    prop: "gender",
    label: "性别",
    width: 120,
    sortable: true,
    searchType: "select",
  },
  { prop: "idCard", label: "身份证号", width: 200 },
  { prop: "email", label: "邮箱", width: 200 },
  { prop: "address", label: "居住地址", width: 200 },
  {
    prop: "status",
    label: "用户状态",
    sortable: true,
    searchType: "select",
    width: 140,
  },
  {
    prop: "createTime",
    label: "创建时间",
    width: 200,
    sortable: true,
    // 	searchType: "datetimerange",
    // 	searchProps: {
    // 		disabledDate: (time: Date) => time.getTime() < Date.now() - 8.64e7
    // 	},
    // 	searchInitParam: ["2022-08-30 00:00:00", "2022-08-20 23:59:59"]
  },
  {
    prop: "operation",
    label: "操作",
    width: 330,
    fixed: "right",
  },
]);
// 分页配置
const page = reactive<Form.Pageable>({
  page: 1,
  limit: 10,
  total: 0,
});
const border = ref(true);
const titleName = ref<string>("用户");
// Dialog操作
const isDialogShow = ref(false);
const adminId = ref<number | null>(null);
const isView = ref(false);
// 表单增删改查
const batchAdd = () => {};
const downloadFile = () => {};
const batchDelete = () => {};
// 表单操作
const openDrawer = (name: string, row?: any) => {
  if (name === "新增") {
    isDialogShow.value = true;
  }
  if (name === "编辑") {
    isDialogShow.value = true;
    adminId.value = row.id;
  }
  if (name === "查看") {
    isView.value = true;
  }
};
const handleSubmit = () => {
  isDialogShow.value = false;
};
const resetPass = (row: any) => {};
const deleteAccount = (row: any) => {};
//表单内元素事件
const handleSwitchChange = (e: number) => {
  console.log(e);
};
</script>
<style lang="scss" scoped></style>
