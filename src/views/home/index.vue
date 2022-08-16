<!--
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-08-16 09:23:12
 * @LastEditors: DXY
 * @LastEditTime: 2022-08-16 17:05:08
-->
<template>
  <div class="container">
    <el-image :src="welcome" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from "vue";
const welcome = new URL("../../assets/images/welcome.png", import.meta.url)
  .href;
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
