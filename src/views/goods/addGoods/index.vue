<!--
 * @Descripttion: 添加商品
 * @Author: DXY
 * @Date: 2022-09-12 20:29:30
 * @LastEditors: DXY
 * @LastEditTime: 2022-09-27 17:39:12
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
        style="width: 50%"
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
          <template v-if="multiAttrData.values.length">
            <p>商品属性</p>
            <p>批量操作</p>
            <attr-table v-model="singleAttrTable"></attr-table>
            <p>多规格</p>
            <attr-table v-model="multiAttrData.values">
              <template #pre>
                <el-table-column
                  v-for="item in multiAttrData.headers"
                  :key="item.key"
                  :label="item.label"
                  :min-width="item.width"
                  :prop="item.key"
                  align="center"
                >
                </el-table-column>
              </template>
              <template #append>
                <el-table-column fixed="right" label="操作" width="120">
                  <template #default>
                    <el-button link type="primary" size="small">删除</el-button>
                    <el-button link type="primary" size="small">编辑</el-button>
                  </template>
                </el-table-column>
              </template>
            </attr-table>
          </template>
        </el-space>
      </el-form-item>
    </el-form>
    <!-- 拖拽组件 -->
    <!-- <draggable v-model="activity">
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
    <el-button @click="handleComfig">确定</el-button> -->
  </div>
</template>

<script setup lang="ts">
import AttrTable from "./components/AttrTable.vue";
import AttrTemplate from "./components/AttrTemplate.vue";
import AttrEdit from "./components/AttrEdit.vue";
import { ref, reactive, computed, watch, onMounted } from "vue";
import type { Goods } from "@/types/goods";

// const activity = ref([
//   { name: "默认", id: 1, type: "success" },
//   { name: "秒杀", id: 2, type: "info" },
//   { name: "拼团", id: 3, type: "danger" },
//   { name: "砍价", id: 4, type: "warning" },
// ]);
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
const multiAttrData = reactive<Goods.MultiAttrList>({
  headers: [],
  values: [],
});
const handleMultiAttr = (data: Goods.MultiAttrList) => {
  console.log(data, "获取数据");
  const { headers, values } = data;
  multiAttrData.headers = headers;
  multiAttrData.values = values;
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
