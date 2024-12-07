import { withInstall } from "../withInstall"
import Mention from "./mention.vue"
import { ElMention } from 'element-plus'
export const ThMention = withInstall(Mention)
export type ThMentionProps =  typeof ElMention & typeof ThMention
export default ThMention
