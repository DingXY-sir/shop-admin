<!--
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-08-15 17:40:02
 * @LastEditors: DXY
 * @LastEditTime: 2022-08-22 16:46:42
-->
<template>
  <div class="container flx-justify-between" style="padding: 0 15px">
    <div class="flx-center">
      <collapse-icon />
      <breadcrumb />
    </div>
    <div class="fn flx-justify-around">
      <full-screen />
      <avatar />
    </div>
  </div>
</template>

<script setup lang="ts">
import CollapseIcon from "./components/CollapseIcon.vue";
import Breadcrumb from "./components/Breadcrumb.vue";
import Avatar from "./components/Avatar.vue";
import FullScreen from "./components/Fullscreen.vue";
import { ref, reactive, computed, watch } from "vue";
</script>
<style lang="scss" scoped>
.container {
  height: 60px;
  border-bottom: 1px solid $tagsBorderColor;
  .fn {
    width: 160px;
  }
}
</style>
