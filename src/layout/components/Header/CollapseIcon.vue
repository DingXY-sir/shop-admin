<!--
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-08-18 10:31:03
 * @LastEditors: DXY
 * @LastEditTime: 2022-08-18 11:36:27
-->
<template>
  <div class="container flx-items-center">
    <el-icon class="icon" @click="menuStore.setCollapse()">
      <component :is="isCollapse ? 'expand' : 'fold'"></component>
    </el-icon>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useMenuStore } from "@/store/modules/menu";

const menuStore = useMenuStore();
const isCollapse = computed((): boolean => {
  return menuStore.isCollapse;
});
</script>
<style lang="scss" scoped>
.icon {
  font-size: 24px;
  cursor: pointer;
}
</style>
