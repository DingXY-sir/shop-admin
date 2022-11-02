<!--
 * @Descripttion: tabs组件
 * @Author: DXY
 * @Date: 2022-08-22 16:10:24
 * @LastEditors: DXY
 * @LastEditTime: 2022-11-02 10:05:41
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
      <el-icon>
        <component :is="tag.meta.icon"></component>
      </el-icon>
      {{ tag.meta.title }}
    </el-tag>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useTagsStore } from "@/store/modules/tags";
import { TagType } from "@/types/tags";
import { useRoute, useRouter } from "vue-router";
const tagsStore = useTagsStore();
const route = useRoute();
const router = useRouter();
const tagsList = tagsStore.tagsList;
const currentTag = computed(() => {
  return route.path;
});
const currentHandle = (item: TagType) => {
  router.push(item.path);
};
const handleClose = (item: TagType, index: number) => {
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
    :deep(.el-tag__content) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .el-tag--plain {
    --el-tag-border-color: var(--el-color-primary);
  }
  .el-tag--dark {
    --el-tag-hover-color: none;
  }
}
</style>
