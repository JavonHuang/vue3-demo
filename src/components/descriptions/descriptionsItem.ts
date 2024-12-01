import SkyDescriptionsItem from "./descriptionsItem.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElDescriptionsItem } from 'element-plus'

/** 组件入参 */
export type DescriptionsItem = {
    /** 按钮类型 */
    text?: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type DescriptionsItemProps = ExtractPropTypes<DescriptionsItem>

declare module 'vue' {
  export interface GlobalComponents {
    SkyDescriptionsItem: typeof ElDescriptionsItem & typeof SkyDescriptionsItem
  }
}