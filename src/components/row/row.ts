import SkyRow from "./row.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElRate } from 'element-plus'

/** 组件入参 */
export type Row = {
    /** 按钮类型 */
    text: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type RowProps = ExtractPropTypes<Row>

declare module 'vue' {
  export interface GlobalComponents {
    SkyRow: typeof ElRate|typeof SkyRow
  }
}