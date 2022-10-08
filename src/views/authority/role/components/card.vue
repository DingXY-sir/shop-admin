<!--
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-09-02 13:36:32
 * @LastEditors: DXY
 * @LastEditTime: 2022-10-08 10:51:30
-->
<template>
  <base-dialog
    :title="adminId ? `编辑${titleName}` : `新增${titleName}`"
    @confirm="handleConfirm"
  >
    <div></div>
  </base-dialog>
</template>

<script setup lang="ts">
interface PropsType {
  adminId: number | null;
  titleName: string;
}
defineProps<PropsType>();
interface EmitsType {
  (e: "success"): void;
}
const emit = defineEmits<EmitsType>();

const handleConfirm = () => {
  console.log("确认");
  emit("success");
};
</script>
<style lang="scss" scoped></style>
