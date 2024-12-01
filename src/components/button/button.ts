import SkyButton from "./button.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElButton } from 'element-plus'

/** 组件入参 */
export type Button = {
    /** 按钮类型 */
    text: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type ButtonProps = ExtractPropTypes<Button>

declare module 'vue' {
  export interface GlobalComponents {
    SkyButton: typeof ElButton|typeof SkyButton
  }
}