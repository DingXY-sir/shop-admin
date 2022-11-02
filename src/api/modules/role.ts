/*
 * @Descripttion: 角色管理
 * @Author: DXY
 * @Date: 2022-10-17 21:33:27
 * @LastEditors: DXY
 * @LastEditTime: 2022-10-20 14:40:34
 */
import http from "@/utils/request";
// import qs from "qs";
import { Role } from "@/types/role";
export const getRoleList = (params: { name: string; status: string }) => {
  return http.post<Array<Role.RoleList>>("/getAllRole", params);
};
export const handleDelete = (params: { id: Array<string | number> }) => {
  return http.post<Role.RoleDelete>("/delete", params);
};
