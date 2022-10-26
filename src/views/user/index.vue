<!--
 * @Descripttion: 用户列表
 * @Author: DXY
 * @Date: 2022-08-22 11:30:02
 * @LastEditors: DXY
 * @LastEditTime: 2022-10-26 16:53:51
-->
<template>
  <div class="view-container">
    <pro-table ref="tableRef" :initParams="initParams" :requestApi="getAllList" :columns="tableColumns" :border="border">
      <template #tableHeader="scope">
        <el-button type="primary" :icon="CirclePlus" @click="handleCreate('新增')">新增用户</el-button>
        <el-button type="primary" :icon="Upload" plain @click="batchCreate">批量添加用户</el-button>
        <el-button type="primary" :icon="Download" plain @click="handleExport">导出用户数据</el-button>
        <el-button type="danger" :icon="Delete" plain :disabled="!scope.isSelected" @click="batchDelected(scope.selectedListIds)">
          批量删除用户
        </el-button>
      </template>
      <template #gender="{ row }">
        <span>{{ row["gender"] === 1 ? "男" : "女" }}</span>
      </template>
      <template #status="{ row }">
        <el-tag :type="row['status'] === 1 ? '' : 'danger'">{{ row["status"] === 1 ? "启用" : "禁用" }}</el-tag>
      </template>
      <template #operation="scope">
        <el-button type="primary" link :icon="View" @click="handleCheck('查看', scope.row)">查看</el-button>
        <el-button type="primary" link :icon="EditPen" @click="handleEdit('编辑', scope.row)">编辑</el-button>
        <el-button type="primary" link :icon="Refresh" @click="handleDeleted(scope.row)">删除</el-button>
      </template>
    </pro-table>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { Delete, CirclePlus, Download, Upload, View, EditPen, Refresh } from "@element-plus/icons-vue";
import { getAllList, getUserStatus } from "@/api/modules/user";
import { genderType } from "@/utils/serverDict";
// * 查询表单参数
const initParams = reactive({
  type: 1,
  createTime: ["2022-09-30 00:00:00", "2022-09-20 23:59:59"],
});

// * 表格列表配置
const tableColumns = ref([
  { type: "selection", width: 80, fixed: "left" },
  {
    prop: "id",
    label: "ID",
    width: 100,
    searchType: "text",
  },
  {
    prop: "username",
    label: "用户姓名",
    search: true,
    searchType: "text",
    isShow: true,
  },
  {
    prop: "gender",
    label: "性别",
    search: true,
    searchType: "select",
    isShow: true,
    enum: genderType,
  },
  {
    prop: "idCard",
    label: "身份证号",
    search: true,
    searchType: "text",
    isShow: true,
  },
  {
    prop: "status",
    label: "用户状态",
    tag: true,
    search: true,
    searchType: "select",
    isShow: true,
    enum: [],
  },
  {
    prop: "address",
    label: "居住地址",
    search: true,
    searchType: "text",
    isShow: true,
  },
  {
    prop: "operation",
    width: 250,
    label: "操作",
    fixed: "right",
  },
]);
// * 表格边框配置
const border = ref(true);
// * 获取用户状态  （使用接口请求展示搜索数据 或 获取全局字典数据）
const getStatus = async () => {
  const res = await getUserStatus();
  tableColumns.value.forEach(item => {
    if (item.prop === "status") {
      return (item.enum = [...res.data!.data]);
    }
  });
};
// * 新增
const handleCreate = (val: string) => {
  console.log(val);
};
// * 批量添加
const batchCreate = () => {};
// * 导出
const handleExport = () => {};
// * 批量删除
const batchDelected = (id: number | string) => {
  console.log(id);
};
// * 查看
const handleCheck = (title: string, row: any) => {
  console.log(title, row);
};
// * 编辑
const handleEdit = (title: string, row: any) => {
  console.log(title, row);
};
// * 删除
const handleDeleted = (id: number | string) => {
  console.log(id);
};
onMounted(() => {
  getStatus();
});
</script>
<style lang="scss" scoped></style>
