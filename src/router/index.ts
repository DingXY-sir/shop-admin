/*
 * @Descripttion: 路由配置
 * @Author: DXY
 * @Date: 2022-08-12 13:42:44
 * @LastEditors: DXY
 * @LastEditTime: 2022-08-17 09:09:09
 */
import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router"
import Layout from "@/layout/index.vue"
import {start , end} from "@/utils/nprogress"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        name: "home",
        meta: {
          title:"首页"
        },
        component:() => import("@/views/home/index.vue")
      }
    ]
  },
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

router.beforeEach(() => {
  start()
})

router.afterEach(() => {
  end()
})

export default router