<!--
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-09-14 21:29:59
 * @LastEditors: DXY
 * @LastEditTime: 2022-09-22 14:25:56
-->
<template>
  <el-table class="shop-attr" :data="prop.modelValue" border>
    <slot name="pre"></slot>
    <el-table-column label="图片" min-width="100" align="center">
      <template #default="{ row }">
        <el-input v-model="row.pic"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="售价" min-width="155" align="center">
      <template #default="{ row }">
        <el-input-number
          v-model="row.price"
          size="small"
          controls-position="right"
        />
      </template>
    </el-table-column>
    <el-table-column label="成本价" min-width="155" align="center">
      <template #default="{ row }">
        <el-input-number
          v-model="row.cost_price"
          size="small"
          controls-position="right"
        />
      </template>
    </el-table-column>
    <el-table-column label="原价" min-width="155" align="center">
      <template #default="{ row }">
        <el-input-number
          v-model="row.or_price"
          size="small"
          controls-position="right"
        />
      </template>
    </el-table-column>
    <el-table-column label="库存" min-width="155" align="center">
      <template #default="{ row }">
        <el-input-number
          v-model="row.repertory"
          size="small"
          controls-position="right"
        />
      </template>
    </el-table-column>
    <el-table-column label="商品编号" min-width="155" align="center">
      <template #default="{ row }">
        <el-input-number
          v-model="row.product_id"
          size="small"
          controls-position="right"
        />
      </template>
    </el-table-column>
    <el-table-column label="重量(KG)" min-width="155" align="center">
      <template #default="{ row }">
        <el-input-number
          v-model="row.weight"
          size="small"
          controls-position="right"
        />
      </template>
    </el-table-column>
    <el-table-column label="体积(m³)" min-width="155" align="center">
      <template #default="{ row }">
        <el-input-number
          v-model="row.volume"
          size="small"
          controls-position="right"
        />
      </template>
    </el-table-column>
    <slot name="append"></slot>
  </el-table>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from "vue";
const prop = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
  },
});
</script>
<style lang="scss" scoped>
.shop-attr {
  width: 88%;
}
</style>
