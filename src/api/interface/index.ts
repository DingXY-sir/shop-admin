/*
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-08-15 10:58:06
 * @LastEditors: DXY
 * @LastEditTime: 2022-08-16 16:45:20
 */
// * 请求响应参数（不包含data）
export interface Result {
  status: string,
  message:string
}

// * 请求响应参数（包含data）
export interface ResultData<T> extends Result {
  data?:T
}

// * 请求Head参数
export interface HeaderData {
  access_token: string,
  jti:string
}

// * 登陆模块
export namespace Login {
  export interface ReqLoginForm {
    phone: string | number,
    password: string | number,
    code: string | undefined,
    imgCode:any
  }
  export interface ResLogin {
    access_token:string
  }
}
