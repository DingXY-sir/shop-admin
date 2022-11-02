<!--
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-08-15 17:36:34
 * @LastEditors: DXY
 * @LastEditTime: 2022-11-02 20:41:29
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
        <el-main>
          <!-- <section class="main-box"> -->
          <router-view v-slot="{ Component, route }">
            <transition name="fade-transform" appear mode="out-in">
              <keep-alive v-if="isRouterRefresh">
                <component :is="Component" :key="route.path"></component>
              </keep-alive>
            </transition>
          </router-view>
          <!-- </section> -->
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
import { ref, nextTick, provide } from "vue";

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
