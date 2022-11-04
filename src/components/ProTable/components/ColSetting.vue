<!--
 * @Descripttion: 对列的操作，显示/隐藏
 * @Author: DXY
 * @Date: 2022-10-28 11:24:17
 * @LastEditors: DXY
 * @LastEditTime: 2022-11-03 09:55:23
-->
<template>
  <el-drawer v-model="drawerVisble" size="400px">
    <template #header>
      <h4>列设置</h4>
    </template>
    <div class="table">
      <el-table :data="colSetting" :border="true">
        <el-table-column prop="label" align="center" label="列名"></el-table-column>
        <!-- <el-table-column prop="name" label="显示" v-slot="scope">
          <el-switch v-model="scope.row.isShow"></el-switch>
        </el-table-column> -->
        <el-table-column prop="names" align="center" label="显示">
          <template #default="scope">
            <el-switch v-model="scope.row.isShow"></el-switch>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-drawer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Form } from "@/types/form";
defineProps<{ colSetting: Partial<Form.Column>[] }>();
const drawerVisble = ref(false);

const openColSetting = () => {
  drawerVisble.value = true;
};

defineExpose({
  openColSetting,
});
</script>
<style lang="scss" scoped></style>
