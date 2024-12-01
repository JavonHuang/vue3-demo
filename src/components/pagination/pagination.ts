import SkyPagination from "./pagination.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElPagination } from 'element-plus'

/** 组件入参 */
export type Pagination = {
    /** 按钮类型 */
    text?: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type PaginationProps = ExtractPropTypes<Pagination>

declare module 'vue' {
  export interface GlobalComponents {
    SkyPagination: typeof ElPagination & typeof SkyPagination
  }
}