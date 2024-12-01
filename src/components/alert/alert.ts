import SkyAlert from "./alert.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElAlert } from 'element-plus'

/** 组件入参 */
export type Alert = {
    /** 按钮类型 */
    text: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type AlertProps = ExtractPropTypes<Alert>

declare module 'vue' {
  export interface GlobalComponents {
    SkyAlert: typeof ElAlert|typeof SkyAlert
  }
}