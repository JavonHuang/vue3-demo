import SkySelectV2 from "./selectv2.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElSelectV2 } from 'element-plus'

/** 组件入参 */
export type SelectV2 = {
    /** 按钮类型 */
    text?: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type SelectV2Props = ExtractPropTypes<SelectV2>

declare module 'vue' {
  export interface GlobalComponents {
    SkySelectV2: typeof ElSelectV2 & typeof SkySelectV2
  }
}