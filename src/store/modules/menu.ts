/*
 * @Descripttion: 导航数据状态管理
 * @Author: DXY
 * @Date: 2022-08-18 10:34:12
 * @LastEditors: DXY
 * @LastEditTime: 2022-11-01 14:09:09
 */
import { defineStore } from "pinia";

export const useMenuStore = defineStore("menu", {
  state: () => {
    return {
      isCollapse: false,
    };
  },
  actions: {
    async setCollapse() {
      this.isCollapse = !this.isCollapse;
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: "menu",
        storage: localStorage,
      },
    ],
  },
});
