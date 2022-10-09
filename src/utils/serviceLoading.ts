/*
 * @Descripttion: 全局loading
 * @Author: DXY
 * @Date: 2022-10-09 15:01:27
 * @LastEditors: DXY
 * @LastEditTime: 2022-10-09 15:24:53
 */
import { ElLoading } from 'element-plus'

let loadingInstance : ReturnType<typeof ElLoading.service>
const startLoading = () => {
  loadingInstance = ElLoading.service({
    lock: true,
    text: 'Loading',
    background:'rgba(0,0,0,0.7)'
  })
}
const endLoading = () => {
  loadingInstance.close()
}
/**
 * 需求：
 * 当访问某页面多个请求，需要将多个请求全部调用成功取消loading
 * 
 * 思路：
 * 设置全局变量 needLoadingRequestCount ， 每次showFullScreenLoading()时候  needLoadingRequestCount +1 
 * 每次hideFullScreenLoading()时候 needLoadingRequestCount -1 ，当needLoadingRequestCount =0的时候结束loading
 */
let needLoadingRequestCount = 0
export const showFullScreenLoading = () => {
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount ++
}

export const hideFullScreenLoading = () => {
  if (needLoadingRequestCount <= 0) return;
  needLoadingRequestCount--;
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}

