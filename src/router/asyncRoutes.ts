/*
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-08-17 17:52:59
 * @LastEditors: DXY
 * @LastEditTime: 2022-08-17 17:55:29
 */
import {RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    path:"",
    name:"",
    component:() => import("@/views/404/index.vue")
  }
]

export default routes