/*
 * @Descripttion: 角色管理
 * @Author: DXY
 * @Date: 2022-10-17 21:33:27
 * @LastEditors: DXY
 * @LastEditTime: 2022-10-17 22:14:32
 */
import http from "@/utils/request";
// import qs from "qs";
import { Role } from "@/types/role";
export const getRoleList = (params: { name: string; status: string }) => {
  return http.post<Array<Role.RoleList>>("/getAllRole", params);
};
