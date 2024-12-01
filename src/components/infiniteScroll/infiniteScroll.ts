import SkyInfiniteScroll from "./infiniteScroll.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElInfiniteScroll } from 'element-plus'

/** 组件入参 */
export type InfiniteScroll = {
    /** 按钮类型 */
    text?: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type InfiniteScrollProps = ExtractPropTypes<InfiniteScroll>

declare module 'vue' {
  export interface GlobalComponents {
    SkyInfiniteScroll: typeof ElInfiniteScroll & typeof SkyInfiniteScroll
  }
}