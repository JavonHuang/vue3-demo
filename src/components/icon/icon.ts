import SkyIcon from "./icon.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElIcon } from 'element-plus'

/** 组件入参 */
export type Icon = {
    /** 按钮类型 */
    text: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type IconProps = ExtractPropTypes<Icon>

declare module 'vue' {
  export interface GlobalComponents {
    SkyIcon: typeof ElIcon|typeof SkyIcon
  }
}