<!--
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-08-15 17:36:34
 * @LastEditors: DXY
 * @LastEditTime: 2022-11-15 16:03:03
-->
<template>
  <component :is="LayoutComponent[themeConfig.layout]"></component>
  <theme-drawer />
</template>

<script setup lang="ts">
import LayoutVertical from "./LayoutVertical/index.vue";
import LayoutClassic from "./LayoutClassic/index.vue";
import LayoutTransverse from "./LayoutTransverse/index.vue";
import ThemeDrawer from "./components/ThemeDrawer/index.vue";
import { useGlobalState } from "@/store/index";
import { computed } from "vue";

const globalState = useGlobalState();
const themeConfig = computed(() => globalState.themeConfig);

const LayoutComponent = {
  vertical: LayoutVertical,
  classic: LayoutClassic,
  transverse: LayoutTransverse,
};
</script>
<style lang="scss" scoped>
.layout {
  min-width: 740px;
}
</style>
