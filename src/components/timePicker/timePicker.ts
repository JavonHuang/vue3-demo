import SkyTimePicker from "./timePicker.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElTimePicker } from 'element-plus'

/** 组件入参 */
export type TimePicker = {
    /** 按钮类型 */
    text: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type TimePickerProps = ExtractPropTypes<TimePicker>

declare module 'vue' {
  export interface GlobalComponents {
    SkyTimePicker: typeof ElTimePicker|typeof SkyTimePicker
  }
}