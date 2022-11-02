/*
 * @Descripttion: tabs标签状态管理
 * @Author: DXY
 * @Date: 2022-08-22 15:17:02
 * @LastEditors: DXY
 * @LastEditTime: 2022-11-01 16:11:10
 */
import { defineStore } from "pinia";
import { TagType } from "@/types/tags";

export const useTagsStore = defineStore("tags", {
  state: () => {
    return {
      tagsList: [{ path: "/home/index", meta: { title: "首页", icon: "HomeFilled" } }], //存放tabs
    };
  },
  actions: {
    async addTagsList(data: TagType) {
      //通过路由添加tag标签
      let index = this.tagsList.findIndex(item => item.meta.title === data.meta.title);
      if (index !== -1) return false;
      this.tagsList.push(data);
    },
    async colseTagsList(data: TagType) {
      //关闭tag标签
      let index = this.tagsList.findIndex(item => item.meta.title === data.meta.title);
      this.tagsList.splice(index, 1);
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
