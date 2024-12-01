import SkyPopover from "./popover.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElPopconfirm } from 'element-plus'

/** 组件入参 */
export type Popover = {
    /** 按钮类型 */
    text?: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type PopoverProps = ExtractPropTypes<Popover>

declare module 'vue' {
  export interface GlobalComponents {
    SkyPopover: typeof ElPopconfirm & typeof SkyPopover
  }
}