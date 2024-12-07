import { withInstall } from "../withInstall"
import Row from "./row.vue"
import { ElRow } from 'element-plus'
export const ThRow = withInstall(Row)
export type ThRowProps =  typeof ElRow & typeof ThRow
export default ThRow
