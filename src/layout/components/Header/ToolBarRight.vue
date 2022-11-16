<!--
 * @Descripttion: 右侧工具栏
 * @Author: DXY
 * @Date: 2022-11-15 13:42:30
 * @LastEditors: DXY
 * @LastEditTime: 2022-11-15 17:54:59
-->
<template>
  <div class="fn flx-justify-around tool-bar-ri">
    <theme-setting />
    <full-screen />
    <avatar />
  </div>
</template>

<script setup lang="ts">
import ThemeSetting from "./components/ThemeSetting.vue";
import FullScreen from "./components/Fullscreen.vue";
import Avatar from "./components/Avatar.vue";
</script>
<style lang="scss" scoped>
.fn {
  width: 200px;
}
</style>
