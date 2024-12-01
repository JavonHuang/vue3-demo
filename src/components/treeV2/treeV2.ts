import SkyTreeV2 from "./treeV2.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElTreeV2 } from 'element-plus'

/** 组件入参 */
export type TreeV2 = {
    /** 按钮类型 */
    text: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type TreeV2Props = ExtractPropTypes<TreeV2>

declare module 'vue' {
  export interface GlobalComponents {
    SkyTreeV2: typeof ElTreeV2|typeof SkyTreeV2
  }
}