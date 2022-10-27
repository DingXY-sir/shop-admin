/*
 * @Descripttion:
 * @Author: DXY
 * @Date: 2022-09-01 15:22:03
 * @LastEditors: DXY
 * @LastEditTime: 2022-10-27 14:56:11
 */
import http from "@/utils/request";
// import qs from "qs";
import { User } from "@/api/interface/user";
export const getAllList = (params: { pageNum: number; pageSize: number; type: number }) => {
  return http.post<User.AllList>("/allList", params);
};
export const getUserStatus = () => {
  return http.post<{ label: string; value: number }[]>("/status");
};
export const getUserDepartment = () => {
  return http.post<User.UserDepartment>("/department");
};
