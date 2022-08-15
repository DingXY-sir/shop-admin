import {Login} from "@/api/interface/index"

import http from "@/utils/request"

import qs from "qs"


export const loginApi = (params:Login.ReqLoginForm) => {
  return http.post<Login.ResLogin>("/login",params)
}