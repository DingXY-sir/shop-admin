<!--
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-11-14 17:42:34
 * @LastEditors: DXY
 * @LastEditTime: 2022-11-14 17:48:32
-->
<template>
  <div class="container"></div>
</template>

<script setup lang="ts">
const prop = defineProps({
  textNum: {
    type: String,
  },
  activeModel: {
    type: Object,
  },
});
console.log(prop.textNum);
console.log(prop.activeModel);
</script>
<style lang="scss" scoped></style>
