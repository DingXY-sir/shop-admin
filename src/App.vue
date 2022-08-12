<!--
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-08-10 13:46:42
 * @LastEditors: DXY
 * @LastEditTime: 2022-08-12 13:36:43
-->
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
// 测试start
import { ref, watch, watchEffect } from "vue";
const iptVal = ref("你好");
const ipt = ref("HelloWorld");
const iptChange = () => {
  iptVal.value = "HelloWorld!";
  ipt.value = "你好";
};
// 测试end
</script>

<template>
  <HelloWorld msg="Vite + Vue" />
  <input type="text" v-model="iptVal" />
  <button @click="iptChange">修改</button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
