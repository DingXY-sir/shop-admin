<!--
 * @Descripttion: 设置布局
 * @Author: DXY
 * @Date: 2022-10-10 15:41:23
 * @LastEditors: DXY
 * @LastEditTime: 2022-11-16 10:34:00
-->
<template>
  <el-drawer v-model="themeVisible" title="布局设置" size="300px">
    <!-- 布局 -->
    <div>
      <el-divider> 布局切换 </el-divider>
    </div>
    <div class="layout-box">
      <!-- 纵向 -->
      <div
        :class="['layout-item layout-longitudinal', themeConfig.layout == 'vertical' ? 'is-active' : '']"
        @click="changeLayout('vertical')"
      >
        <div class="layout-dark"></div>
        <div class="layout-container">
          <div class="layout-light"></div>
          <div class="layout-content"></div>
        </div>
        <el-icon v-if="themeConfig.layout == 'vertical'"><CircleCheck /></el-icon>
      </div>
      <!-- 经典 -->
      <div
        :class="['layout-item layout-classic', themeConfig.layout == 'classic' ? 'is-active' : '']"
        @click="changeLayout('classic')"
      >
        <div class="layout-dark"></div>
        <div class="layout-container">
          <div class="layout-light"></div>
          <div class="layout-content"></div>
        </div>
        <el-icon v-if="themeConfig.layout == 'classic'"><CircleCheck /></el-icon>
      </div>
      <!-- 横向 -->
      <div
        :class="['layout-item layout-transverse', themeConfig.layout == 'transverse' ? 'is-active' : '']"
        @click="changeLayout('transverse')"
      >
        <div class="layout-dark"></div>
        <div class="layout-content"></div>
        <el-icon v-if="themeConfig.layout == 'transverse'"><CircleCheck /></el-icon>
      </div>
    </div>
    <!-- 全局主题start -->
    <div>
      <el-divider> 全局主题 </el-divider>
    </div>
    <div class="theme_item flx-justify-between">
      <span>主题颜色</span>
      <el-color-picker v-model="themeConfig.primary" :predefine="primaryColorsList" @change="changePrimary" />
    </div>
    <!-- 暗黑模式strat -->
    <div class="theme_item flx-justify-between">
      <span>暗黑模式</span>
      <switch-dark />
    </div>
    <!-- 暗黑模式end -->
    <!-- 全局主题end  -->
  </el-drawer>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useGlobalState } from "@/store/index";
import { DEFAULT_COLOR } from "@/config/config";
import { useTheme } from "@/hooks/useTheme";
import mittBus from "@/utils/mittBus";
import SwitchDark from "@/components/SwitchDark/index.vue";

const primaryColorsList = [
  DEFAULT_COLOR,
  "#DAA96E",
  "#0C819F",
  "#409EFF",
  "#27ae60",
  "#ff5c93",
  "#e74c3c",
  "#fd726d",
  "#f39c12",
  "#9b59b6",
];
const { changePrimary } = useTheme();

const globalStore = useGlobalState();
const themeConfig = computed(() => globalStore.themeConfig);

const themeVisible = ref(false);
mittBus.on("openThemeDrawer", () => (themeVisible.value = true));

// 监听布局变化，在 body 上添加相对应的 layout class
watch(
  () => themeConfig.value.layout,
  () => {
    const body = document.body as HTMLElement;
    body.setAttribute("class", themeConfig.value.layout);
  },
  { immediate: true },
);

// * 切换布局
const changeLayout = (val: string) => {
  globalStore.setThemeConfig({ ...themeConfig.value, layout: val });
};
</script>
<style lang="scss" scoped>
.theme_item:not(:first-child) {
  margin-top: 10px;
}
@import "./index.scss";
</style>
