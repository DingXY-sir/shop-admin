/*
 * @Descripttion: 路由配置
 * @Author: DXY
 * @Date: 2022-08-12 13:42:44
 * @LastEditors: DXY
 * @LastEditTime: 2022-08-12 13:54:34
 */
import { createRouter,RouteRecordRaw,createWebHistory } from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "login",
    component:() => import("@/views/login/index.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component:() => import("@/views/404/index.vue")
  }
]

const router = createRouter({
  history:createWebHistory(),
  routes
})

export default router