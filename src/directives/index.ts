/*
 * @Descripttion: 注册全局自定义指令
 * @Author: DXY
 * @Date: 2022-10-08 14:18:41
 * @LastEditors: DXY
 * @LastEditTime: 2022-11-21 10:23:25
 */
import { App } from "vue";
import waterMarker from "./modules/waterMaker";
import debounce from "./modules/debounce";
import hasRole from "./modules/hasRole";

const direcitvesList = {
  debounce,
  waterMarker,
  hasRole,
};

const directives = {
  install: (app: App<Element>) => {
    Object.keys(direcitvesList).forEach(key => {
      app.directive(key, direcitvesList[key]);
    });
  },
};

export default directives;
