<!--
 * @Descripttion: 表格搜索区域
 * @Author: DXY
 * @Date: 2022-08-23 10:29:35
 * @LastEditors: DXY
 * @LastEditTime: 2022-10-18 09:27:45
-->
<template>
  <div class="table-search-container">
    <el-form ref="formRef" :model="searchParam" :inline="true" label-width="100px" :style="`max-width:${maxWidth}px`">
      <template v-for="item in searchList" :key="item.prop">
        <el-form-item :label="item.label">
          <!-- 表单项目 -->
          <search-form-item :item="item" :searchParam="searchParam" />
        </el-form-item>
      </template>
    </el-form>
    <!-- 查询条件操作 -->
    <div class="flx-item-content operation">
      <el-button type="primary" :icon="Search" @click="search">搜索</el-button>
      <el-button :icon="Delete" @click="reset">重置</el-button>
      <el-button type="primary" @click="searchShow = !searchShow" link v-if="getSearchList.length > maxLength">
        {{ searchShow ? "合并" : "展开" }}
        <el-icon>
          <component :is="searchShow ? ArrowUp : ArrowDown"></component>
        </el-icon>
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchFormItem from "./components/SearchFormItem.vue";
import { ref, computed, onMounted } from "vue";
import { Delete, Search, ArrowDown, ArrowUp } from "@element-plus/icons-vue";
import { Form } from "@/types/form";

interface ProTableProps {
  searchParam: any; //表单参数
  getSearchList: Partial<Form.SearchFormItem>[]; //查询表单数组数据
  reset: () => void;
  search: () => void;
}
const prop = withDefaults(defineProps<ProTableProps>(), {
  searchParam: () => {},
  getSearchList: () => [],
});

const maxLength = ref(4);
const maxWidth = ref(1260);

const searchShow = ref(false);

onMounted(() => {});

//根据当前是否展开搜索项展示
const searchList = computed((): Partial<Form.SearchFormItem>[] => {
  if (searchShow.value) return prop.getSearchList;
  return prop.getSearchList.slice(0, maxLength.value);
});
// *查询方法
// const handleSearch = () => {
//   console.log(prop.searchParam);
// };
</script>
<style lang="scss" scoped>
.table-search-container {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dashed #ccc;
  :deep(.el-form) {
    max-width: 1260px;
    .el-form-item {
      margin-right: 5px;
      .el-form-item__label {
        line-height: 40px;
      }
      .el-input,
      .el-select,
      .el-date-editor--timerange {
        width: 210px;
        height: 40px;
        line-height: 40px;
      }
      .el-date-editor--datetimerange,
      .el-date-editor--daterange {
        width: 400px;
        height: 40px;
        line-height: 40px;
      }

      // 去除时间选择器上下 padding
      .el-range-editor.el-input__wrapper {
        padding: 0 10px;
      }

      // el-select 为多选时不换行显示
      .el-select__tags {
        overflow: hidden;
        white-space: nowrap;
      }
    }
    .more-item {
      display: inline;
    }
  }
  .operation > button:last-child {
    height: 30px;
  }
}
</style>
