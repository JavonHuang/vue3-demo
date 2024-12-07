import { withInstall } from "../withInstall"
import Steps from "./steps.vue"
import { ElSteps } from 'element-plus'
export const ThSteps = withInstall(Steps)
export type ThStepsProps = typeof ElSteps & typeof ThSteps
export default ThSteps 
