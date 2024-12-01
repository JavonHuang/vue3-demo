import SkyRate from "./rate.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElRate } from 'element-plus'

/** 组件入参 */
export type Rate = {
    /** 按钮类型 */
    text?: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type RateProps = ExtractPropTypes<Rate>

declare module 'vue' {
  export interface GlobalComponents {
    SkyRate: typeof ElRate & typeof SkyRate
  }
}