import { columnType } from "../common";
import { withInstall } from "../withInstall"
import Query from "./query.vue"
export const ThQuery = withInstall(Query)
export type ThQueryProps =  typeof ThQuery
export default ThQuery
export  interface QueryColumnsProps{
  /**
   * @props 原属性
   * @event 原事件
   */
  component:columnType,
  slot?:boolean,
  label:string,
  prop:string,
  props?:{
    [key: string]: any;
  },
  event?:{
    [key: string]: any;
  },
}