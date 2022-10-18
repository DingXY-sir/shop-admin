/*
 * @Descripttion:
 * @Author: DXY
 * @Date: 2022-10-17 21:35:04
 * @LastEditors: DXY
 * @LastEditTime: 2022-10-17 21:36:02
 */
export namespace Role {
  export interface RoleList {
    createTime: string;
    iconName: string | null;
    id: number;
    name: string;
    roleCode: string;
    roleTypeId: number;
    status: string;
  }
}
