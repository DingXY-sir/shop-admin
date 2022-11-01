/*
 * @Descripttion:登陆类型
 * @Author: DXY
 * @Date: 2022-10-30 19:54:25
 * @LastEditors: DXY
 * @LastEditTime: 2022-10-30 20:03:50
 */

// * 动态路由参数配置
export namespace Menu {
  export interface MenuOption {
    path: string; //菜单路径
    name: string; //菜单别名
    redirect: string; //重定向地址
    //菜单信息
    meta: {
      icon: string; //菜单图标
      title: string; //菜单标题
      isLink: string; //是否外链接
      isHide: boolean; //是否隐藏
      isFull: boolean; //是否全屏
      isAffix: boolean; //是否固定在tabs标题栏上
      isKeepAlive: boolean; //是否缓存
    };
    children: MenuOption[];
  }
}
