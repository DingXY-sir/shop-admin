<!--
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-08-15 17:40:36
 * @LastEditors: DXY
 * @LastEditTime: 2022-09-12 20:35:41
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
      <sub-menu :menuList="menuData" />
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from "vue";
import { useMenuStore } from "@/store/modules/menu";
import subMenu from "./menuList.vue";
import { useRoute } from "vue-router";
const route = useRoute();
const menuStore = useMenuStore();
const isCollapse = computed((): boolean => menuStore.isCollapse);
const activeMenu = computed((): string => route.path);

//模拟导航接口数据
const menuData = ref([
  { icon: "home-filled", path: "/home/index", title: "首页" },
  {
    icon: "goods-filled",
    path: "/goods",
    title: "商品管理",
    children: [
      { icon: "home-filled", path: "/goods/list", title: "商品列表" },
      { icon: "home-filled", path: "/goods/addGoods", title: "添加商品" },
    ],
  },
  {
    icon: "user-filled",
    path: "/user",
    title: "用户管理",
    children: [{ icon: "goods-filled", path: "/user/list", title: "用户列表" }],
  },
  {
    icon: "avatar",
    path: "/authority",
    title: "权限管理",
    children: [
      {
        icon: "circle-plus-filled",
        path: "/authority/auth",
        title: "权限列表",
      },
      { icon: "help-filled", path: "/authority/role", title: "角色管理" },
    ],
  },
]);
menuStore.setMenuList(menuData.value);
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
