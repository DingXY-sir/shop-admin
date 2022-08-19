/*
 * @Descripttion: 系统管理
 * @Author: DXY
 * @Date: 2022-08-19 11:43:39
 * @LastEditors: DXY
 * @LastEditTime: 2022-08-19 16:51:11
 */
import { RouteRecordRaw } from "vue-router"
import {Layout} from "../constant"

const systemRouter: Array<RouteRecordRaw> = [
  {
    path: "/authority",
    component: Layout,
    redirect: "/authority/auth",
    meta: {
      title:'权限管理'
    },
    children: [
      {
        path: "auth",
        name: 'auth',
        component: () => import("@/views/authority/auth/index.vue"),
        meta: {
          requiresAuth: true,
          title:'权限列表'
        }
      },
      {
        path: "role",
        name: 'role',
        component: () => import("@/views/authority/role/index.vue"),
        meta: {
          requiresAuth: true,
          title:'角色管理'
        }
      },
    ]
  }
]
export default systemRouter
