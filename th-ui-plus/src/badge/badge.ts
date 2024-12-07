import { withInstall } from "../withInstall"
import Badge from "./badge.vue"
import { ElBadge } from 'element-plus'
export const ThBadge = withInstall(Badge)
export type ThBadgeProps =  typeof ElBadge & typeof ThBadge
export default ThBadge
