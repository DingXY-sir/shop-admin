/*
 * @Descripttion:
 * @Author: DXY
 * @Date: 2022-08-15 10:58:06
 * @LastEditors: DXY
 * @LastEditTime: 2022-08-22 10:50:11
 */
// * 请求响应参数（不包含data）
export interface Result {
  status: string;
  message: string;
}

// * 请求响应参数（包含data）
export interface ResultData<T> {
  // data?:T
  data: {
    status: string;
    message: string;
    data: T;
  };
}

// * 请求Head参数
export interface HeaderData {
  access_token: string;
  jti: string;
}

// * 登陆模块
export namespace Login {
  export interface IReqLogin {
    phone: string | number;
    password: string;
    code: string | undefined;
  }
  export interface ReqLoginForm extends IReqLogin {
    imgCode: any;
  }
  export interface IReqUserAuth extends IReqLogin {
    type: number;
  }
  export interface ResLogin {
    access_token: string;
  }
  export interface IResUserAuth {
    userId: number;
    roleName: string;
    roleId: number;
  }
  export interface IRoleId {
    userId: number;
    roleId: number;
  }
  export interface IResGetLogin {
    access_token: string;
    expires_in: number;
    id: number;
    jti: string;
    roleId: number;
    scope: string;
    token_type: string;
    type: string;
    username: string;
  }
}

export interface MenuOptions {
  path: string;
  title: string;
  icon?: string;
  children?: MenuOptions[];
}
