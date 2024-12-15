  
import { withInstall } from "../withInstall"
import QueryTable from "./queryTable.vue"
export const ThQueryTable = withInstall(QueryTable)

export type IQueryColumn={
  isSlot?:Boolean,
  columnType?:'text'|'number'|'thousands'|'year'|'month'|'date'|'dateTime'|'time'
  prop:string,
  label:string,
  width?:number,
  minWidth?:number,
  fixed?:string,
}

export interface IQueryTable{
  api:(e:any)=> Promise<any>,
  columns: Array<IQueryColumn>,
  selectable?:boolean,
  border?:boolean,
}

export type ThQueryTableProps =  typeof ThQueryTable 
export default ThQueryTable
