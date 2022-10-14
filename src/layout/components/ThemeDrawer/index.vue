<!--
 * @Descripttion: 设置布局
 * @Author: DXY
 * @Date: 2022-10-10 15:41:23
 * @LastEditors: DXY
 * @LastEditTime: 2022-10-14 11:26:24
-->
<template>
  <el-drawer v-model="themeVisible" title="布局设置" size="300px">
    <!-- 全局主题start -->
    <div>
      <el-divider> 全局主题 </el-divider>
    </div>
    <div class="theme_item flx-justify-between">
      <span>主题颜色</span>
      <el-color-picker
        v-model="themeConfig.primary"
        :predefine="primaryColorsList"
        @change="changePrimary"
      />
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
import { ref, reactive, computed, watch } from "vue";
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
</script>
<style lang="scss" scoped>
.theme_item:not(:first-child) {
  margin-top: 10px;
}
</style>
