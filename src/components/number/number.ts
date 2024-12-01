import SkyInputNumber from "./number.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElInputNumber } from 'element-plus'

/** 组件入参 */
export type InputNumber = {
    /** 按钮类型 */
    text: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type InputNumberProps = ExtractPropTypes<InputNumber>

declare module 'vue' {
  export interface GlobalComponents {
    SkyInputNumber: typeof ElInputNumber|typeof SkyInputNumber
  }
}