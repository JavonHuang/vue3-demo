import 'element-plus/theme-chalk/base.css'
import type { App } from 'vue'
import SkyAffix from './affix/affix.vue'
import SkyAlert from './alert/alert.vue'
import SkyAnchor from './anchor/anchor.vue'
import SkyAutocomplete from './autocomplete/autocomplete.vue'
import SkyAvatar from './avatar/avatar.vue'
import SkyBacktop from './backtop/backtop.vue'
import SkyBadge from './badge/badge.vue'
import SkyBreadcrumb from './breadcrumb/breadcrumb.vue'
import SkyButton from './button/button.vue'
import SkyCalendar from './calendar/calendar.vue'
import SkyCard from './card/card.vue'
import SkyCarousel from './carousel/carousel.vue'
import SkyCheckbox from './checkbox/checkbox.vue'
import SkyCol from './col/col.vue'
import SkyCollapse from './collapse/collapse.vue'
import SkycolorPicker from './colorPicker/colorPicker.vue'
import SkyDatePicker from './datePicker/datePicker.vue'
import SkyDescriptions from './descriptions/descriptions.vue'
import SkyDialog from './dialog/dialog.vue'
import SkyDrawer from './drawer/drawer.vue'
import SkyDropdown from './dropdown/dropdown.vue'
import SkyDropdownItem from './dropdown/dropdownItem.vue'
import SkyEmpty from './empty/empty.vue'
import SkyForm from './form/form.vue'
import SkyFormItem from './form/formItem.vue'
import SkyIcon from './icon/icon.vue'
import SkyImage from './image/image.vue'
import SkyInfiniteScroll from './infiniteScroll/infiniteScroll.vue'
import SkyInput from './input/input.vue'
import SkyMention from './mention/mention.vue'
import SkyMenu from './menu/menu.vue'
import SkyMenuItem from './menu/menuItem.vue'
import SkyInputNumber  from './number/number.vue'
import SkyPageHeader from './pageHeader/pageHeader.vue'
import SkyPagination from './pagination/pagination.vue'
import SkyPopconfirm from './popconfirm/popconfirm.vue'
import SkyPopover from './popover/popover.vue'
import SkyProgress from './progress/progress.vue'
import SkyQuery from './query/query.vue'
import SkyRadio from './radio/radio.vue'
import SkyRate from './rate/rate.vue'
import SkyResult from './result/result.vue'
import SkyRow from './row/row.vue'
import SkySegmented from './segmented/segmented.vue'
import SkySelect from './select/select.vue'
import SkySelectV2 from './select/selectv2.vue'
import SkySkeleton from './skeleton/skeleton.vue'
import SkySlider from './slider/slider.vue'
import SkyStatistic from './statistic/statistic.vue'
import SkySteps from './steps/steps.vue'
import SkySwitch from './switch/switch.vue'
import SkyTable from './table/table.vue'
import SkyTableColumn from './table/tableColumn.vue'
import SkyTabs from './tabs/tabs.vue'
import SkyTag from './tag/tag.vue'
import SkyTimeline from './timeline/timeline.vue'
import SkyTimePicker from './timePicker/timePicker.vue'
import SkyTimeSelect from './timeSelect/timeSelect.vue'
import SkyTooltip from './tooltip/tooltip.vue'
import SkyTour from './tour/tour.vue'
import SkyTransfer from './transfer/transfer.vue'
import SkyTree from './tree/tree.vue'
import SkyTreeSelect from './treeSelect/treeSelect.vue'
import SkyTreeV2 from './treeV2/treeV2.vue'
import SkyUpload from './upload/upload.vue'
import SkyTableV2 from './virtualizedTable/tableV2.vue'
import SkyWatermark from './watermark/watermark.vue'

import './style/index.scss'

const components = [
  SkyAffix,
  SkyAlert,
  SkyAnchor,
  SkyAutocomplete,
  SkyAvatar,
  SkyBacktop,
  SkyBadge,
  SkyBreadcrumb,
  SkyButton,
  SkyCalendar,
  SkyCard,
  SkyCarousel,
  SkyCheckbox,
  SkyCol,
  SkyCollapse,
  SkycolorPicker,
  SkyDatePicker,
  SkyDescriptions,
  SkyDialog,
  SkyDrawer,
  SkyDropdown,
  SkyDropdownItem,
  SkyEmpty,
  SkyForm,
  SkyFormItem,
  SkyIcon,
  SkyImage,
  SkyInfiniteScroll,
  SkyInput,
  SkyMention,
  SkyMenu,
  SkyMenuItem,
  SkyInputNumber,
  SkyPageHeader,
  SkyPagination,
  SkyPopconfirm,
  SkyPopover,
  SkyProgress,
  SkyQuery,
  SkyRadio,
  SkyRate,
  SkyResult,
  SkyRow,
  SkySegmented,
  SkySelect,
  SkySelectV2,
  SkySkeleton,
  SkySlider,
  SkyStatistic,
  SkySteps,
  SkySwitch,
  SkyTable,
  SkyTableColumn,
  SkyTabs,
  SkyTag,
  SkyTimeline,
  SkyTimePicker,
  SkyTimeSelect,
  SkyTooltip,
  SkyTour,
  SkyTransfer,
  SkyTree,
  SkyTreeSelect,
  SkyTreeV2,
  SkyUpload,
  SkyTableV2,
  SkyWatermark,
]
const install = (app: App) => {
  components.forEach(component => {
    app.component(component.name!, component)
  })
}

export default install

import {QueryColumnsProps} from './query/query'
export type{
  QueryColumnsProps
}