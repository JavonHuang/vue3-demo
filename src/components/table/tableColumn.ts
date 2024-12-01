import SkyTableColumn from "./tableColumn.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElTableColumn } from 'element-plus'

/** 组件入参 */
export type TableColumn = {
    /** 按钮类型 */
    text?: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type TableColumnProps = ExtractPropTypes<TableColumn>

declare module 'vue' {
  export interface GlobalComponents {
    SkyTableColumn: typeof ElTableColumn & typeof SkyTableColumn
  }
}