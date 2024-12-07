import { withInstall } from "../withInstall"
import Dialog from "./dialog.vue"
import { ElDialog } from 'element-plus'
export const ThDialog = withInstall(Dialog)
export type ThDialogProps =  typeof ElDialog & typeof ThDialog
export default ThDialog
