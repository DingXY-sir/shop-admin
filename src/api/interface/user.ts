/*
 * @Descripttion: 用户管理TS类型
 * @Author: DXY
 * @Date: 2022-09-01 15:23:17
 * @LastEditors: DXY
 * @LastEditTime: 2022-09-01 16:04:19
 */

export namespace User {
  export interface ReqRoleList{
    limit: number;
    page: number;
    name: string;
    type: "0" | "1";
    jti: string;
    access_token: string;
  }
  export interface ReqList{
    createTime: string;
    iconName: null;
    id: number;
    name: string;
    roleCode: string;
    roleTypeId: number;
    status: "0" | "1";
  }
  export interface ResRoleList{
    list: Array<ReqList>;
    total: number;
  }
}
