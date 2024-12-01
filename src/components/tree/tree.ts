import SkyTree from "./tree.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElTree } from 'element-plus'

/** 组件入参 */
export type Tree = {
    /** 按钮类型 */
    text?: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type TreeProps = ExtractPropTypes<Tree>

declare module 'vue' {
  export interface GlobalComponents {
    SkyTree: typeof ElTree & typeof SkyTree
  }
}