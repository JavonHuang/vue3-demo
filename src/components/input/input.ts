import SkyInput from "./input.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElInput } from 'element-plus'

/** 组件入参 */
export type Input = {
    /** 按钮类型 */
    text: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type InputProps = ExtractPropTypes<Input>

declare module 'vue' {
  export interface GlobalComponents {
    SkyInput: typeof ElInput|typeof SkyInput
  }
}