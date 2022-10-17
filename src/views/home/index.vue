<!--
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-08-16 09:23:12
 * @LastEditors: DXY
 * @LastEditTime: 2022-08-18 14:10:30
-->
<template>
  <div class="container flx-center">
    <el-image class="home_img" :src="welcome" />
  </div>
</template>

<script setup lang="ts">
const welcome = new URL("../../assets/images/welcome.png", import.meta.url).href;
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .home_img {
    width: 80%;
    margin-bottom: 25px;
  }
}
</style>
