import SkyTimeSelect from "./timeSelect.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElTimeSelect } from 'element-plus'

/** 组件入参 */
export type TimeSelect = {
    /** 按钮类型 */
    text: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type TimeSelectProps = ExtractPropTypes<TimeSelect>

declare module 'vue' {
  export interface GlobalComponents {
    SkyTimeSelect: typeof ElTimeSelect|typeof SkyTimeSelect
  }
}