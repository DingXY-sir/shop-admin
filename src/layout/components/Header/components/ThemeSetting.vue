<!--
 * @Descripttion: header栏主题
 * @Author: DXY
 * @Date: 2022-10-10 15:18:27
 * @LastEditors: DXY
 * @LastEditTime: 2022-10-14 11:31:57
-->
<template>
  <div class="theme-container flx-items-center">
    <el-image class="theme_img" :src="theme" @click="handleTheme"></el-image>
  </div>
</template>

<script setup lang="ts">
import mittBus from "@/utils/mittBus";
const theme = new URL("../../../../assets/images/theme.png", import.meta.url).href;
const handleTheme = () => {
  mittBus.emit("openThemeDrawer");
};
</script>
<style lang="scss" scoped>
.theme_img {
  width: 22.4px;
  height: 22.4px;
  cursor: pointer;
}
</style>
