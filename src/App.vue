<!--
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-08-10 13:46:42
 * @LastEditors: DXY
 * @LastEditTime: 2022-10-13 14:15:35
-->
<script setup lang="ts">
import { ref, computed } from "vue";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import en from "element-plus/lib/locale/lang/en";
import { useTheme } from "@/hooks/useTheme";

const language = ref("zh-cn");
const locale = computed(() => (language.value === "zh-cn" ? zhCn : en));
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
useTheme();
</script>

<template>
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>

<style lang="scss" scoped></style>
