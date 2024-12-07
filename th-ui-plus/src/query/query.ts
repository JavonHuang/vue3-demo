type columnType='ThInput'|'ThDatePicker'|'ThSelect';
export  interface QueryColumnsProps{
  type:columnType,
  slot?:boolean,
  label:string,
  prop:string,
  value:any
  props?:{
    [key: string]: any;
  }
}

import { withInstall } from "../withInstall"
import Query from "./query.vue"
export const ThQuery = withInstall(Query)
export type ThQueryProps =  typeof ThQuery
export default ThQuery
