/*
 * @Descripttion: form查询表单类型
 * @Author: DXY
 * @Date: 2022-08-23 11:48:50
 * @LastEditors: DXY
 * @LastEditTime: 2022-08-30 11:08:16
 */
export namespace Form {
  export interface EnumProp{
    value: any; //选择的值
    label: string | number; //选项标签
    disabled: boolean; //是否禁用
    children?:EnumProp[] //为树形选择时，可以通过 children 属性指定子选项
  }
  export type SearchItemType =
	 "text"
	| "select"
	| "multipleSelect"
	| "treeSelect"
	| "multipleTreeSelect"
	| "date"
	| "daterange"
	| "timerange"
    | "datetimerange";
  export type FixedProp = "left" | "right"
  export interface SearchFormItem{
    type:"index" | "selection" | "expand";
    searchType: string; //类型
    label: string; //名称
    prop: string | number; //后端输入内容字段;
    sortable: boolean;//对应列是否可以排序
    width: number | string; //列宽
    minWidth: number | string;//最小列宽
    tag: boolean;//是否为标签展示
    fixed: FixedProp; //固定列
    isShow: boolean; //是否在表格中展示
    enum: EnumProp;
  }
  export interface Pageable{
    page: number;
    limit: number;
    total:number
  }
}
