<!--
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-11-14 16:05:43
 * @LastEditors: DXY
 * @LastEditTime: 2022-11-16 10:21:42
-->
<template>
  <Maximize v-if="themeConfig.maximize" />
  <Tabs />
  <el-main>
    <!--
      Component：要渲染的组件；
      route：解析出的标准化路由对象；
    -->
    <router-view v-slot="{ Component, route }">
      <!--name 定义过度动画css：fade-transform 通过使用key属性强制过渡  -->
      <transition name="fade-transform" appear mode="out-in">
        <keep-alive v-if="isRouterRefresh">
          <component :is="Component" :key="route.path"></component>
        </keep-alive>
      </transition>
    </router-view>
  </el-main>
  <el-footer>
    <Footer />
  </el-footer>
</template>

<script setup lang="ts">
import Maximize from "./components/Maximize.vue";
import Tabs from "../Tabs/index.vue";
import Footer from "../Footer/index.vue";
import { ref, computed, nextTick, provide } from "vue";
import { useGlobalState } from "@/store/index";

const globalState = useGlobalState();
const themeConfig = computed(() => globalState.themeConfig);
// * 刷新页面
const isRouterRefresh = ref(true);
const refreshCurrentPage = () => {
  isRouterRefresh.value = false;
  nextTick(() => {
    isRouterRefresh.value = true;
  });
};
provide("refresh", refreshCurrentPage);
</script>
<style lang="scss" scoped>
.el-main {
  box-sizing: border-box;
  padding: 10px 12px;
  overflow-x: hidden;
  background-color: #f0f2f5;
}
.el-footer {
  height: auto;
  padding: 0;
}
</style>
