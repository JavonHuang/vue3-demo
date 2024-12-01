import SkyForm from "./form.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElForm } from 'element-plus'

/** 组件入参 */
export type Form = {
    /** 按钮类型 */
    text?: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type FormProps = ExtractPropTypes<Form>

declare module 'vue' {
  export interface GlobalComponents {
    SkyForm: typeof ElForm & typeof SkyForm
  }
}