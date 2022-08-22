/*
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-08-22 14:50:10
 * @LastEditors: DXY
 * @LastEditTime: 2022-08-22 14:51:26
 */
import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    // 是可选的
    title:string
    // 每个路由都必须声明
    requiresAuth?: boolean
  }
}