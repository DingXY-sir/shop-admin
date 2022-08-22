/*
 * @Descripttion: 导航数据状态管理
 * @Author: DXY
 * @Date: 2022-08-18 10:34:12
 * @LastEditors: DXY
 * @LastEditTime: 2022-08-22 10:47:29
 */
import { defineStore } from "pinia"
import {MenuOptions} from "@/api/interface"

export const useMenuStore = defineStore('menu', {
  state: () => {
    return {
      isCollapse: false,
      menuList:[] as Array<MenuOptions>
    }
  },
  actions: {
    async setCollapse() {
      this.isCollapse = !this.isCollapse
    },
    async setMenuList(menuList:MenuOptions[]) {
      this.menuList = menuList
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