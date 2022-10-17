import { RouteRecordRaw } from "vue-router";
import { Layout } from "../constant";

const homeRouter: Array<RouteRecordRaw> = [
  {
    path: "/home",
    redirect: "/home/index",
    component: Layout,
    children: [
      {
        path: "index",
        name: "home",
        meta: {
          title: "首页",
          requiresAuth: true,
        },
        component: () => import("@/views/home/index.vue"),
      },
    ],
  },
];

export default homeRouter;
