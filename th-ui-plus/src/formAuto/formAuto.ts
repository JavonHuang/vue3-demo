import { columnType } from "../global"
import { withInstall } from "../withInstall"
import FormAuto from "./formAuto.vue"
export const ThFormAuto = withInstall(FormAuto)
export type ThFormAutoProps = typeof ThFormAuto
export default ThFormAuto

/**
 * @props 原属性
 * @event 原事件
 */
interface FormAutoColumnsProps{
  component:columnType,
  span?:number,
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

export  type {FormAutoColumnsProps}