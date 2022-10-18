<!--
 * @Descripttion: 分页
 * @Author: DXY
 * @Date: 2022-08-25 09:11:37
 * @LastEditors: DXY
 * @LastEditTime: 2022-10-17 16:28:30
-->

<template>
  <el-pagination
    :current-page="pageable.pageNum"
    :page-size="pageable.pageSize"
    :page-sizes="[10, 20, 50, 100]"
    :background="background"
    layout="total, sizes, prev, pager, next, jumper"
    :total="pageable.total"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
const background = ref(true);
interface Pageable {
  pageNum: number;
  pageSize: number;
  total: number;
}
interface PaginationProps {
  pageable: Pageable;
  handleCurrentChange: (currentPage: number) => void;
  handleSizeChange: (size: number) => void;
}
defineProps<PaginationProps>();
</script>
<style lang="scss" scoped></style>
