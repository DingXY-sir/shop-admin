/*
 * @Descripttion:
 * @Author: DXY
 * @Date: 2022-10-17 21:35:04
 * @LastEditors: DXY
 * @LastEditTime: 2022-10-20 14:40:21
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
  export interface RoleDelete {
    status: string;
    message: string;
    data: any;
  }
}
