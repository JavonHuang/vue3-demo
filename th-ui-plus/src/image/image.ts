import { withInstall } from "../withInstall"
import Image from "./image.vue"
import { ElImage } from 'element-plus'
export const ThImage = withInstall(Image)
export type ThImageProps =  typeof ElImage & typeof ThImage
export default ThImage
