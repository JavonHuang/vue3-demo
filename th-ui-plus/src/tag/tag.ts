import { withInstall } from "../withInstall"
import Tag from "./tag.vue"
import { ElTag } from 'element-plus'
export const ThTag = withInstall(Tag)
export type ThTagProps = typeof ElTag & typeof ThTag
export default ThTag   
