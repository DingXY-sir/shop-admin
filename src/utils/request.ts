/*
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-08-15 10:19:49
 * @LastEditors: DXY
 * @LastEditTime: 2022-08-16 16:12:55
 */
import axios,{AxiosInstance,AxiosRequestConfig,AxiosResponse,AxiosError} from "axios"
import { ResultData } from "@/api/interface/index"
import {useUserStore} from "@/store/user"
const config = {
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout:6000,
  // 跨域时候允许携带凭证
	// withCredentials: true
}

class RequestHttp {
  service: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    //实例化axios
    this.service = axios.create(config);
    // 添加请求拦截器
    this.service.interceptors.request.use( (config:AxiosRequestConfig) => {
      // 在发送请求之前做些什么
      const userStore = useUserStore()
      console.log(config)
      return config;
    },  (error:AxiosError) => {
      // 对请求错误做些什么
      return Promise.reject(error);
    });

    // 添加响应拦截器
    this.service.interceptors.response.use( (response:AxiosResponse) => {
      // 2xx 范围内的状态码都会触发该函数。
      // 对响应数据做点什么
      return response;
    },  (error:AxiosError) => {
      // 超出 2xx 范围的状态码都会触发该函数。
      // 对响应错误做点什么
      return Promise.reject(error);
    });
  }

  // 常用的请求方法封装
  get<T>(url: string, params?: object, _object = {}):Promise<ResultData<T>> {
    return this.service.get(url,{params,..._object})
  }
  post<T>(url: string, params?: object, _object = {}):Promise<ResultData<T>> {
    return this.service.post(url,params,_object)
  }
  put<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.put(url,params,_object)
  }
  delete<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.delete(url,{params,..._object})
  }

}

export default new RequestHttp(config)