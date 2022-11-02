/*
 * @Descripttion:全局配置（不做修改操作）
 * @Author: DXY
 * @Date: 2022-10-10 16:37:46
 * @LastEditors: DXY
 * @LastEditTime: 2022-11-02 11:37:45
 */

// *默认主题颜色
export const DEFAULT_COLOR: string = "#009688";

// *默认登陆地址
export const LOGIN_URL = "/login";

// *默认首页地址
export const HOME_RUL = "/home/index";

// * Tabs（白名单地址，不需要添加到 tabs 的路由地址）
export const TABS_WHITE_LIST: string[] = ["/403", "/404", "/500", LOGIN_URL];
