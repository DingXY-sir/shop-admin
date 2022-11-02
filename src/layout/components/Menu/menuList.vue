<!--
 * @Descripttion: menu
 * @Author: DXY
 * @Date: 2022-08-22 11:00:31
 * @LastEditors: DXY
 * @LastEditTime: 2022-11-01 11:07:52
-->
<template>
  <template v-for="menuItem in menuList" :key="menuItem.path">
    <el-sub-menu v-if="menuItem.children && menuItem.children.length > 0" :index="menuItem.path">
      <template #title>
        <el-icon>
          <component :is="menuItem.meta.icon"></component>
        </el-icon>
        <span>{{ menuItem.meta.title }}</span>
      </template>
      <MenuList :menuList="menuItem.children" />
    </el-sub-menu>
    <el-menu-item v-else :index="menuItem.path" @click="tagHandle(menuItem)">
      <el-icon>
        <component :is="menuItem.meta.icon"></component>
      </el-icon>
      <template #title>{{ menuItem.meta.title }}</template>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
import { useTagsStore } from "@/store/modules/tags";
defineProps<{ menuList: Menu.MenuOption[] }>();

const tagsStore = useTagsStore();
const tagHandle = (item: Menu.MenuOption) => {
  const { path, meta } = item;
  let tagItem = { path, meta };
  tagsStore.addTagsList(tagItem);
};
</script>
<style lang="scss" scoped></style>
