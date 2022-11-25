/*
 * @Descripttion: axios请求取消
 * @Author: DXY
 * @Date: 2022-11-25 10:31:11
 * @LastEditors: DXY
 * @LastEditTime: 2022-11-25 17:45:18
 */
import axios, { Canceler, AxiosRequestConfig } from "axios";
import { isType } from "@/utils/util";
import qs from "qs";

// * 声明一个Map 用于储存每个请求标识、和取消函数
let pendingMap = new Map<string, Canceler>();

// * 序列化参数
export const getPendingUrl = (config: AxiosRequestConfig) => {
  return [config.method, config.url, qs.stringify(config.data), qs.parse(config.params)].join("&");
};

export class AxiosCancel {
  /**
   * @description: 添加请求
   * @param {Object} config
   * @return void
   */
  addPending(config: AxiosRequestConfig) {
    // * 在请求之前取消之前的请求操作
    this.removePending(config);
    const url = getPendingUrl(config);
    config.cancelToken =
      config.cancelToken ||
      new axios.CancelToken(cancel => {
        if (!pendingMap.has(url)) {
          // * 如何pendingMap中不存在，则添加进去
          pendingMap.set(url, cancel);
        }
      });
  }
  /**
   * @description: 移除请求
   * @param {Object} config
   */
  removePending(config: AxiosRequestConfig) {
    const url = getPendingUrl(config);
    if (pendingMap.has(url)) {
      // * 桶里存在请求，获取执行并且从桶中移除
      const cancel = pendingMap.get(url);
      cancel && cancel();
      pendingMap.delete(url);
    }
  }
  /**
   * @description: 移除全部请求
   * @param {Object} config
   */
  removeAllPending() {
    pendingMap.forEach(cancel => {
      cancel && isType(cancel) == "function" && cancel();
    });
    pendingMap.clear();
  }
  /**
   * @description: 重制
   */
  reset(): void {
    pendingMap = new Map<string, Canceler>();
  }
}
