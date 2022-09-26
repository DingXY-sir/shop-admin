<!--
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-09-02 13:36:32
 * @LastEditors: DXY
 * @LastEditTime: 2022-09-05 16:24:34
-->
<template>
  <base-dialog :title="adminId ? '编辑' : '新增'">
    <div></div>
  </base-dialog>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from "vue";
interface PropsType {
  adminId: number | null;
}
const prop = defineProps<PropsType>();
</script>
<style lang="scss" scoped></style>
