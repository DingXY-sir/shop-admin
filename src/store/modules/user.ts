/*
 * @Descripttion: 用户仓库
 * @Author: DXY
 * @Date: 2022-08-16 14:01:08
 * @LastEditors: DXY
 * @LastEditTime: 2022-08-18 14:20:11
 */
import { defineStore } from "pinia";
import { HeaderData } from "@/api/interface/index";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      user: {
        token: "",
        userName: "",
      },
    };
  },
  actions: {
    setUserInfo(data: HeaderData) {
      this.user = { ...data };
    },
  },
  //开启数据缓存
  persist: {
    enabled: true,
    //自定义key
    strategies: [
      {
        storage: localStorage,
      },
    ],
  },
});
