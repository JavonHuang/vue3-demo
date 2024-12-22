import { withInstall } from "../withInstall"
import Link from "./link.vue"
import { ElLink } from 'element-plus'
export const ThLink = withInstall(Link)
export type ThLinkProps =  typeof ElLink & typeof ThLink
export default ThLink
