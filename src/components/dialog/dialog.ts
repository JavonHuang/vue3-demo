import SkyDialog from "./dialog.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElAlert } from 'element-plus'

/** 组件入参 */
export type Dialog = {
    /** 按钮类型 */
    text: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type DialogProps = ExtractPropTypes<Dialog>

declare module 'vue' {
  export interface GlobalComponents {
    SkyDialog: typeof ElAlert|typeof SkyDialog
  }
}