import { FormInstance } from "element-plus"
import { columnType, IComponentEvent, IComponentProps, ThRef } from "../common"
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
  show?:boolean,
  props?:IComponentProps,
  event?:IComponentEvent,
}

export  type {FormAutoColumnsProps}

/**
 * @onSubmit 表单提交
 */
interface ThFormAutoInstance extends ThRef<FormInstance>{
  onSubmit:()=>Promise<any>,
}

export type {ThFormAutoInstance}