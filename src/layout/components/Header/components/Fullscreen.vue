<!--
 * @Descripttion: header栏全屏
 * @Author: DXY
 * @Date: 2022-08-18 15:23:35
 * @LastEditors: DXY
 * @LastEditTime: 2022-10-10 10:30:42
-->
<template>
  <div class="container flx-items-center">
    <el-tooltip
      class="box-item"
      effect="dark"
      :content="isFullscreen ? '退出全屏' : '全屏'"
      placement="bottom"
    >
      <i
        :class="[
          'iconfont',
          isFullscreen ? 'icon-tuichuquanping' : 'icon-quanping',
        ]"
        class="icon_style"
        @click="toggle()"
      ></i>
    </el-tooltip>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from "vue";
import { useFullscreen } from "@vueuse/core";
const { isFullscreen, toggle } = useFullscreen();
</script>
<style lang="scss" scoped>
.icon_style {
  font-size: 24px;
  color: rgb(0 0 0 / 75%);
  cursor: pointer;
}
</style>
