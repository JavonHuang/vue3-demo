import { withInstall } from "../withInstall"
import Breadcrumb from "./breadcrumb.vue"
import { ElBreadcrumb } from 'element-plus'
export const ThBreadcrumb = withInstall(Breadcrumb)
export type ThBreadcrumbProps =  typeof ElBreadcrumb & typeof ThBreadcrumb
export default ThBreadcrumb
