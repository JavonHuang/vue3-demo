import SkyTableV2 from "./tableV2.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElTableV2 } from 'element-plus'

/** 组件入参 */
export type TableV2 = {
    /** 按钮类型 */
    text?: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type TableV2Props = ExtractPropTypes<TableV2>

declare module 'vue' {
  export interface GlobalComponents {
    SkyTableV2: typeof ElTableV2 & typeof SkyTableV2
  }
}