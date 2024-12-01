import SkyDropdownItem from "./dropdownItem.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElDropdownItem } from 'element-plus'

/** 组件入参 */
export type DropdownItem = {
    /** 按钮类型 */
    text: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type DropdownItemProps = ExtractPropTypes<DropdownItem>

declare module 'vue' {
  export interface GlobalComponents {
    SkyDropdownItem: typeof ElDropdownItem|typeof SkyDropdownItem
  }
}