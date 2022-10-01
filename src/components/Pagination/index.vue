<!--
 * @Descripttion: 分页
 * @Author: DXY
 * @Date: 2022-08-25 09:11:37
 * @LastEditors: DXY
 * @LastEditTime: 2022-09-29 15:48:41
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
import { ref, reactive, computed, watch } from "vue";
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
// interface PropsType {
//   page: number;
//   limit: number;
//   total: number;
//   getList: () => Promise<void>;
// }
// interface EmitsType {
//   (e: "update:page", value: number): void;
//   (e: "update:limit", page: number): void;
// }
// const prop = withDefaults(defineProps<PropsType>(), {
//   page: 1,
//   limit: 10,
//   total: 0,
//   getList: () => Promise.resolve(),
// });

// const emit = defineEmits<EmitsType>();
// const handleSizeChange = (size: number) => {
//   emit("update:limit", size);
//   emit("update:page", 1);
//   prop.getList();
// };
// const handleCurrentChange = (page: number) => {
//   emit("update:page", page);
//   prop.getList();
// };
</script>
<style lang="scss" scoped></style>
