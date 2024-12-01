import SkyPopconfirm from "./popconfirm.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElPopconfirm } from 'element-plus'

/** 组件入参 */
export type Popconfirm = {
    /** 按钮类型 */
    text?: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type PopconfirmProps = ExtractPropTypes<Popconfirm>

declare module 'vue' {
  export interface GlobalComponents {
    SkyPopconfirm: typeof ElPopconfirm & typeof SkyPopconfirm
  }
}