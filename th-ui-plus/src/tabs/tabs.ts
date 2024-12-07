import { withInstall } from "../withInstall"
import Tabs from "./tabs.vue"
import { ElTabs } from 'element-plus'
export const ThTabs = withInstall(Tabs)
export type ThTabsProps = typeof ElTabs & typeof ThTabs
export default ThTabs   
