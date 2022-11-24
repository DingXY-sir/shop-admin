<!--
 * @Descripttion: 经典布局
 * @Author: DXY
 * @Date: 2022-11-15 11:50:28
 * @LastEditors: DXY
 * @LastEditTime: 2022-11-24 15:34:21
-->
<template>
  <el-container class="layout">
    <el-header>
      <div class="header-lf flx-center">
        <img class="shop-admin-logo" src="@/assets/images/shop-admin-logo.png" alt="" />
        <div class="logo pad_rt">Shop-Admin</div>
        <tool-barLeft />
      </div>
      <tool-barRight />
    </el-header>
    <el-container class="classic-content">
      <el-aside>
        <div class="menu" :style="{ width: isCollapse ? '65px' : '210px' }">
          <el-scrollbar>
            <el-menu
              :default-active="activeMenu"
              class="el-menu-vertical-demo"
              :collapse="isCollapse"
              background-color="#ffffff"
              text-color="#303133"
              router
            >
              <sub-menu :menuList="authStore.showMenuListGet" />
            </el-menu>
          </el-scrollbar>
        </div>
      </el-aside>
      <el-container class="classic-main">
        <Main />
      </el-container>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import ToolBarLeft from "../components/Header/ToolBarLeft.vue";
import ToolBarRight from "../components/Header/ToolBarRight.vue";
import Main from "../components/Main/index.vue";
import SubMenu from "../components/Menu/menuList.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
import { AuthStore } from "@/store/modules/auth";
import { useMenuStore } from "@/store/modules/menu";

const route = useRoute();
const menuStore = useMenuStore();
const activeMenu = computed((): string => route.path);
const isCollapse = computed((): boolean => menuStore.isCollapse); // 是否展开/折叠

// * 获取异步菜单
const authStore = AuthStore();
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
<style lang="scss">
.classic {
  .classic-content {
    height: calc(100% - 55px); // 减去头部高度
    .classic-main {
      display: flex;
      flex-direction: column !important;
    }
  }
  .el-menu,
  .el-menu--popup {
    .el-menu-item {
      &.is-active {
        background: var(--el-color-primary-light-9);
        &::before {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 4px;
          content: "";
          background: var(--el-color-primary);
        }
      }
    }
  }
  // #driver-highlighted-element-stage {
  //   background-color: #606266 !important;
  // }
}
</style>
