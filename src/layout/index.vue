<!--
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-08-15 17:36:34
 * @LastEditors: DXY
 * @LastEditTime: 2022-08-18 13:46:49
-->
<template>
  <div class="container">
    <el-container>
      <el-aside width="200px">
        <com-menu />
      </el-aside>
      <el-container>
        <el-header><com-header /></el-header>
        <el-main>
          <section class="main-box">
            <router-view />
          </section>
        </el-main>
        <el-footer><com-footer /></el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import ComMenu from "./components/Menu/index.vue";
import ComHeader from "./components/Header/index.vue";
import ComFooter from "./components/Footer/index.vue";

import { ref, reactive, computed, watch } from "vue";
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
