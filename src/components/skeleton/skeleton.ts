import SkySkeleton from "./skeleton.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElSkeleton } from 'element-plus'

/** 组件入参 */
export type Skeleton = {
    /** 按钮类型 */
    text: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type SkeletonProps = ExtractPropTypes<Skeleton>

declare module 'vue' {
  export interface GlobalComponents {
    SkySkeleton: typeof ElSkeleton|typeof SkySkeleton
  }
}