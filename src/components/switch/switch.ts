import SkySwitch from "./switch.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElSwitch } from 'element-plus'

/** 组件入参 */
export type Switch = {
    /** 按钮类型 */
    text: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type SwitchProps = ExtractPropTypes<Switch>

declare module 'vue' {
  export interface GlobalComponents {
    SkySwitch: typeof ElSwitch|typeof SkySwitch
  }
}