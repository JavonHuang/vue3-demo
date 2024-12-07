import { withInstall } from "../withInstall"
import Slider from "./slider.vue"
import { ElSlider } from 'element-plus'
export const ThSlider = withInstall(Slider)
export type ThSliderProps =  typeof ElSlider & typeof ThSlider
export default ThSlider
