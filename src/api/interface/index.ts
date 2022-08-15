// * 请求响应参数（不包含data）
export interface Result {
  status: string,
  message:string
}

// * 请求响应参数（包含data）
export interface ResultData<T> extends Result {
  data?:T
}

// * 登陆模块
export namespace Login {
  export interface ReqLoginForm {
    username: string;
    password:number
  }
  export interface ResLogin {
    access_token:string
  }
}
