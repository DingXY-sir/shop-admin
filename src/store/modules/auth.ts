/*
 * @Descripttion: 用户权限仓库
 * @Author: DXY
 * @Date: 2022-10-30 19:44:00
 * @LastEditors: DXY
 * @LastEditTime: 2022-11-20 14:35:40
 */
import { defineStore } from "pinia";
import { getAuthMenuList } from "@/api/modules/login";
import { AuthState } from "../interface/index";
import { getAllBreadcrumbList, getShowMenuList } from "@/utils/util";

export const AuthStore = defineStore("AuthState", {
  state: (): AuthState => {
    return {
      // 菜单列表 （不做持久化处理）
      authMenuList: [],
    };
  },
  getters: {
    // 后端返回菜单列表
    getAuthMenuList: state => state.authMenuList,
    // 后端返回菜单列表 ==》 去除isHide = true 的菜单
    showMenuListGet: state => getShowMenuList(state.authMenuList),
    // 获取面包屑列表
    breadcrumbListGet: state => getAllBreadcrumbList(state.authMenuList),

    // 需要缓存的菜单 name，用作页面 keepAlive
  },
  actions: {
    async getMenuList() {
      const { data } = await getAuthMenuList();
      this.authMenuList = data.data;
    },
  },
});
