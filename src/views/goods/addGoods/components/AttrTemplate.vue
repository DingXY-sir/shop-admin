<!--
 * @Descripttion: 规格模版
 * @Author: DXY
 * @Date: 2022-09-15 22:13:33
 * @LastEditors: DXY
 * @LastEditTime: 2022-09-27 15:22:10
-->
<template>
  <el-space>
    <el-select v-model="attrVal" class="m-2" placeholder="Select" size="large">
      <el-option v-for="item in defaultTemplateData" :key="item.id" :label="item.rule_name" :value="item.id" />
    </el-select>
    <el-button type="primary" @click="handleConfirm">确定</el-button>
    <el-button>添加规格模版</el-button>
  </el-space>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus";
import { ref, reactive, computed, watch, onMounted } from "vue";
import type { Goods } from "@/types/goods";
import { getAttrTemplate } from "@/api/modules/shop";

interface emitType {
  (
    e: "confirm",
    value: Array<
      Goods.Attr & {
        inputVisible?: Boolean;
        inputValue?: string | number;
      }
    >,
  ): void;
}
const emit = defineEmits<emitType>();
const attrVal = ref<number | null>(null);
// 默认规格模版数据
const defaultTemplateData = ref<Array<Goods.AttrData>>([]);
const getAttrData = async () => {
  const res = await getAttrTemplate();
  defaultTemplateData.value = res.data.data;
};
onMounted(() => {
  getAttrData();
});

const handleConfirm = () => {
  if (attrVal.value) {
    const item = defaultTemplateData.value.find(item => item.id === attrVal.value);
    if (item) {
      emit("confirm", item.rule_value);
    }
  } else {
    ElMessage.error("请选择模版!");
  }
};
</script>
<style lang="scss" scoped></style>
