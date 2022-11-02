/*
 * @Descripttion: 商品接口
 * @Author: DXY
 * @Date: 2022-09-27 14:29:19
 * @LastEditors: DXY
 * @LastEditTime: 2022-10-17 21:33:49
 */

import http from "@/utils/request";
// import qs from "qs";
import { Goods } from "@/types/goods";
export const getAttrTemplate = () => {
  return http.post<Array<Goods.AttrData>>("/attrTemplate");
};
export const getMultiAttrList = () => {
  return http.post<Goods.MultiAttrList>("/multiAttr");
};
