/*
 * @Descripttion: tabs标签状态管理
 * @Author: DXY
 * @Date: 2022-08-22 15:17:02
 * @LastEditors: DXY
 * @LastEditTime: 2022-08-22 16:58:36
 */
import { defineStore } from "pinia";
import {TagItem} from "@/types/tags" 

export const useTagsStore = defineStore("tags", {
  state: () => {
    return {
      tagsList:[{path:"/home/index",title:"首页"}],   //存放tabs
    }
  },
  actions: {
    async addTagsList(data:TagItem) { //通过路由添加tag标签
      let index = this.tagsList.findIndex((item) => item.title === data.title);
      if (index !== -1) return false;
      this.tagsList.push(data)
    },
    async colseTagsList(data: TagItem) {  //关闭tag标签
      let index = this.tagsList.findIndex((item) => item.title === data.title);
      this.tagsList.splice(index,1)
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key:"tags",
        storage:localStorage
      }
    ]
  }
})