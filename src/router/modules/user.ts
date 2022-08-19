/*
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-08-19 17:09:30
 * @LastEditors: DXY
 * @LastEditTime: 2022-08-19 17:15:48
 */
import { RouteRecordRaw } from "vue-router";
import { Layout } from "../constant";

const userRouter: Array<RouteRecordRaw> = [
  {
    path: "/user",
    component: Layout,
    meta: {
      title:"用户管理"
    },
    children: [
      {
        path: "list",
        name: "userList",
        component: () => import("@/views/user/index.vue"),
        meta: {
          requiresAuth: true,
          title:"用户列表"
        }
      }
    ]
  }
]

export default userRouter
