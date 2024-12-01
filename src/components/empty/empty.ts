import SkyEmpty from "./empty.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElEmpty } from 'element-plus'

/** 组件入参 */
export type Empty = {
    /** 按钮类型 */
    text?: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type EmptyProps = ExtractPropTypes<Empty>

declare module 'vue' {
  export interface GlobalComponents {
    SkyEmpty: typeof ElEmpty & typeof SkyEmpty
  }
}