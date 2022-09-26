/*
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-09-18 20:12:25
 * @LastEditors: DXY
 * @LastEditTime: 2022-09-18 20:22:38
 */
export namespace Goods {
  export interface Attr {
    value: string;
    detail:Array<string | number>
  }
  export interface AttrData {
    id: number
    rule_name:string
    rule_value: Attr[],
  }
}