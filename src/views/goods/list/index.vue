<!--
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-08-19 17:08:10
 * @LastEditors: DXY
 * @LastEditTime: 2022-08-24 14:51:02
-->
<template>
  <div class="container">
    <search-form
      :searchParam="searchParam"
      :getSearchList="getSearchList"
    ></search-form>
  </div>
</template>

<script setup lang="ts">
import SearchForm from "@/components/ SearchForm/index.vue";
import { ref, reactive, computed, watch } from "vue";
const searchParam = reactive({});
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
</script>
<style lang="scss" scoped></style>
