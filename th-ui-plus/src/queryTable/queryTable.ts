  
import { withInstall } from "../withInstall"
import QueryTable from "./queryTable.vue"
export const ThQueryTable = withInstall(QueryTable)

export type IQueryColumn={
  isSlot?:Boolean,
  columnType?:'text'|'number'|'date'|'dateTime'
  prop:string,
  label:string,
  width?:number,
}

export type ThQueryTableProps =  typeof ThQueryTable 
export default ThQueryTable
