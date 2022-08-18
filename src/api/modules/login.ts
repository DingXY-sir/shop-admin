/*
 * @Descripttion: 用户登陆API
 * @Author: DXY
 * @Date: 2022-08-15 11:26:49
 * @LastEditors: DXY
 * @LastEditTime: 2022-08-18 15:00:05
 */
import {Login} from "@/api/interface/index"
import http from "@/utils/request"
import qs from "qs"

export const loginApi = (params:Login.ReqLoginForm) => {
  return http.post<Login.ResLogin>("/login",params)
}

export const getCode = () => {
  return http.post("/getCode")
}
export const getUserAuth = (params:Login.IReqUserAuth) => {
  return http.post<Login.IResUserAuth[]>("/meizhu-user/role/whitelist/findRoleByPhoneOrIdNuber",qs.stringify(params))
}
export const getRoleId = (params:Login.IRoleId) => {
  return http.post("/meizhu-user/user/whitelist/saveRoleInfo",qs.stringify(params))
}
export const getLogin = (params:Login.IReqLogin) => {
  return http.post<Login.IResGetLogin>("/userLogin",qs.stringify(params))
}
export const logOut = () => {
  return http.post("/userLogout")
}