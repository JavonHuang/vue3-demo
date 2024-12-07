import { withInstall } from "../withInstall"
import Skeleton from "./skeleton.vue"
import { ElSkeleton } from 'element-plus'
export const ThSkeleton = withInstall(Skeleton)
export type ThSkeletonProps =  typeof ElSkeleton & typeof ThSkeleton
export default ThSkeleton
