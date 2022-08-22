<!--
 * @Descripttion: tabs组件
 * @Author: DXY
 * @Date: 2022-08-22 16:10:24
 * @LastEditors: DXY
 * @LastEditTime: 2022-08-22 17:29:59
-->
<template>
  <div class="tabs-container flx-items-center">
    <el-tag
      v-for="(tag, index) in tagsList"
      class="tag_item"
      :key="tag.path"
      :closable="tag.path !== '/home/index'"
      :effect="currentTag === tag.path ? 'dark' : 'plain'"
      :disable-transitions="false"
      @click="currentHandle(tag)"
      @close="handleClose(tag, index)"
    >
      {{ tag.title }}
    </el-tag>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from "vue";
import { useTagsStore } from "@/store/modules/tags";
import { TagItem } from "@/types/tags";
import { useRoute, useRouter } from "vue-router";
const tagsStore = useTagsStore();
const route = useRoute();
const router = useRouter();
const tagsList = tagsStore.tagsList;
const currentTag = computed(() => {
  return route.path;
});
const currentHandle = (item: TagItem) => {
  router.push(item.path);
};
const handleClose = (item: TagItem, index: number) => {
  //1、获取tags长度
  let length = tagsList.length - 1;
  tagsStore.colseTagsList(item);
  //2、关闭的tag是否和当前路由一致
  if (item.path !== route.path) {
    return false;
  }
  //3、判断当前点击的位置（点击最后一个，高亮向前移动;点击中间某一个，高亮向后移动）
  if (length === index) {
    router.push(tagsList[index - 1].path);
  } else {
    router.push(tagsList[index].path);
  }
};
</script>
<style lang="scss" scoped>
.tabs-container {
  box-sizing: border-box;
  height: 34px;
  margin: 0;
  padding: 0 10px;
  .tag_item {
    margin-right: 10px;
    cursor: pointer;
  }
}
</style>
