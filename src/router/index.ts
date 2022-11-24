/*
 * @Descripttion: 路由配置
 * @Author: DXY
 * @Date: 2022-08-12 13:42:44
 * @LastEditors: DXY
 * @LastEditTime: 2022-11-16 15:20:35
 */
import { createRouter, createWebHashHistory } from "vue-router";
import { staticRouter, errorRouter } from "./modules/staticRouter";
import { dynamicRouter } from "./modules/dynamicRouter";
import { start, end } from "@/utils/nprogress";
import { LOGIN_URL } from "@/config/config";
import { useUserStore } from "@/store/modules/user";
import { AuthStore } from "@/store/modules/auth";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...staticRouter, ...errorRouter],
  strict: false,
});
router.beforeEach(async (to, from, next) => {
  // 1、nprogress 加载开始
  start();

  // 2、清空所有请求

  // 3、当前跳转登陆页，直接放行
  if (to.path === LOGIN_URL) return next();

  // 4、判断是否存在Token，若没有将重定向登陆页
  const useStore = useUserStore();
  if (!useStore.user.token) return next({ path: LOGIN_URL, replace: true });

  // 5、判断是否有menu列表，没有重新请求，并添加动态路由
  const authStore = AuthStore();
  if (!authStore.getAuthMenuList.length) {
    await dynamicRouter();
    return next({ ...to, replace: true });
  }

  // 6、放行
  next();
});

router.afterEach(() => {
  end();
});

export default router;
