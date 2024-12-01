import SkyCard from "./card.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElCard } from 'element-plus'

/** 组件入参 */
export type Card = {
    /** 按钮类型 */
    text?: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type CardProps = ExtractPropTypes<Card>

declare module 'vue' {
  export interface GlobalComponents {
    SkyCard: typeof ElCard & typeof SkyCard
  }
}