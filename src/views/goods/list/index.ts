/*
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-08-31 10:40:12
 * @LastEditors: DXY
 * @LastEditTime: 2022-09-01 11:39:51
 */
export interface TableData {
  id: number,
  gender: string,
  idCard: string,
  status: "0" | "1",
  createTime: string,
  role:string[] | string
}