import { withInstall } from "../withInstall"
import Timeline from "./timeline.vue"
import { ElTimeline } from 'element-plus'
export const ThTimeline = withInstall(Timeline)
export type ThTimelineProps = typeof ElTimeline & typeof ThTimeline
export default ThTimeline   
