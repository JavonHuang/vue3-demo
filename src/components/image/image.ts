import SkyImage from "./image.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElImage } from 'element-plus'

/** 组件入参 */
export type Image = {
    /** 按钮类型 */
    text: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type ImageProps = ExtractPropTypes<Image>

declare module 'vue' {
  export interface GlobalComponents {
    SkyImage: typeof ElImage|typeof SkyImage
  }
}