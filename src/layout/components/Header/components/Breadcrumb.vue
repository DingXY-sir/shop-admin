<!--
 * @Descripttion: header栏面包屑
 * @Author: DXY
 * @Date: 2022-08-22 14:16:03
 * @LastEditors: DXY
 * @LastEditTime: 2022-11-01 21:23:16
-->
<template>
  <div class="bread-container flx-center">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/home/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="item in breadcrumbList" :key="item.path" :to="{ path: item.path }">
        <div class="breadcrumb-item">
          <el-icon class="breadcrumb-icon" v-if="item.meta.icon">
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span class="breadcrumb-title">{{ item.meta.title }}</span>
        </div>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { ArrowRight } from "@element-plus/icons-vue";
import { AuthStore } from "@/store/modules/auth";
import { useRoute } from "vue-router";

const route = useRoute();
console.log(route);
const authStore = AuthStore();
const breadcrumbList = computed(() => authStore.getShowMenuList[route.path]);
console.log(authStore.getShowMenuList);
console.log(breadcrumbList);
</script>
<style lang="scss" scoped>
.bread-container {
  margin-left: 24px;
}
</style>
