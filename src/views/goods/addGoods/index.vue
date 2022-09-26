<!--
 * @Descripttion: 添加商品
 * @Author: DXY
 * @Date: 2022-09-12 20:29:30
 * @LastEditors: DXY
 * @LastEditTime: 2022-09-23 17:50:44
-->
<template>
  <div class="add-goods">
    <el-form :model="goodsFormData">
      <el-form-item label="商品规格">
        <el-radio-group v-model="goodsFormData.specifications">
          <el-radio label="1">单规格</el-radio>
          <el-radio label="2">多规格</el-radio>
          <!-- 单规格模版 -->
          <attr-table
            v-model="singleAttrTable"
            v-if="goodsFormData.specifications === '1'"
          />
        </el-radio-group>
      </el-form-item>
      <el-form-item
        label="添加规格模版"
        v-show="goodsFormData.specifications === '2'"
      >
        <el-space direction="vertical" alignment="start">
          <!-- 添加规格模版 -->
          <attr-template @confirm="attrPitch = $event"></attr-template>
          <!-- 规格编辑 -->
          <attr-edit
            v-if="attrPitch.length > 0"
            v-model="attrPitch"
            @confim="handleMultiAttr"
          />
          <!-- 多规格商品属性 -->
          <p>商品属性</p>
          <attr-table
            v-model="singleAttrTable"
            v-if="goodsFormData.specifications === '2'"
          ></attr-table>
        </el-space>
      </el-form-item>
    </el-form>
    <!-- 拖拽组件 -->
    <draggable v-model="activity">
      <el-tag
        v-for="item in activity"
        :key="item.id"
        :type="item.type"
        effect="dark"
        size="large"
        class="drag-tag"
        >{{ item.name }}</el-tag
      >
    </draggable>
    <el-button @click="handleComfig">确定</el-button>
  </div>
</template>

<script setup lang="ts">
import AttrTable from "./components/AttrTable.vue";
import AttrTemplate from "./components/AttrTemplate.vue";
import AttrEdit from "./components/AttrEdit.vue";
import { ref, reactive, computed, watch, onMounted } from "vue";
import type { Goods } from "@/types/goods";

const activity = ref([
  { name: "默认", id: 1, type: "success" },
  { name: "秒杀", id: 2, type: "info" },
  { name: "拼团", id: 3, type: "danger" },
  { name: "砍价", id: 4, type: "warning" },
]);
const handleComfig = () => {
  console.log(activity.value);
};
// 表单数据
const goodsFormData = reactive({
  specifications: "1",
});
// 单规格数据
const singleAttrTable = ref([
  {
    pic: "",
    price: 0,
    cost_price: 0,
    or_price: 0,
    repertory: 0,
    product_id: 0,
    weight: 0,
    volume: 0,
  },
]);
type ItemType = {
  inputVisible?: Boolean;
  inputValue?: string | number;
} & Goods.Attr;
const attrPitch = ref<Array<ItemType>>([]);

//多规格商品属性

const handleMultiAttr = (data: any) => {
  console.log(data);
};
</script>
<style lang="scss" scoped>
.drag-tag {
  padding: 10px 14px;
  cursor: pointer;
}
.drag-tag:not(:first-child) {
  margin-left: 10px;
}
</style>
