import SkyMenu from "./menu.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElMenu } from 'element-plus'

/** 组件入参 */
export type Menu = {
    /** 按钮类型 */
    text?: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type MenuProps = ExtractPropTypes<Menu>

declare module 'vue' {
  export interface GlobalComponents {
    SkyMenu: typeof ElMenu & typeof SkyMenu
  }
}