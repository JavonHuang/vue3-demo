import { withInstall } from "../withInstall"
import Segmented from "./segmented.vue"
import { ElSegmented } from 'element-plus'
export const ThSegmented = withInstall(Segmented)
export type ThSegmentedProps =  typeof ElSegmented & typeof ThSegmented
export default ThSegmented
