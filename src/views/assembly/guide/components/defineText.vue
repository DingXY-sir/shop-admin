<!--
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-11-14 16:55:10
 * @LastEditors: DXY
 * @LastEditTime: 2022-11-14 17:49:50
-->
<template>
  <div class="container">
    <el-input v-model="activeModel.text"></el-input>
  </div>
</template>

<script setup lang="ts">
interface TypeActive {
  activeModel: { [key: string]: any };
}
defineProps<TypeActive>();
</script>
<style lang="scss" scoped>
.container {
  text-align: center;
}
</style>
