<!--
 * @Descripttion: header栏面包屑
 * @Author: DXY
 * @Date: 2022-08-22 14:16:03
 * @LastEditors: DXY
 * @LastEditTime: 2022-10-10 10:29:13
-->
<template>
  <div class="bread-container flx-center">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item
        v-for="item in routes"
        :key="item.path"
        :to="{ path: item.path }"
      >
        {{ item.meta.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, computed, watch } from "vue";
import { ArrowRight } from "@element-plus/icons-vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const routes = computed(() => {
  return router.currentRoute.value.matched.filter(
    (item) => item.meta.title && item.meta.title !== "首页"
  );
});
</script>
<style lang="scss" scoped>
.bread-container {
  margin-left: 24px;
}
</style>
