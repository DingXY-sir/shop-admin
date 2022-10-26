<!--
 * @Descripttion: menu
 * @Author: DXY
 * @Date: 2022-08-22 11:00:31
 * @LastEditors: DXY
 * @LastEditTime: 2022-10-22 11:35:50
-->
<template>
  <template v-for="menuItem in menuList" :key="menuItem.path">
    <el-sub-menu v-if="menuItem.children && menuItem.children.length > 0" :index="menuItem.path">
      <template #title>
        <el-icon>
          <component :is="menuItem.icon"></component>
        </el-icon>
        <span>{{ menuItem.title }}</span>
      </template>
      <MenuList :menuList="menuItem.children" />
    </el-sub-menu>
    <el-menu-item v-else :index="menuItem.path" @click="tagHandle(menuItem)">
      <el-icon>
        <component :is="menuItem.icon"></component>
      </el-icon>
      <template #title>{{ menuItem.title }}</template>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
import { MenuOptions } from "@/api/interface/index";
import { useTagsStore } from "@/store/modules/tags";
defineProps<{ menuList: Array<MenuOptions> }>();

const tagsStore = useTagsStore();
const tagHandle = (item: MenuOptions) => {
  const { path, title } = item;
  let tagItem = { path, title };
  tagsStore.addTagsList(tagItem);
};
</script>
<style lang="scss" scoped></style>
