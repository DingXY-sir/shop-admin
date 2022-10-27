<!--
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-10-27 14:20:47
 * @LastEditors: DXY
 * @LastEditTime: 2022-10-27 17:44:45
-->
<template>
  <div class="card tree_filter">
    <h4 class="title" v-if="title">{{ title }}</h4>
    <el-input v-model="filterText" placeholder="输入关键字进行过滤" clearable></el-input>
    <el-scrollbar :style="{ height: title ? `calc(100% - 95px)` : `calc(100% - 56px)` }">
      <el-tree
        ref="treeRef"
        :node-key="id"
        :highlight-current="true"
        :data="treeData"
        :props="defaultProps"
        :current-node-key="defaultValue"
        :filter-node-method="filterNode"
        @node-click="handleNodeClick"
      ></el-tree>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { ElTree } from "element-plus";
interface TreeFilterProps {
  requestApi: (data?: any) => Promise<any>;
  id?: string | number; //显示的id  非必传默认为id
  data?: { [key: string]: any }[]; //分类数据
  label?: string; //显示的label 默认"label"
  defaultValue?: string; //当前选中节点
  title?: string; //标题
}
const prop = withDefaults(defineProps<TreeFilterProps>(), {
  id: "id",
  label: "label",
  defaultValue: "",
});

const defaultProps = {
  children: "children",
  label: prop.label,
};

const treeRef = ref<InstanceType<typeof ElTree>>();
const filterText = ref("");
const treeData = ref<{ [key: string]: any }[]>([]);
onMounted(async () => {
  if (prop.data) return (treeData.value = prop.data);
  const { data } = await prop.requestApi();
  treeData.value = [{ id: "", [prop.label]: "全部" }, ...data.data];
});

watch(filterText, val => {
  treeRef.value!.filter(val);
});
const filterNode = (value: string, data: { [key: string]: any }) => {
  if (!value) return true;
  return data[prop.label].includes(value);
};

interface FilterType {
  (e: "handleChange", value: string): void;
}
const emit = defineEmits<FilterType>();
const handleNodeClick = (data: { [key: string]: any }) => {
  emit("handleChange", data[prop.id]);
};
</script>
<style lang="scss" scoped>
.tree_filter {
  box-sizing: border-box;
  width: 220px;
  height: 100%;
  margin-right: 10px;
  .title {
    margin: 0 0 15px;
    font-size: 18px;
    font-weight: bold;
    color: var(--el-color-info-dark-2);
    letter-spacing: 0.5px;
  }
}
:deep(.el-tree--highlight-current) {
  .el-tree-node.is-current > .el-tree-node__content {
    background-color: var(--el-color-primary);
    .el-tree-node__label,
    .el-tree-node__expand-icon {
      color: white;
    }
    .is-leaf {
      color: transparent;
    }
  }
}
</style>
