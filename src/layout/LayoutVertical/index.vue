<!--
 * @Descripttion: 纵向布局
 * @Author: DXY
 * @Date: 2022-11-14 15:02:51
 * @LastEditors: DXY
 * @LastEditTime: 2022-11-16 10:02:08
-->
<template>
  <el-container class="layout">
    <el-aside>
      <div class="menu" :style="{ width: isCollapse ? '65px' : '210px' }">
        <div class="logo"></div>
        <el-scrollbar>
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
        </el-scrollbar>
      </div>
    </el-aside>
    <el-container>
      <el-header>
        <tool-barLeft></tool-barLeft>
        <tool-barRight></tool-barRight>
      </el-header>
      <Main />
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import ToolBarLeft from "../components/Header/ToolBarLeft.vue";
import ToolBarRight from "../components/Header/ToolBarRight.vue";
import SubMenu from "../components/Menu/menuList.vue";
import Main from "../components/Main/index.vue";
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
.vertical {
  .el-menu,
  .el-menu--popup {
    .el-menu-item {
      &.is-active {
        background: #060708;
        &::before {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          left: 0;
          width: 4px;
          content: "";
          background: var(--el-color-primary);
        }
      }
    }
  }
}
</style>
