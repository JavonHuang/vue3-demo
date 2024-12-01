import SkyCheckbox from "./checkbox.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElCheckbox } from 'element-plus'

/** 组件入参 */
export type Checkbox = {
}

/** 组件参数类型 */
export type CheckboxProps = ExtractPropTypes<Checkbox>

declare module 'vue' {
  export interface GlobalComponents {
    SkyCheckbox: typeof ElCheckbox & typeof SkyCheckbox
  }
}