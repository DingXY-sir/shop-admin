<!--
 * @Descripttion: 对话框
 * @Author: DXY
 * @Date: 2022-08-30 17:39:28
 * @LastEditors: DXY
 * @LastEditTime: 2022-08-31 14:22:21
-->
<template>
  <el-dialog ref="dialogRef" width="40%">
    <slot></slot>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleCancel">取消</el-button>
        <el-button type="primary" @click="emit('confirm')">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from "vue";
import type { DialogInstance } from "@/types/element-plus";

const dialogRef = ref<DialogInstance | null>(null);

const handleCancel = () => {
  if (dialogRef.value) {
    dialogRef.value.visible = false; //通过dialog实例关闭弹框
  }
};

interface EmitsType {
  (e: "confirm"): void;
}
const emit = defineEmits<EmitsType>();
</script>
<style lang="scss" scoped></style>
