import SkyCollapse from "./collapse.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElCol } from 'element-plus'

/** 组件入参 */
export type Collapse = {
    /** 按钮类型 */
    text: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type CollapseProps = ExtractPropTypes<Collapse>

declare module 'vue' {
  export interface GlobalComponents {
    SkyCollapse: typeof ElCol|typeof SkyCollapse
  }
}