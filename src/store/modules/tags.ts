/*
 * @Descripttion: tabs标签状态管理
 * @Author: DXY
 * @Date: 2022-08-22 15:17:02
 * @LastEditors: DXY
 * @LastEditTime: 2022-11-02 15:23:50
 */
import { defineStore } from "pinia";
import { TabsState, TabsMenuProps } from "../interface/index";
import { TABS_WHITE_LIST } from "@/config/config";
import router from "@/router/index";

export const useTagsStore = defineStore("tags", {
  state: (): TabsState => {
    return {
      tagsList: [], //存放tabs
    };
  },
  actions: {
    async addTagsList(data: TabsMenuProps) {
      if (TABS_WHITE_LIST.includes(data.path)) return;
      if (this.tagsList.every(item => item.path !== data.path)) {
        this.tagsList.push(data);
      }
    },
    async colseTagsList(tabPath: string, isCurrent: boolean = true) {
      const tagsList = this.tagsList;
      if (isCurrent) {
        tagsList.forEach((item, index) => {
          // 1、如果当前关闭tabs与当前路由不一致，直接关闭
          if (item.path !== tabPath) return;
          // 2、当前取消前后是否含有item
          const nextItem = tagsList[index + 1] || tagsList[index - 1];
          if (!nextItem) return;
          // 3、当前取消的item含有前后item就直接跳转
          router.push(nextItem.path);
        });
      }
      // 返回新的tagsList
      this.tagsList = tagsList.filter(item => item.path !== tabPath);
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: "tags",
        storage: sessionStorage,
      },
    ],
  },
});
