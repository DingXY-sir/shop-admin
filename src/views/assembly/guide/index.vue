<!--
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-11-14 16:53:55
 * @LastEditors: DXY
 * @LastEditTime: 2022-11-25 17:34:30
-->
<template>
  <div class="container">
    <defineText class="active" :activeModel="activeModel" :textNum="textNum" />
    <el-button @click="handleGetParam">获取参数</el-button>
  </div>
</template>

<script setup lang="ts">
import defineText from "./components/defineText.vue";
import { reactive, ref } from "vue";
const activeModel = reactive({
  text: "123",
});
const textNum = ref("000");
const handleGetParam = () => {
  console.log(activeModel.text);
};
</script>
<style lang="scss" scoped>
.active {
  color: red;
}
</style>
