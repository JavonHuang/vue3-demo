import SkyDescriptions from "./descriptions.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElDescriptions } from 'element-plus'

/** 组件入参 */
export type Descriptions = {
    /** 按钮类型 */
    text: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type DescriptionsProps = ExtractPropTypes<Descriptions>

declare module 'vue' {
  export interface GlobalComponents {
    SkyDescriptions: typeof ElDescriptions|typeof SkyDescriptions
  }
}