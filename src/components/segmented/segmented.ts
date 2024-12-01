import SkySegmented from "./segmented.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElSegmented } from 'element-plus'

/** 组件入参 */
export type SkySegmented = {
    /** 按钮类型 */
    text: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type SegmentedProps = ExtractPropTypes<SkySegmented>

declare module 'vue' {
  export interface GlobalComponents {
    SkySegmented: typeof ElSegmented|typeof SkySegmented
  }
}