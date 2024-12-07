import { withInstall } from "../withInstall"
import Descriptions from "./descriptions.vue"
import { ElDescriptions } from 'element-plus'
export const ThDescriptions = withInstall(Descriptions)
export type ThDescriptionsProps =  typeof ElDescriptions & typeof ThDescriptions
export default ThDescriptions
