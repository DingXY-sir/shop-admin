<!--
 * @Descripttion: 暗黑模式
 * @Author: DXY
 * @Date: 2022-10-13 17:09:36
 * @LastEditors: DXY
 * @LastEditTime: 2022-10-13 17:24:09
-->
<template>
  <el-switch
    v-model="themeConfig.isDark"
    class="mt-2"
    style="margin-left: 24px"
    inline-prompt
    :active-icon="Moon"
    :inactive-icon="Sunny"
    @change="handleChange"
  />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Moon, Sunny } from "@element-plus/icons-vue";
import { useTheme } from "@/hooks/useTheme";
import { useGlobalState } from "@/store/index";

const globalState = useGlobalState();
const { switchDark } = useTheme();

const themeConfig = computed(() => globalState.themeConfig);
const handleChange = () => {
  switchDark();
};
</script>
<style lang="scss" scoped></style>
