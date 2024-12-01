import SkyCalendar from "./calendar.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElCalendar } from 'element-plus'

/** 组件入参 */
export type Calendar = {
    /** 按钮类型 */
    text?: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type CalendarProps = ExtractPropTypes<Calendar>

declare module 'vue' {
  export interface GlobalComponents {
    SkyCalendar: typeof ElCalendar & typeof SkyCalendar
  }
}