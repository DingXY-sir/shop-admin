<!--
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-08-19 14:23:45
 * @LastEditors: DXY
 * @LastEditTime: 2022-10-27 17:05:30
-->
<template>
  <div class="main-row-box">
    <tree-filter
      :requestApi="getUserDepartment"
      title="部门列表"
      label="name"
      :defaultValue="treeDefaultValue.departmentId"
      @handle-change="handleChange"
    ></tree-filter>
    <div class="table-box">
      <div class="view-container">
        <pro-table :columns="columns" :border="true" :initParams="treeDefaultValue"></pro-table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { Form } from "@/types/form";
import { getUserDepartment } from "@/api/modules/user";

// * 默认当前选中的节点
const treeDefaultValue = reactive({ departmentId: "1" });
const handleChange = (val: string) => {
  treeDefaultValue.departmentId = val;
};

const columns = ref<Partial<Form.Column>[]>([
  { type: "selection", fixed: "left", width: 80 },
  { label: "姓名", prop: "name", isShow: true, searchType: "text", search: true },
  { label: "职位", prop: "position", isShow: true, searchType: "text", search: true },
  { label: "年限", prop: "years", isShow: true, searchType: "text", search: true },
  { label: "状态", prop: "status", isShow: true, searchType: "select", search: true },
  { prop: "operation", width: 250, label: "操作", fixed: "right" },
]);
</script>
<style lang="scss" scoped></style>
