import { withInstall } from "../withInstall"
import DescriptionsItem from "./descriptions.vue"
import { ElDescriptionsItem } from 'element-plus'
export const ThDescriptionsItem = withInstall(DescriptionsItem)
export type ThDescriptionsItemProps =  typeof ElDescriptionsItem & typeof ThDescriptionsItem
export default ThDescriptionsItem
