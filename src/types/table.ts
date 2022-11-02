/*
 * @Descripttion: Table表TS类型
 * @Author: DXY
 * @Date: 2022-09-28 13:31:56
 * @LastEditors: DXY
 * @LastEditTime: 2022-10-24 11:16:16
 */
export namespace Table {
  export interface Pageable {
    pageNum: number;
    pageSize: number;
    total: number;
  }
  export interface TableStateProps {
    //查询参数
    // searchParams: {
    //   [key:string]:any
    // },
    searchParam: Record<string, any>;
    searchInitParams: {
      [key: string]: any;
    };
    tableData: any[];
    pageable: Pageable;
    totalParams: {
      [key: string]: any;
    };
  }
}
