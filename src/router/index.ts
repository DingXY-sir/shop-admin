/*
 * @Descripttion: 路由配置
 * @Author: DXY
 * @Date: 2022-08-12 13:42:44
 * @LastEditors: DXY
 * @LastEditTime: 2022-10-17 21:21:30
 */
import router from "./routes";
import { start, end } from "@/utils/nprogress";
import { useUserStore } from "@/store/modules/user";

router.beforeEach(to => {
  start();
  const userStore = useUserStore();
  //统一处理页面访问 (requiresAuth:访问页面需要权限）
  if (to.meta.requiresAuth && !userStore.user.token) {
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
