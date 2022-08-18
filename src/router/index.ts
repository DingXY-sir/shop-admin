/*
 * @Descripttion: 路由配置
 * @Author: DXY
 * @Date: 2022-08-12 13:42:44
 * @LastEditors: DXY
 * @LastEditTime: 2022-08-18 10:33:51
 */
import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router"
import Layout from "@/layout/index.vue"
import { start, end } from "@/utils/nprogress"
import { useUserStore } from "@/store/modules/user";

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

router.beforeEach((to,from) => {
  start()
  const userStore = useUserStore();
  if (!userStore.userToken.access_token && to.name !=="login") {
    return {name: "login"}
  }
})

router.afterEach(() => {
  end()
})

export default router