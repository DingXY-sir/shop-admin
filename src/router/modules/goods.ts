/*
 * @Descripttion:
 * @Author: DXY
 * @Date: 2022-08-19 16:54:48
 * @LastEditors: DXY
 * @LastEditTime: 2022-09-12 20:28:30
 */
import { RouteRecordRaw } from "vue-router";
import { Layout } from "../constant";

const goodsRouter: Array<RouteRecordRaw> = [
  {
    path: "/goods",
    component: Layout,
    redirect: "/goods/list",
    meta: {
      title: "商品管理",
    },
    children: [
      {
        path: "list",
        name: "goodsList",
        meta: {
          title: "商品列表",
          requiresAuth: true,
        },
        component: () => import("@/views/goods/list/index.vue"),
      },
      {
        path: "addGoods",
        name: "addGoods",
        meta: {
          title: "添加商品",
          requiresAuth: true,
        },
        component: () => import("@/views/goods/addGoods/index.vue"),
      },
    ],
  },
];

export default goodsRouter;
