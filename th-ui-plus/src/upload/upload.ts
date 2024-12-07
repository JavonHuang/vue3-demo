import { withInstall } from "../withInstall"
import Upload from "./upload.vue"
import { ElUpload } from 'element-plus'
export const ThUpload = withInstall(Upload)
export type ThUploadProps = typeof ElUpload & typeof ThUpload
export default ThUpload   
