<!--
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-11-01 09:54:16
 * @LastEditors: DXY
 * @LastEditTime: 2022-11-01 10:07:00
-->
<template>
  <div class="container flx-center">
    <div class="not-found"></div>
    <div class="not-found-font">
      <h2>403</h2>
      <p>抱歉，你访问的页面不存在～🤷‍♂️🤷‍♀️</p>
      <el-button type="primary" @click="router.push('/login')">返回首页</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
//跳转首页权限判断
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
