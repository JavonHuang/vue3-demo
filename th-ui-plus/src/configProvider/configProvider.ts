import { withInstall } from "../withInstall"
import ConfigProvider from "./configProvider.vue"
import { ElConfigProvider } from 'element-plus'
export const ThConfigProvider = withInstall(ConfigProvider)
export type ThConfigProviderProps =  typeof ElConfigProvider & typeof ThConfigProvider
export default ThConfigProvider
