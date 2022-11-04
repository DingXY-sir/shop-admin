<!--
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-08-15 17:36:34
 * @LastEditors: DXY
 * @LastEditTime: 2022-11-04 10:22:55
-->
<template>
  <div class="container">
    <el-container>
      <el-aside width="200px">
        <com-menu />
      </el-aside>
      <el-container>
        <el-header>
          <com-header />
          <com-tabs />
        </el-header>
        <Maximize v-if="themeConfig.maximize" />
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
        <el-footer><com-footer /></el-footer>
      </el-container>
    </el-container>
    <theme-drawer />
  </div>
</template>

<script setup lang="ts">
import ComMenu from "./components/Menu/index.vue";
import ComHeader from "./components/Header/index.vue";
import ComFooter from "./components/Footer/index.vue";
import ComTabs from "./components/Tabs/index.vue";
import ThemeDrawer from "./components/ThemeDrawer/index.vue";
import Maximize from "./components/Main/components/Maximize.vue";
import { ref, nextTick, provide, computed } from "vue";
import { useGlobalState } from "@/store/index";

// * 内容全屏
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
@import "./index.scss";
</style>
