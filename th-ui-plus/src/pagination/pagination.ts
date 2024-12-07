import { withInstall } from "../withInstall"
import Pagination from "./pagination.vue"
import { ElPagination } from 'element-plus'
export const ThPagination = withInstall(Pagination)
export type ThPaginationProps =  typeof ElPagination & typeof ThPagination
export default ThPagination
