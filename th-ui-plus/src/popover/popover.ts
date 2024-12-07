import { withInstall } from "../withInstall"
import Popover from "./popover.vue"
import { ElPopover } from 'element-plus'
export const ThPopover = withInstall(Popover)
export type ThPopoverProps =  typeof ElPopover & typeof ThPopover
export default ThPopover
