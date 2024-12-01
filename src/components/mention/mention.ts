import SkyMention from "./mention.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElMention } from 'element-plus'

/** 组件入参 */
export type Mention = {
    /** 按钮类型 */
    text: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type MentionProps = ExtractPropTypes<Mention>

declare module 'vue' {
  export interface GlobalComponents {
    SkyMention: typeof ElMention|typeof SkyMention
  }
}