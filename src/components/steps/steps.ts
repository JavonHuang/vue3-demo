import SkySteps from "./steps.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElPageHeader } from 'element-plus'

/** 组件入参 */
export type Steps = {
    /** 按钮类型 */
    text?: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type StepsProps = ExtractPropTypes<Steps>

declare module 'vue' {
  export interface GlobalComponents {
    SkySteps: typeof ElPageHeader & typeof SkySteps
  }
}