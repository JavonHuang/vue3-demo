  
import { withInstall } from "../withInstall"
import QueryTable from "./queryTable.vue"
export const ThQueryTable = withInstall(QueryTable)

export type IQueryTableColumn={
  isSlot?:Boolean,
  columnType?:'text'|'number'|'thousands'|'year'|'month'|'date'|'dateTime'|'time'|'link'
  prop:string,
  label:string,
  width?:number,
  minWidth?:number,
  fixed?:string,
  show?:boolean,
  children?:Array<IQueryTableColumn>,
}

export interface IQueryTable{
  api:(e:any)=> Promise<any>,
  columns: Array<IQueryTableColumn>,
  selectable?:boolean,
  border?:boolean,
}

export type ThQueryTableProps =  typeof ThQueryTable 
export default ThQueryTable

/**
 * @reflesh 刷新表格数据
 * @getTableData 获取表格数据源
 */
interface QueryTableInstance{
  reflesh:()=>void,
  getTableData:()=>Array<any>
}

export type {QueryTableInstance}