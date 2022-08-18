/*
 * @Descripttion: 用户仓库
 * @Author: DXY
 * @Date: 2022-08-16 14:01:08
 * @LastEditors: DXY
 * @LastEditTime: 2022-08-18 14:20:11
 */
import { defineStore } from "pinia"
import {HeaderData,Login} from "@/api/interface/index"

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      userToken: {
        access_token: "",
        jti: "",
      },
      user: {
        username: "",
        
      }
    }
  },
  actions: {
    setUserToken(data:HeaderData) {
      this.userToken = {...data}
    },
    setUserInfo(data:Login.IResGetLogin['username']) {
      this.user.username = data
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