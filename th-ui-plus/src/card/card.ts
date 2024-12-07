import { withInstall } from "../withInstall"
import Card from "./card.vue"
import { ElCard } from 'element-plus'
export const ThCard = withInstall(Card)
export type ThCardProps =  typeof ElCard & typeof ThCard
export default ThCard
