import SkyTag from "./tag.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElTag } from 'element-plus'

/** 组件入参 */
export type Tag = {
    /** 按钮类型 */
    text: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type TagProps = ExtractPropTypes<Tag>

declare module 'vue' {
  export interface GlobalComponents {
    SkyTag: typeof ElTag|typeof SkyTag
  }
}