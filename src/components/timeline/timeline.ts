import SkyTimeline from "./timeline.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElTimeline } from 'element-plus'

/** 组件入参 */
export type Timeline = {
    /** 按钮类型 */
    text?: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type TimelineProps = ExtractPropTypes<Timeline>

declare module 'vue' {
  export interface GlobalComponents {
    SkyTimeline: typeof ElTimeline & typeof SkyTimeline
  }
}