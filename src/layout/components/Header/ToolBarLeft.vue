<!--
 * @Descripttion: 左侧工具栏
 * @Author: DXY
 * @Date: 2022-11-15 13:42:14
 * @LastEditors: DXY
 * @LastEditTime: 2022-11-15 18:00:55
-->
<template>
  <div class="flx-center tool-bar-lf">
    <collapse-icon />
    <breadcrumb />
  </div>
</template>

<script setup lang="ts">
import CollapseIcon from "./components/CollapseIcon.vue";
import Breadcrumb from "./components/Breadcrumb.vue";
</script>
<style lang="scss" scoped></style>
