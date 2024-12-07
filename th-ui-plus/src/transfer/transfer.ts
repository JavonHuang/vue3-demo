import { withInstall } from "../withInstall"
import Transfer from "./transfer.vue"
import { ElTransfer } from 'element-plus'
export const ThTransfer = withInstall(Transfer)
export type ThTransferProps = typeof ElTransfer & typeof ThTransfer
export default ThTransfer   
