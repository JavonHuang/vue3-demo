import SkyBreadcrumb from "./breadcrumb.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElBreadcrumb } from 'element-plus'

/** 组件入参 */
export type Breadcrumb = {
    /** 按钮类型 */
    text?: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type BreadcrumbProps = ExtractPropTypes<Breadcrumb>

declare module 'vue' {
  export interface GlobalComponents {
    SkyBreadcrumb: typeof ElBreadcrumb & typeof SkyBreadcrumb
  }
}