/*
 * @Descripttion:全局动态参数类型
 * @Author: DXY
 * @Date: 2022-10-30 21:11:08
 * @LastEditors: DXY
 * @LastEditTime: 2022-10-30 21:31:37
 */
declare namespace Menu {
  interface MenuOption {
    path: string; //菜单路径
    name: string; //菜单别名
    redirect?: string; //重定向地址
    component?: string | (() => Promise<any>);
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
    children?: MenuOption[];
  }
}
