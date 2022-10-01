<!--
 * @Descripttion: Sortable.js拖拽组件
 * @Author: DXY
 * @Date: 2022-09-12 19:08:08
 * @LastEditors: DXY
 * @LastEditTime: 2022-09-27 10:51:32
-->

<template>
  <div id="draggable" ref="draggableContainer">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { PropType } from "vue";
import Sortable from "sortablejs";

const draggableContainer = ref<HTMLDivElement | null>(null);
const props = defineProps({
  modelValue: {
    type: Array as PropType<any[]>,
    default: () => [],
  },
});
interface emitType {
  (e: "update:model-value", value: any[]): void;
}
const emit = defineEmits<emitType>();

onMounted(() => {
  if (!draggableContainer.value) {
    console.error("容器不存在");
    return false;
  }
  const sortable = new Sortable(draggableContainer.value, {
    animation: 150,
    onUpdate: (e) => {
      //移动完触法
      if (e.oldIndex && e.newIndex) {
        //删除当前元素
        const list = props.modelValue.splice(0); // 子组件不能直接修改父组件内容

        const item = list.splice(e.oldIndex, 1)[0];
        //添加元素重新排列
        list.splice(e.newIndex, 0, item);
        console.log(list);
        emit("update:model-value", list);
      }
    },
  });
});
</script>
<style lang="scss" scoped></style>
