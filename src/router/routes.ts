/*
 * @Descripttion:
 * @Author: DXY
 * @Date: 2022-08-19 14:29:35
 * @LastEditors: DXY
 * @LastEditTime: 2022-08-19 16:35:45
 */
import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";

// * 导入所有router
const metaRouters = import.meta.glob("./modules/*.ts");

// * 处理路由表
export let routerArray: RouteRecordRaw[] = [];
const asyncRouterArray = async () => {
  for (const path in metaRouters) {
    await metaRouters[path]().then((mod: any) => {
      routerArray.push(...mod.default);
    });
  }
};
await asyncRouterArray();

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: { name: "login" },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
  },
  ...routerArray,
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/404/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
