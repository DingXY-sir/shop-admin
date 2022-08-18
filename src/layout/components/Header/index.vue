<!--
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-08-15 17:40:02
 * @LastEditors: DXY
 * @LastEditTime: 2022-08-18 11:34:20
-->
<template>
  <div class="container">
    <div>
      <collapse-icon />
    </div>
  </div>
</template>

<script setup lang="ts">
import CollapseIcon from "./collapseIcon.vue";
import { ref, reactive, computed, watch } from "vue";
</script>
<style lang="scss" scoped>
.container {
  div {
    height: 100%;
  }
}
</style>
