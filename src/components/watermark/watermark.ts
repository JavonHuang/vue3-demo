import SkyWatermark from "./watermark.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElWatermark } from 'element-plus'

/** 组件入参 */
export type Watermark = {
    /** 按钮类型 */
    text: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type WatermarkProps = ExtractPropTypes<Watermark>

declare module 'vue' {
  export interface GlobalComponents {
    SkyWatermark: typeof ElWatermark|typeof SkyWatermark
  }
}