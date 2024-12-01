import SkyResult from "./result.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElResult } from 'element-plus'

/** 组件入参 */
export type Result = {
    /** 按钮类型 */
    text: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type ResultProps = ExtractPropTypes<Result>

declare module 'vue' {
  export interface GlobalComponents {
    SkyResult: typeof ElResult|typeof SkyResult
  }
}