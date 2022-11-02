/*
 * @Descripttion:设置公用MessageBox提示框（二次确认【删除、禁用、启用、重置密码】）
 * @Author: DXY
 * @Date: 2022-10-19 14:29:55
 * @LastEditors: DXY
 * @LastEditTime: 2022-10-20 14:53:36
 */
import { ElMessage, ElMessageBox } from "element-plus";

/**
 * @param {Function} api => 接口
 * @param {String} params => 参数
 * @param {String} message => 提示语
 */

//Parameters获取函数参数返回类型 （return类型 Array :[params:any] ）
export const useMessageBox = <P = any, R = any>(
  api: (params: P) => Promise<R>,
  params: Parameters<typeof api>[0],
  message: string,
) => {
  return new Promise((resolve, reject) => {
    ElMessageBox.confirm(`是否${message}?`, "温馨提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning",
      center: true,
    }).then(async () => {
      const res = await api(params);
      if (!res) return reject(false);
      ElMessage({
        type: "success",
        message: `${message}成功！`,
      });
      resolve(true);
    });
  });
};
