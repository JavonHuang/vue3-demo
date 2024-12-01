import SkyCarousel from "./carousel.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElCarousel } from 'element-plus'

/** 组件入参 */
export type Carousel = {
    /** 按钮类型 */
    text?: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type CarouselProps = ExtractPropTypes<Carousel>

declare module 'vue' {
  export interface GlobalComponents {
    SkyCarousel: typeof ElCarousel & typeof SkyCarousel
  }
}