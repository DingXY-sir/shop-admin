<!--
 * @Descripttion: tags导航标签
 * @Author: DXY
 * @Date: 2022-11-02 15:57:28
 * @LastEditors: DXY
 * @LastEditTime: 2022-11-04 11:01:40
-->
<template>
  <el-dropdown trigger="click">
    <span class="el-dropdown-link">
      <el-button size="small" type="primary">
        {{ $t("tabs.more") }}
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </el-button>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="refresh">
          <el-icon><Refresh /></el-icon>{{ $t("tabs.refresh") }}
        </el-dropdown-item>
        <el-dropdown-item @click="maximize">
          <el-icon><FullScreen /></el-icon>{{ $t("tabs.maximize") }}
        </el-dropdown-item>
        <el-dropdown-item divided @click="closeCurrentTag">
          <el-icon><Remove /></el-icon>{{ $t("tabs.closeCurrent") }}
        </el-dropdown-item>
        <el-dropdown-item @click="colseOtherTag">
          <el-icon><CircleClose /></el-icon>{{ $t("tabs.closeOther") }}
        </el-dropdown-item>
        <el-dropdown-item @click="colseAllTag">
          <el-icon><FolderDelete /></el-icon>{{ $t("tabs.closeAll") }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { inject, computed } from "vue";
import { useTagsStore } from "@/store/modules/tags";
import { useGlobalState } from "@/store/index";
import { useRoute, useRouter } from "vue-router";
import { HOME_RUL } from "@/config/config";

// * 刷新
const reload: Function = inject("refresh") as Function;
const refresh = () => {
  reload();
};

// * 关闭当前
const tagsStore = useTagsStore();
const route = useRoute();
const router = useRouter();

const closeCurrentTag = () => {
  // 防止关闭首页
  if (route.meta.isAffix) return;
  tagsStore.colseTagsList(route.path);
};

// * 内容区域全屏
const globalState = useGlobalState();
const themeConfig = computed(() => globalState.themeConfig);
const maximize = () => {
  globalState.setThemeConfig({ ...themeConfig.value, maximize: true });
};

// * 关闭其他
const colseOtherTag = () => {
  tagsStore.colseAllTags(route.path);
};

// * 关闭所有
const colseAllTag = () => {
  tagsStore.colseAllTags();
  router.push(HOME_RUL);
};
</script>
<style lang="scss" scoped></style>
