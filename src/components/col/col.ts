import SkyCol from "./col.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElCol } from 'element-plus'

/** 组件入参 */
export type Col = {
    /** 按钮类型 */
    text?: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type ColProps = ExtractPropTypes<Col>

declare module 'vue' {
  export interface GlobalComponents {
    SkyCol: typeof ElCol & typeof SkyCol
  }
}