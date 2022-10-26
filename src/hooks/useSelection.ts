/*
 * @Descripttion:表格多选操作
 * @Author: DXY
 * @Date: 2022-10-18 15:00:59
 * @LastEditors: DXY
 * @LastEditTime: 2022-10-21 15:33:33
 */
import { ref, computed } from "vue";
export const useSelection = (selectedId: string = "id") => {
  // 是否选中数据
  const isSelected = ref(false);

  // 获取选中列表数据
  const selectedList = ref([]);

  /**
   *  获取选中列表所有的ID数组 （可配置id，默认id）
   *
   */
  const selectedListIds = computed(() => {
    let ids: string[] = [];
    selectedList.value.map(item => {
      ids.push(item[selectedId]);
    });
    return ids;
  });

  /**
   * 多选操作
   * row：{Array}当前选中数据
   * return void
   */
  const selectionChange = (row: any) => {
    row.length === 0 ? (isSelected.value = false) : (isSelected.value = true);
    selectedList.value = row;
  };
  return {
    isSelected,
    selectedList,
    selectedListIds,
    selectionChange,
  };
};
