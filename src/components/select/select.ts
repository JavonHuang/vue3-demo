import SkySelect from "./select.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElSelect } from 'element-plus'

/** 组件入参 */
export type Select = {
    /** 按钮类型 */
    text: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type SelectProps = ExtractPropTypes<Select>

declare module 'vue' {
  export interface GlobalComponents {
    SkySelect: typeof ElSelect|typeof SkySelect
  }
}