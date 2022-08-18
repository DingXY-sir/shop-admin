<!--
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-08-15 17:40:02
 * @LastEditors: DXY
 * @LastEditTime: 2022-08-18 15:50:09
-->
<template>
  <div class="container flx-justify-between">
    <div>
      <collapse-icon />
    </div>
    <div class="fn flx-justify-around">
      <full-screen />
      <avatar />
    </div>
  </div>
</template>

<script setup lang="ts">
import CollapseIcon from "./collapseIcon.vue";
import Avatar from "./Avatar.vue";
import FullScreen from "./Fullscreen.vue";
import { ref, reactive, computed, watch } from "vue";
</script>
<style lang="scss" scoped>
.container {
  div {
    height: 100%;
  }
  .fn {
    width: 160px;
  }
}
</style>
