/*
 * @Descripttion: 静态路由
 * @Author: DXY
 * @Date: 2022-10-30 16:18:47
 * @LastEditors: DXY
 * @LastEditTime: 2022-11-01 10:09:43
 */
import { RouteRecordRaw } from "vue-router";
import { LOGIN_URL, HOME_RUL } from "@/config/config";

// * 静态路由

export const staticRouter: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: LOGIN_URL,
  },
  {
    path: LOGIN_URL,
    name: "login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      title: "登陆页",
    },
  },
  {
    path: "/layout",
    name: "layout",
    component: () => import("@/layout/index.vue"),
    redirect: HOME_RUL,
    children: [],
  },
];

// * 错误路由

export const errorRouter: RouteRecordRaw[] = [
  {
    path: "/403",
    name: "403",
    component: () => import("@/components/ErrorMessage/403.vue"),
    meta: {
      title: "403页面",
    },
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/components/ErrorMessage/404.vue"),
    meta: {
      title: "404页面",
    },
  },
  {
    path: "/500",
    name: "500",
    component: () => import("@/components/ErrorMessage/500.vue"),
    meta: {
      title: "500页面",
    },
  },
];

// * 找不到路由页面
export const notFoundRouter = {
  path: "/:pathMatch(.*)*",
  name: "notFound",
  // component: () => import("@/views/404/index.vue"),
  redirect: { name: "404" },
};
