import SkyAvatar from "./avatar.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElAutocomplete } from 'element-plus'

/** 组件入参 */
export type Avatar = {
    /** 按钮类型 */
    text?: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type AvatarProps = ExtractPropTypes<Avatar>

declare module 'vue' {
  export interface GlobalComponents {
    SkyAvatar: typeof ElAutocomplete & typeof SkyAvatar
  }
}