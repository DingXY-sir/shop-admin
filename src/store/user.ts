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
    updateUserToken(data:HeaderData) {
      this.userToken = {...data}
    }
  }
})