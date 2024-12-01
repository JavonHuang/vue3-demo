import SkyProgress from "./progress.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElProgress } from 'element-plus'

/** 组件入参 */
export type Progress = {
    /** 按钮类型 */
    text?: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type ProgressProps = ExtractPropTypes<Progress>

declare module 'vue' {
  export interface GlobalComponents {
    SkyProgress: typeof ElProgress & typeof SkyProgress
  }
}