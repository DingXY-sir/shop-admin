<!--
 * @Descripttion: tabs组件
 * @Author: DXY
 * @Date: 2022-08-22 16:10:24
 * @LastEditors: DXY
 * @LastEditTime: 2022-11-02 15:14:40
-->
<template>
  <div class="tab-box">
    <div class="tabs-menu">
      <el-tabs v-model="tabsMenuValue" type="card" @tab-click="tabClick" @tab-remove="tabRemove">
        <el-tab-pane v-for="item in tabsMenuList" :key="item.path" :label="item.title" :name="item.path" :closable="item.close">
          <template #label>
            <el-icon class="tabs-icon" v-if="item.icon">
              <component :is="item.icon"></component>
            </el-icon>
            {{ item.title }}
          </template>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useTagsStore } from "@/store/modules/tags";
import type { TabsPaneContext } from "element-plus";

const route = useRoute();
const router = useRouter();
const tagsStore = useTagsStore();

const tabsMenuValue = ref(route.path);
const tabsMenuList = computed(() => tagsStore.tagsList);

// * 监听路由变化 防止浏览器前进后退不变化
watch(
  () => route.path,
  () => {
    tabsMenuValue.value = route.path;
    // 将当前路由添加到tabsList
    const tabParam = {
      icon: route.meta.icon as string,
      title: route.meta.title,
      path: route.path as string,
      close: !route.meta.isAffix,
    };
    tagsStore.addTagsList(tabParam);
  },
  {
    immediate: true,
  },
);

const tabClick = (tabItem: TabsPaneContext) => {
  let path = tabItem.props.name as string;
  router.push(path);
};
const tabRemove = (activePath: string) => {
  tagsStore.colseTagsList(activePath, activePath == route.path);
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
