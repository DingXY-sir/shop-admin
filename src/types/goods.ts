/*
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-09-18 20:12:25
 * @LastEditors: DXY
 * @LastEditTime: 2022-09-27 16:34:33
 */
export namespace Goods {
  export interface Attr {
    value: string;
    detail:Array<string | number>
  }
  export interface AttrData {
    id: number;
    rule_name: string;
    rule_value: Attr[];
  }
  export interface MultiAttrList {
    headers: Array<{label:String,width:Number,key:String}>;
    values: Array<{
      pic: String,
      price: Number,
      cost_price: Number,
      or_price: Number,
      repertory: Number,
      product_id: Number,
      weight: Number,
      volume: Number,
      color: String,
      size: String,
    }>
  }
}