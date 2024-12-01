import SkyMenuItem from "./menuItem.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElMenuItem } from 'element-plus'

/** 组件入参 */
export type MenuItem = {
    /** 按钮类型 */
    text?: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type MenuItemProps = ExtractPropTypes<MenuItem>

declare module 'vue' {
  export interface GlobalComponents {
    SkyMenuItem: typeof ElMenuItem & typeof SkyMenuItem
  }
}