/*
 * @Descripttion: 用户登陆API
 * @Author: DXY
 * @Date: 2022-08-15 11:26:49
 * @LastEditors: DXY
 * @LastEditTime: 2022-11-03 15:27:09
 */
import { Login } from "@/api/interface/index";
import { Menu } from "@/api/interface/login";
import http from "@/utils/request";
import qs from "qs";

// post三种请求
export const loginApi = (params: Login.ReqLoginForm) => {
  return http.post<Login.ResLogin>("/login", params, { headers: { noLoading: true } }); // 正常post json请求 ===>Content-Type: application/json
  return http.post<Login.ResLogin>("/login", {}, { params }); // post 请求携带 query 参数 === > ?username=admin&password=123456
  return http.post<Login.ResLogin>("/login", qs.stringify(params)); // post 请求携带 表单 参数 === >Content-Type: application/x-www-form-urlencoded
};

export const logOut = () => {
  return http.post("/userLogout");
};

// mock
interface LoginData {
  userInfo: {
    address: string;
    email: string;
    token: string;
    username: string;
  };
}
//登陆接口
export const getLoginMock = (params: { username: string; password: string }) => {
  return http.post<LoginData>("/login", qs.stringify(params));
};

// * 获取动态菜单路由表
export const getAuthMenuList = () => {
  return http.post<Menu.MenuOption[]>("/menu/list", {}, { headers: { noLoading: true } });
};
