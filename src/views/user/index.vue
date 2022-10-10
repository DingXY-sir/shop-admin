<!--
 * @Descripttion: 用户列表
 * @Author: DXY
 * @Date: 2022-08-22 11:30:02
 * @LastEditors: DXY
 * @LastEditTime: 2022-10-10 10:14:26
-->
<template>
  <div class="container">
    <input v-focus />
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, computed, watch } from "vue";
const vFocus = {
  mounted: (el: any) => el.focus(),
};
</script>
<style lang="scss" scoped></style>
