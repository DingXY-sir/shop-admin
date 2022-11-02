<!--
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-08-15 17:40:36
 * @LastEditors: DXY
 * @LastEditTime: 2022-11-02 21:37:47
-->
<template>
  <div class="container">
    <el-menu
      :default-active="activeMenu"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      active-text-color="#fff"
      text-color="#bdbdc0"
      background-color="#191a20"
      router
    >
      <sub-menu :menuList="authStore.getAuthMenuList" />
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { AuthStore } from "@/store/modules/auth";
import { useMenuStore } from "@/store/modules/menu";
import subMenu from "./menuList.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const menuStore = useMenuStore();
const isCollapse = computed((): boolean => menuStore.isCollapse);
const activeMenu = computed((): string => route.path);

// *获取Menu接口数据
const authStore = AuthStore();

// menuStore.setMenuList(authStore.getAuthMenuList);
</script>
<style lang="scss" scoped>
.container {
  transition: all 0.4s ease;
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
}
</style>
