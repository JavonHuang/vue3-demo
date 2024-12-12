import { withInstall } from "../withInstall"
import PageLayout from "./pageLayout.vue"
export const ThPageLayout = withInstall(PageLayout)
export type ThPageLayoutProps =  typeof ThPageLayout
export default ThPageLayout

export interface IProps{
  direction?:'row'|'column'
}