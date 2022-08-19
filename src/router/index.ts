/*
 * @Descripttion: 路由配置
 * @Author: DXY
 * @Date: 2022-08-12 13:42:44
 * @LastEditors: DXY
 * @LastEditTime: 2022-08-19 09:46:09
 */
import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router"
import Layout from "@/layout/index.vue"
import { start, end } from "@/utils/nprogress"
import { useUserStore } from "@/store/modules/user";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Layout,
    meta: {
      requiresAuth:true //路由权限
    },
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
  //统一处理页面访问
  if (to.meta.requiresAuth && !userStore.userToken.access_token) {
    return {
      path: "/login",
      query:{redirect:to.fullPath} //保留访问的地址
    }
  }
})

router.afterEach(() => {
  end()
})

export default router