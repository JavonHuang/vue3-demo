import SkyBadge from "./badge.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElBadge } from 'element-plus'

/** 组件入参 */
export type Badge = {
    /** 按钮类型 */
    text?: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type BadgeProps = ExtractPropTypes<Badge>

declare module 'vue' {
  export interface GlobalComponents {
    SkyBadge: typeof ElBadge & typeof SkyBadge
  }
}