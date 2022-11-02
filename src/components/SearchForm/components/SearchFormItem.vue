<!--
 * @Descripttion: 表单form搜索子项
 * @Author: DXY
 * @Date: 2022-08-23 11:28:52
 * @LastEditors: DXY
 * @LastEditTime: 2022-10-27 11:11:42
-->
<!--
 * TS  ! 非空断言操作符
-->
<template>
  <!-- 文本框 -->
  <template v-if="item.searchType === 'text'">
    <el-input v-model="searchParam[item.prop!]" :placeholder="`请输入${item.label}`"></el-input>
  </template>
  <!-- 下拉选择框 -->
  <template v-if="item.searchType == 'select' || item.searchType == 'multipleSelect'">
    <el-select
      v-model="searchParam[item.prop!]"
      :placeholder="`请选择${item.label}`"
      :multiple="item.searchType == 'multipleSelect'"
    >
      <el-option
        v-for="itemValue in item.enum"
        :key="itemValue.value"
        :value="itemValue.value"
        :label="itemValue.label"
        :disabled="itemValue.disabled"
      ></el-option>
    </el-select>
  </template>
  <!-- 下拉树形选择框 -->
  <template v-if="item.searchType == 'treeSelect' || item.searchType == 'multipleTreeSelect'">
    <el-tree-select v-model="searchParam[item.prop!]" :multiple="item.searchType == 'multipleTreeSelect'" :data="item.enum" />
  </template>
  <!-- 日期时间范围选择 -->
  <template v-if="item.searchType == 'daterange'">
    <el-date-picker
      unlink-panels
      :clearable="false"
      v-model="searchParam[item.prop!]"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
    >
    </el-date-picker>
  </template>
</template>

<script setup lang="ts">
import { Form } from "@/types/form";
interface SearchFormItem {
  searchParam: any;
  item: Partial<Form.Column>;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const prop = defineProps<SearchFormItem>();
</script>
<style lang="scss" scoped></style>
