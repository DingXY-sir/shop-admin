<!--
 * @Descripttion: 添加规格
 * @Author: DXY
 * @Date: 2022-09-18 20:46:58
 * @LastEditors: DXY
 * @LastEditTime: 2022-09-27 16:54:15
-->
<template>
  <div class="container">
    <el-form label-position="left" label-width="100px" @submit.enter.prevent>
      <!-- <draggable v-model="depData"> -->
      <el-form-item
        class="flx-items-center edit-item"
        v-for="(item, index) in depData"
        :key="item.value"
      >
        <template #label
          ><el-icon><Grid /></el-icon>
        </template>
        <el-space direction="vertical" alignment="start">
          <div class="flx-items-center">
            {{ item.value }}
            <el-icon class="item-icon-close" @click="depData.splice(index, 1)"
              ><CircleCloseFilled
            /></el-icon>
          </div>
          <el-space alignment="start">
            <!-- <draggable v-model="item.detail"> -->
            <el-tag
              v-for="(tag, index) in item.detail"
              closable
              @close="item.detail.splice(index, 1)"
              :key="tag"
              >{{ tag }}</el-tag
            >
            <!-- </draggable> -->

            <el-input
              v-if="item.inputVisible"
              ref="InputRef"
              v-model="item.inputValue"
              class="ml-1 w-20"
              size="small"
              @keyup.enter="handleBlur(item)"
              @blur="handleBlur(item)"
            />
            <el-button
              v-else
              class="button-new-tag ml-1"
              size="small"
              @click="showInput(item)"
            >
              + New Tag
            </el-button>
          </el-space>
        </el-space>
      </el-form-item>
      <!-- </draggable> -->
      <el-form-item v-if="!isAdd">
        <el-button type="primary" @click="isAdd = true">+添加新规格</el-button>
        <el-button type="success" @click="handleConfirm">立即生成</el-button>
      </el-form-item>
      <el-form-item v-else>
        <el-form :model="attrForm" :rules="rules" inline ref="FormEl">
          <el-form-item label="规格名称" prop="value">
            <el-input v-model="attrForm.value"></el-input>
          </el-form-item>
          <el-form-item label="规格值" prop="detail[0]">
            <el-input v-model="attrForm.detail[0]"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleCreateAttr()"
              >确定</el-button
            >
            <el-button @click="isAdd = false">取消</el-button>
          </el-form-item>
        </el-form>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { Grid, CircleCloseFilled } from "@element-plus/icons-vue";
import { ref, reactive, computed, watch, PropType, nextTick } from "vue";
import type { Goods } from "@/types/goods";
import type { FormRules, FormInstance } from "element-plus";
import { getMultiAttrList } from "@/api/modules/shop";
type ItemType = {
  inputVisible?: Boolean;
  inputValue?: string | number;
} & Goods.Attr;
const props = defineProps({
  modelValue: {
    type: Array as PropType<Array<ItemType>>,
    default: () => {
      return [];
    },
  },
});

interface multiAttr {
  headers: Array<{ label: string; width: number }>;
  values: Array<{
    pic: string;
    price: number;
    cost_price: number;
    or_price: number;
    repertory: number;
    product_id: number;
    weight: number;
    volume: number;
    color: string;
    size: string;
  }>;
}

interface emitType {
  (e: "confim", value: Goods.MultiAttrList): void;
  (e: "update:model-value", data: any): void;
}
const emit = defineEmits<emitType>();

//删除操作---动态改变需要操作父组件传递数据，深拷贝数据防止报错
let depData = ref<Array<ItemType>>([]);
const InputRef = ref<HTMLInputElement | null>(null);
//父组件值改变监听改变的内容赋值深拷贝depData
watch(
  () => props.modelValue,
  (newVal) => {
    //修改父组件传递值
    const temp = JSON.parse(JSON.stringify(newVal)) as Array<ItemType>;
    depData.value = temp.map((item) => ({
      ...item,
      inputVisible: false,
      inputValue: "",
    }));
  },
  {
    deep: true,
    immediate: true,
  }
);
//子组件修改父组件数据，然后通过emit传递实现响应
watch(
  () => depData,
  (newVal) => emit("update:model-value", newVal),
  {
    deep: true,
    immediate: true,
  }
);

const showInput = async (item: ItemType) => {
  item.inputVisible = true;
  await nextTick(); // Dom更新之后异步执行触发input获取焦点事件
  InputRef.value?.[0].focus();
};
const handleBlur = (item: ItemType) => {
  if (item.inputValue) {
    item.detail.push(item.inputValue);
  }
  item.inputVisible = false;
  item.inputValue = "";
};

/***
 * 添加新规格start
 */
const isAdd = ref(false);
const attrForm = reactive({
  value: "",
  detail: [""],
});
const rules = reactive<FormRules>({
  value: [{ required: true, message: "请输入规格名称", trigger: "blur" }],
  detail: [{ required: true, message: "请输入规格值", trigger: "blur" }],
});
const FormEl = ref<FormInstance>();
const handleCreateAttr = async () => {
  const data = await FormEl.value?.validate();
  if (!data) return;
  // if (depData.value) {
  props.modelValue.push({
    inputValue: "",
    inputVisible: false,
    value: attrForm.value,
    detail: [...attrForm.detail],
  });
  // }
  isAdd.value = false;
  FormEl.value?.resetFields();
};
/***
 * 添加新规格end
 */

/**
 * 立即生成
 */
const multiAttrInfo = reactive({
  headers: [
    { label: "内存", width: 155, key: "size" },
    { label: "颜色", width: 155, key: "color" },
  ],
  values: [
    {
      pic: "",
      price: 0,
      cost_price: 0,
      or_price: 0,
      repertory: 0,
      product_id: 0,
      weight: 0,
      volume: 0,
      color: "",
      size: "",
    },
    {
      pic: "",
      price: 0,
      cost_price: 0,
      or_price: 0,
      repertory: 0,
      product_id: 0,
      weight: 0,
      volume: 0,
      color: "",
      size: "",
    },
  ],
});
const handleConfirm = async () => {
  const res = await getMultiAttrList();
  emit("confim", res.data.data);
};
/**
 * 立即生成end
 */
</script>
<style lang="scss" scoped>
:deep(.edit-item) {
  margin-bottom: 10px;
  .el-form-item__label {
    width: 30px !important;
  }
  .item-icon-close {
    cursor: pointer;
    margin: 0 4px;
  }
}
</style>
