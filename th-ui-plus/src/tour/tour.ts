import { withInstall } from "../withInstall"
import Tour from "./tour.vue"
import { ElTour } from 'element-plus'
export const ThTour = withInstall(Tour)
export type ThTourProps = typeof ElTour & typeof ThTour
export default ThTour   
