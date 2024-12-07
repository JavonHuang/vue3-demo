import { withInstall } from "../withInstall"
import PageHeader from "./pageHeader.vue"
import { ElPageHeader } from 'element-plus'
export const ThPageHeader = withInstall(PageHeader)
export type ThPageHeaderProps =  typeof ElPageHeader & typeof ThPageHeader
export default ThPageHeader
