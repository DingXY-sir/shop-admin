/*
 * @Descripttion:
 * @Author: DXY
 * @Date: 2022-10-30 17:18:40
 * @LastEditors: DXY
 * @LastEditTime: 2022-11-01 11:30:02
 */
import router from "../index";
import { AuthStore } from "@/store/modules/auth";
import { ElNotification } from "element-plus";
import { LOGIN_URL } from "@/config/config";
import { getFlatArr } from "@/utils/util";
import { notFoundRouter } from "./staticRouter";

const modules = import.meta.glob("@/views/**/*.vue");
//初始化动态路由
export const dynamicRouter = async () => {
  try {
    // 1、获取菜单列表
    const authStore = AuthStore();
    await authStore.getMenuList();

    // 2、判断当前用户有没有菜单权限
    if (!authStore.getAuthMenuList.length) {
      ElNotification({
        title: "无权访问",
        message: "当前账号没有任何菜单权限，请联系管理员！",
        type: "warning",
        duration: 2000,
      });
      router.replace(LOGIN_URL);
      return Promise.reject("No permission");
    }

    // 3、动态添加路由 (getFlatArr方法将所有菜单全部处理成一维数组，方便添加路由)
    const dynamicRouter = getFlatArr(JSON.parse(JSON.stringify(authStore.getAuthMenuList)));
    dynamicRouter.forEach((item: any) => {
      if (item.children) delete item.children;
      if (item.component) item.component = modules[`/src/views${item.component}.vue`];
      if (item.meta.isFull) {
        router.addRoute(item);
      } else {
        router.addRoute("layout", item);
      }
    });

    // 4、最后添加 notFoundRouter
    router.addRoute(notFoundRouter);
    console.log(router);
  } catch (error) {
    // 当按钮 || 菜单请求出错误时，重定向登陆页
    router.replace(LOGIN_URL);
    return Promise.reject(error);
  }
};
