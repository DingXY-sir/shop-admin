/*
 * @Descripttion: 注册定义全局组件
 * @Author: DXY
 * @Date: 2022-08-29 15:31:32
 * @LastEditors: DXY
 * @LastEditTime: 2022-10-08 17:00:07
 */
import { App } from "vue"

export default {
  install: (app:App<Element>) => {
    const modules = import.meta.glob('./**/index.vue');
    for (const path in modules) {
      app.component(path.slice(2,path.lastIndexOf('/')),modules[path])
    }
  }
}