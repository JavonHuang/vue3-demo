import SkyRadio from "./radio.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElRadio } from 'element-plus'

/** 组件入参 */
export type Radio = {
    /** 按钮类型 */
    text?: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type RadioProps = ExtractPropTypes<Radio>

declare module 'vue' {
  export interface GlobalComponents {
    SkyRadio: typeof ElRadio & typeof SkyRadio
  }
}