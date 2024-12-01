import SkyDrawer from "./drawer.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElDrawer } from 'element-plus'

/** 组件入参 */
export type Drawer = {
    /** 按钮类型 */
    text: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type DrawerProps = ExtractPropTypes<Drawer>

declare module 'vue' {
  export interface GlobalComponents {
    SkyDrawer: typeof ElDrawer|typeof SkyDrawer
  }
}