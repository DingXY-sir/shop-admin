/*
 * @Descripttion:
 * @Author: DXY
 * @Date: 2022-08-22 16:15:17
 * @LastEditors: DXY
 * @LastEditTime: 2022-11-01 14:08:19
 */
export type TagItem = Pick<Menu.MenuOption, "path" | "meta">;
export type TagType = {
  path: string;
  meta: {
    title: string;
    icon: string;
  };
};
