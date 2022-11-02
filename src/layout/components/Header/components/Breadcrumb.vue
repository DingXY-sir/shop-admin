<!--
 * @Descripttion: header栏面包屑
 * @Author: DXY
 * @Date: 2022-08-22 14:16:03
 * @LastEditors: DXY
 * @LastEditTime: 2022-11-02 10:22:36
-->
<template>
  <div class="bread-container flx-center">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/home/index' }" v-if="breadcrumbList[0].meta.title !== '首页'">
        <div class="breadcrumb-item flx-center">
          <el-icon class="breadcrumb-icon"> <HomeFilled /> </el-icon>首页
        </div>
      </el-breadcrumb-item>
      <el-breadcrumb-item v-for="item in breadcrumbList" :key="item.path">
        <div class="breadcrumb-item flx-center">
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
  .breadcrumb-item {
    .breadcrumb-icon {
      margin-right: 4px;
    }
  }
}
</style>
