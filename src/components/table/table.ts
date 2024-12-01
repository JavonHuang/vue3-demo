import SkyTable from "./table.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElTable } from 'element-plus'

/** 组件入参 */
export type Table = {
    /** 按钮类型 */
    text?: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type TableProps = ExtractPropTypes<Table>

declare module 'vue' {
  export interface GlobalComponents {
    SkyTable: typeof ElTable & typeof SkyTable
  }
}