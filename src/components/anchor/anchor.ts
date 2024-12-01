import SkyAnchor from "./anchor.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElAnchor } from 'element-plus'

/** 组件入参 */
export type Anchor = {
    /** 按钮类型 */
    text?: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type AnchorProps = ExtractPropTypes<Anchor>

declare module 'vue' {
  export interface GlobalComponents {
    SkyAnchor: typeof ElAnchor & typeof SkyAnchor
  }
}