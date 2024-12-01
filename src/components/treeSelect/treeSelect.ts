import SkyTreeSelect from "./treeSelect.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElTreeSelect } from 'element-plus'

/** 组件入参 */
export type TreeSelect = {
    /** 按钮类型 */
    text?: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type TreeSelectProps = ExtractPropTypes<TreeSelect>

declare module 'vue' {
  export interface GlobalComponents {
    SkyTreeSelect: typeof ElTreeSelect & typeof SkyTreeSelect
  }
}