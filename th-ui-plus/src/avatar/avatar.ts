import { withInstall } from "../withInstall"
import Avatar from "./avatar.vue"
import { ElAvatar } from 'element-plus'
export const ThAvatar = withInstall(Avatar)
export type ThAvatarProps =  typeof ElAvatar & typeof ThAvatar
export default ThAvatar
