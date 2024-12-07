import { withInstall } from "../withInstall"
import Affix from "./affix.vue"
import { ElAffix } from 'element-plus'

export const ThAffix = withInstall(Affix)
export type ThAffixProps = typeof ThAffix & typeof ElAffix

export default ThAffix
