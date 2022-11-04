<!--
 * @Descripttion: 内容区域全屏
 * @Author: DXY
 * @Date: 2022-11-04 10:09:10
 * @LastEditors: DXY
 * @LastEditTime: 2022-11-04 10:57:57
-->
<template>
  <div class="maximize flx-center" @click="exitMaximize">
    <el-icon><Close /></el-icon>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from "vue";
import { useGlobalState } from "@/store/index";

const globalState = useGlobalState();

const themeConfig = computed(() => globalState.themeConfig);
// * 关闭全屏
const exitMaximize = () => {
  globalState.setThemeConfig({ ...themeConfig.value, maximize: false });
};

watch(
  () => themeConfig.value.maximize,
  () => {
    const app = document.getElementById("app");
    // * Dom classList 添加/删除css
    if (themeConfig.value.maximize) app?.classList.add("main-maximize");
    else app?.classList.remove("main-maximize");
  },
  {
    immediate: true,
  },
);
</script>
<style lang="scss" scoped>
.maximize {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: var(--el-color-info-light-3);
  position: fixed;
  z-index: 999;
  right: 0;
  top: 0;
  cursor: pointer;
  &:hover {
    background-color: var(--el-color-info);
  }
}
</style>
