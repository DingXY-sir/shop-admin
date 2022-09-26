/*
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-09-01 15:22:03
 * @LastEditors: DXY
 * @LastEditTime: 2022-09-01 15:43:42
 */
import http from "@/utils/request"
import qs from "qs"
import  {User} from "@/api/interface/user"
export const getRoleList = (params:User.ReqRoleList) => {
  return http.post<User.ResRoleList>("/meizhu-user/role/getAllRole",qs.stringify(params))
}