/*
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-08-16 14:01:08
 * @LastEditors: DXY
 * @LastEditTime: 2022-08-16 14:15:12
 */
import { defineStore } from "pinia"
import {HeaderData} from "@/api/interface/index"

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      userToken: {
        access_token: "",
        jti: "",
      }
    }
  },
  actions: {
    setUserToken(data:HeaderData) {
      this.userToken = {...data}
    }
  },
  //开启数据缓存
  persist: {
    enabled: true,
    //自定义key
    strategies: [
      {
        storage:localStorage
      }
    ]
  }
})