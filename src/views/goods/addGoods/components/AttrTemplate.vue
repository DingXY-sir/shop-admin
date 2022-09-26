<!--
 * @Descripttion: 规格模版
 * @Author: DXY
 * @Date: 2022-09-15 22:13:33
 * @LastEditors: DXY
 * @LastEditTime: 2022-09-18 20:58:54
-->
<template>
  <el-space>
    <el-select v-model="attrVal" class="m-2" placeholder="Select" size="large">
      <el-option
        v-for="item in defaultTemplateData"
        :key="item.id"
        :label="item.rule_name"
        :value="item.id"
      />
    </el-select>
    <el-button type="primary" @click="handleConfirm">确定</el-button>
    <el-button>添加规格模版</el-button>
  </el-space>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus";
import { ref, reactive, computed, watch } from "vue";
import type { Goods } from "@/types/goods";

interface emitType {
  (
    e: "confirm",
    value: Array<
      Goods.Attr & {
        inputVisible?: Boolean;
        inputValue?: string | number;
      }
    >
  ): void;
}
const emit = defineEmits<emitType>();
const attrVal = ref<number | null>(null);
// 默认规格模版数据
const defaultTemplateData = ref([
  {
    id: 10,
    rule_name: "衣服",
    rule_value: [
      { value: "颜色", detail: ["红色", "绿色", "紫色"] },
      { value: "尺码", detail: ["小号"] },
    ],
  },
  {
    id: 11,
    rule_name: "手机",
    rule_value: [
      { value: "颜色", detail: ["金色", "银色", "暗紫色"] },
      { value: "内存", detail: [64, 128, 256] },
    ],
  },
]);
const handleConfirm = () => {
  if (attrVal.value) {
    const item = defaultTemplateData.value.find(
      (item) => item.id === attrVal.value
    );
    if (item) {
      emit("confirm", item.rule_value);
    }
  } else {
    ElMessage.error("请选择模版!");
  }
};
</script>
<style lang="scss" scoped></style>
