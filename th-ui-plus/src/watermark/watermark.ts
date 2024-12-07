import { withInstall } from "../withInstall"
import Watermark from "./watermark.vue"
import { ElWatermark } from 'element-plus'
export const ThWatermark = withInstall(Watermark)
export type ThWatermarkProps = typeof ElWatermark & typeof ThWatermark
export default ThWatermark   
