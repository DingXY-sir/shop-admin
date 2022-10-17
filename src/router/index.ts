/*
 * @Descripttion: 路由配置
 * @Author: DXY
 * @Date: 2022-08-12 13:42:44
 * @LastEditors: DXY
 * @LastEditTime: 2022-08-19 14:31:08
 */
import router from "./routes";
import { start, end } from "@/utils/nprogress";
import { useUserStore } from "@/store/modules/user";

router.beforeEach((to, from) => {
  start();
  const userStore = useUserStore();
  //统一处理页面访问
  if (to.meta.requiresAuth && !userStore.userToken.access_token) {
    return {
      path: "/login",
      query: { redirect: to.fullPath }, //保留访问的地址
    };
  }
});

router.afterEach(() => {
  end();
});

export default router;
