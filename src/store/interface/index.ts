/*
 * @Descripttion:
 * @Author: DXY
 * @Date: 2022-10-10 16:44:01
 * @LastEditors: DXY
 * @LastEditTime: 2022-11-04 18:00:21
 */
export interface ThemeConfig {
  layout: string;
  primary: string;
  isDark: boolean;
  maximize: boolean;
}

export interface AuthState {
  authMenuList: Menu.MenuOption[];
}

// * tabs类型
export interface TabsMenuProps {
  icon: string;
  title: string;
  path: string;
  close: boolean;
}
export interface TabsState {
  tagsList: TabsMenuProps[];
}
