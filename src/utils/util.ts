/*
 * @Descripttion: 工具函数
 * @Author: DXY
 * @Date: 2022-10-04 21:19:32
 * @LastEditors: DXY
 * @LastEditTime: 2022-10-05 15:26:43
 */

/**
 * @description 对象数组深克隆
 * @param {Object} obj 源对象
 * @return object
 */
export function deepCopy<T>(obj: any): T {
  let newObj: any;
  try {
    newObj = obj.push ? [] : {};
  } catch (error) {
    newObj = {};
  }
  for (let attr in obj) {
    if (typeof obj[attr] === 'object') {
      newObj[attr] = deepCopy(obj[attr])
    } else {
      newObj[attr] = obj[attr]
    }
  }
  return newObj
}
/**
 * @description 判断数据类型
 * @param {Any} val 判断类型的数据
 * @return string
 */
export function isType(val : any) {
  if (val === null) return "null";
  if (typeof val !== "object") return typeof val;
  else return Object.prototype.toString.call(val).slice(8, -1).toLocaleLowerCase();
}

/**
 * @description 获取当前时间
 * @return string
 */
export function getCurrentTimes() {
  //获取当前时间
  let timeNow = new Date();
  //获取小时
  let hours = timeNow.getHours();
  if (hours > 6 && hours <= 10) return `早上好 ⛅`;
  if (hours > 10 && hours <= 14) return `中午好 🌞`;
  if (hours > 14 && hours <= 18) return `下午好 🌞`;
  if (hours > 18 && hours <= 24) return `晚上好 🌛`;
  if (hours > 24 && hours <= 6) return `凌晨好 🌛`;
  
}
