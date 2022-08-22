<!--
 * @Descripttion: menu
 * @Author: DXY
 * @Date: 2022-08-22 11:00:31
 * @LastEditors: DXY
 * @LastEditTime: 2022-08-22 11:30:57
-->
<template>
  <template v-for="menuItem in menuList" :key="menuItem.path">
    <el-sub-menu
      v-if="menuItem.children && menuItem.children.length > 0"
      :index="menuItem.path"
    >
      <template #title>
        <el-icon>
          <component :is="menuItem.icon"></component>
        </el-icon>
        <span>{{ menuItem.title }}</span>
      </template>
      <menu-list :menuList="menuItem.children" />
    </el-sub-menu>
    <el-menu-item v-else :index="menuItem.path">
      <el-icon>
        <component :is="menuItem.icon"></component>
      </el-icon>
      <template #title>{{ menuItem.title }}</template>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from "vue";
import { MenuOptions } from "@/api/interface/index";
defineProps<{ menuList: Array<MenuOptions> }>();
</script>
<style lang="scss" scoped></style>
