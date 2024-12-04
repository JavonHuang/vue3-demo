import 'element-plus/theme-chalk/base.css'
import './style/index.scss'
import type { App } from 'vue'
import ThAffix from './affix/affix.vue'
import ThAlert from './alert/alert.vue'
import ThAnchor from './anchor/anchor.vue'
import ThAutocomplete from './autocomplete/autocomplete.vue'
import ThAvatar from './avatar/avatar.vue'
import ThBacktop from './backtop/backtop.vue'
import ThBadge from './badge/badge.vue'
import ThBreadcrumb from './breadcrumb/breadcrumb.vue'
import ThButton from './button/button.vue'
import ThCalendar from './calendar/calendar.vue'
import ThCard from './card/card.vue'
import ThCarousel from './carousel/carousel.vue'
import ThCheckbox from './checkbox/checkbox.vue'
import ThCol from './col/col.vue'
import ThCollapse from './collapse/collapse.vue'
import ThcolorPicker from './colorPicker/colorPicker.vue'
import ThDatePicker from './datePicker/datePicker.vue'
import ThDescriptions from './descriptions/descriptions.vue'
import ThDialog from './dialog/dialog.vue'
import ThDrawer from './drawer/drawer.vue'
import ThDropdown from './dropdown/dropdown.vue'
import ThDropdownItem from './dropdown/dropdownItem.vue'
import ThEmpty from './empty/empty.vue'
import ThForm from './form/form.vue'
import ThFormItem from './form/formItem.vue'
import ThIcon from './icon/icon.vue'
import ThImage from './image/image.vue'
import ThInfiniteScroll from './infiniteScroll/infiniteScroll.vue'
import ThInput from './input/input.vue'
import ThMention from './mention/mention.vue'
import ThMenu from './menu/menu.vue'
import ThMenuItem from './menu/menuItem.vue'
import ThInputNumber  from './number/number.vue'
import ThPageHeader from './pageHeader/pageHeader.vue'
import ThPagination from './pagination/pagination.vue'
import ThPopconfirm from './popconfirm/popconfirm.vue'
import ThPopover from './popover/popover.vue'
import ThProgress from './progress/progress.vue'
import ThQuery from './query/query.vue'
import ThRadio from './radio/radio.vue'
import ThRate from './rate/rate.vue'
import ThResult from './result/result.vue'
import ThRow from './row/row.vue'
import ThSegmented from './segmented/segmented.vue'
import ThSelect from './select/select.vue'
import ThSelectV2 from './select/selectv2.vue'
import ThSkeleton from './skeleton/skeleton.vue'
import ThSlider from './slider/slider.vue'
import ThStatistic from './statistic/statistic.vue'
import ThSteps from './steps/steps.vue'
import ThSwitch from './switch/switch.vue'
import ThTable from './table/table.vue'
import ThTableColumn from './table/tableColumn.vue'
import ThTabs from './tabs/tabs.vue'
import ThTag from './tag/tag.vue'
import ThTimeline from './timeline/timeline.vue'
import ThTimePicker from './timePicker/timePicker.vue'
import ThTimeSelect from './timeSelect/timeSelect.vue'
import ThTooltip from './tooltip/tooltip.vue'
import ThTour from './tour/tour.vue'
import ThTransfer from './transfer/transfer.vue'
import ThTree from './tree/tree.vue'
import ThTreeSelect from './treeSelect/treeSelect.vue'
import ThTreeV2 from './treeV2/treeV2.vue'
import ThUpload from './upload/upload.vue'
import ThTableV2 from './virtualizedTable/tableV2.vue'
import ThWatermark from './watermark/watermark.vue'

import './style/index.scss'

const components = [
  ThAffix,
  ThAlert,
  ThAnchor,
  ThAutocomplete,
  ThAvatar,
  ThBacktop,
  ThBadge,
  ThBreadcrumb,
  ThButton,
  ThCalendar,
  ThCard,
  ThCarousel,
  ThCheckbox,
  ThCol,
  ThCollapse,
  ThcolorPicker,
  ThDatePicker,
  ThDescriptions,
  ThDialog,
  ThDrawer,
  ThDropdown,
  ThDropdownItem,
  ThEmpty,
  ThForm,
  ThFormItem,
  ThIcon,
  ThImage,
  ThInfiniteScroll,
  ThInput,
  ThMention,
  ThMenu,
  ThMenuItem,
  ThInputNumber,
  ThPageHeader,
  ThPagination,
  ThPopconfirm,
  ThPopover,
  ThProgress,
  ThQuery,
  ThRadio,
  ThRate,
  ThResult,
  ThRow,
  ThSegmented,
  ThSelect,
  ThSelectV2,
  ThSkeleton,
  ThSlider,
  ThStatistic,
  ThSteps,
  ThSwitch,
  ThTable,
  ThTableColumn,
  ThTabs,
  ThTag,
  ThTimeline,
  ThTimePicker,
  ThTimeSelect,
  ThTooltip,
  ThTour,
  ThTransfer,
  ThTree,
  ThTreeSelect,
  ThTreeV2,
  ThUpload,
  ThTableV2,
  ThWatermark,
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