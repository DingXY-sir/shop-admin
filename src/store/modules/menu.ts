/*
 * @Descripttion: 导航仓库
 * @Author: DXY
 * @Date: 2022-08-18 10:34:12
 * @LastEditors: DXY
 * @LastEditTime: 2022-08-18 10:40:04
 */
import { defineStore } from "pinia"

export const useMenuStore = defineStore('menu', {
  state: () => {
    return {
      isCollapse:false
    }
  },
  actions: {
    async setCollapse() {
      this.isCollapse = !this.isCollapse
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key:"menu",
        storage:localStorage
      }
    ]
  }
})