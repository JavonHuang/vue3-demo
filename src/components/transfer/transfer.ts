import SkyTransfer from "./transfer.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElTransfer } from 'element-plus'

/** 组件入参 */
export type Transfer = {
    /** 按钮类型 */
    text: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type TransferProps = ExtractPropTypes<Transfer>

declare module 'vue' {
  export interface GlobalComponents {
    SkyTransfer: typeof ElTransfer|typeof SkyTransfer
  }
}