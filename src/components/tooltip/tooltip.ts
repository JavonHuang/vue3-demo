import SkyTooltip from "./tooltip.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElTooltip } from 'element-plus'

/** 组件入参 */
export type Tooltip = {
    /** 按钮类型 */
    text?: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type TooltipProps = ExtractPropTypes<Tooltip>

declare module 'vue' {
  export interface GlobalComponents {
    SkyTooltip: typeof ElTooltip & typeof SkyTooltip
  }
}