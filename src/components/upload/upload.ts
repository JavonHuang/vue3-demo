import SkyUpload from "./upload.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElUpload } from 'element-plus'

/** 组件入参 */
export type Upload = {
    /** 按钮类型 */
    text: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type UploadProps = ExtractPropTypes<Upload>

declare module 'vue' {
  export interface GlobalComponents {
    SkyUpload: typeof ElUpload|typeof SkyUpload
  }
}