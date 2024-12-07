import { withInstall } from "../withInstall"
import Tooltip from "./tooltip.vue"
import { ElTooltip } from 'element-plus'
export const ThTooltip = withInstall(Tooltip)
export type ThTooltipProps = typeof ElTooltip & typeof ThTooltip
export default ThTooltip   
