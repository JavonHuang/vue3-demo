import { withInstall } from "../withInstall"
import Anchor from "./anchor.vue"
import { ElAnchor } from 'element-plus'
export const ThAnchor = withInstall(Anchor)
export type ThAnchorProps =  typeof ElAnchor & typeof ThAnchor
export default ThAnchor
