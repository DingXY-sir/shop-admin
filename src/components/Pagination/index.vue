<!--
 * @Descripttion: 分页
 * @Author: DXY
 * @Date: 2022-08-25 09:11:37
 * @LastEditors: DXY
 * @LastEditTime: 2022-08-31 14:08:52
-->
<template>
  <el-pagination
    :current-page="prop.page"
    :page-size="prop.limit"
    :page-sizes="[10, 20, 50, 100]"
    :background="background"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from "vue";
const background = ref(true);
interface PropsType {
  page: number;
  limit: number;
  total: number;
  getList: () => void;
}
interface EmitsType {
  (e: "update:page", value: number): void;
  (e: "update:limit", page: number): void;
}
const prop = withDefaults(defineProps<PropsType>(), {
  page: 1,
  limit: 10,
  total: 0,
  getList: () => {},
});

const emit = defineEmits<EmitsType>();
const handleSizeChange = (size: number) => {
  emit("update:limit", size);
  emit("update:page", 1);
  prop.getList();
};
const handleCurrentChange = (page: number) => {
  emit("update:page", page);
  prop.getList();
};
</script>
<style lang="scss" scoped></style>
