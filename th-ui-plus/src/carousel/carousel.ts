import { withInstall } from "../withInstall"
import Carousel from "./carousel.vue"
import { ElCarousel } from 'element-plus'
export const ThCarousel = withInstall(Carousel)
export type ThCarouselProps =  typeof ElCarousel & typeof ThCarousel
export default ThCarousel
