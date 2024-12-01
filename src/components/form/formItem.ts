import SkyFormItem from "./formItem.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElFormItem } from 'element-plus'

/** 组件入参 */
export type FormItem = {
    /** 按钮类型 */
    text: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type FormItemProps = ExtractPropTypes<FormItem>

declare module 'vue' {
  export interface GlobalComponents {
    SkyFormItem: typeof ElFormItem|typeof SkyFormItem
  }
}