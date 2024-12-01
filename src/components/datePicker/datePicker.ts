import SkyDatePicker from "./datePicker.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElDatePicker } from 'element-plus'

/** 组件入参 */
export type DatePicker = {
    /** 按钮类型 */
    text?: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type DatePickerProps = ExtractPropTypes<DatePicker>

declare module 'vue' {
  export interface GlobalComponents {
    SkyDatePicker: typeof ElDatePicker & typeof SkyDatePicker
  }
}