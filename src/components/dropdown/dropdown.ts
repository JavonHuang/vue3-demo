import SkyDropdown from "./dropdown.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElDropdown } from 'element-plus'

/** 组件入参 */
export type Dropdown = {
    /** 按钮类型 */
    text: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type DropdownProps = ExtractPropTypes<Dropdown>

declare module 'vue' {
  export interface GlobalComponents {
    SkyDropdown: typeof ElDropdown|typeof SkyDropdown
  }
}