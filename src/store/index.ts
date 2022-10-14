/*
 * @Descripttion:全局Store仓库
 * @Author: DXY
 * @Date: 2022-08-16 13:58:44
 * @LastEditors: DXY
 * @LastEditTime: 2022-10-13 17:17:41
 */
import { createPinia, defineStore } from "pinia";
import piniaPluginPersist from "pinia-plugin-persist";
import { DEFAULT_COLOR } from "@/config/config";
import { ThemeConfig } from "./interface";

export const useGlobalState = defineStore({
  id: "globalState",
  state: () => {
    return {
      themeConfig: {
        //主题
        primary: DEFAULT_COLOR,
        //暗黑模式
        isDark: false,
      },
    };
  },
  actions: {
    setThemeConfig(themeConfig: ThemeConfig) {
      this.themeConfig = themeConfig;
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: "globalState",
        storage: localStorage,
      },
    ],
  },
});

//pinia持久化
const store = createPinia();
store.use(piniaPluginPersist);

export default store;
