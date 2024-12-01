import SkyTabs from "./tabs.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElTabs } from 'element-plus'

/** 组件入参 */
export type Tabs = {
    /** 按钮类型 */
    text: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type TabsProps = ExtractPropTypes<Tabs>

declare module 'vue' {
  export interface GlobalComponents {
    SkyTabs: typeof ElTabs|typeof SkyTabs
  }
}