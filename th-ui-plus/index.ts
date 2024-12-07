import type { Component, App } from "vue"
import './src/index.scss'

import ThAffix from './src/affix/affix.ts'
import ThAlert from './src/alert/alert.ts'
import ThAnchor from './src/anchor/anchor.ts'
import ThAutocomplete from './src/autocomplete/autocomplete.ts'
import ThAvatar from './src/avatar/avatar.ts'
import ThBacktop from './src/backtop/backtop.ts'
import ThBadge from './src/badge/badge.ts'
import ThBreadcrumb from './src/breadcrumb/breadcrumb.ts'
import ThButton from './src/button/button.ts'
import ThCalendar from './src/calendar/calendar.ts'
import ThCard from './src/card/card.ts'
import ThCarousel from './src/carousel/carousel.ts'
import ThCheckbox from './src/checkbox/checkbox.ts'
import ThCol from './src/col/col.ts'
import ThCollapse from './src/collapse/collapse.ts'
import ThcolorPicker from './src/colorPicker/colorPicker.ts'
import ThDatePicker from './src/datePicker/datePicker.ts'
import ThDescriptions from './src/descriptions/descriptions.ts'
import ThDialog from './src/dialog/dialog.ts'
import ThDrawer from './src/drawer/drawer.ts'
import ThDropdown from './src/dropdown/dropdown.ts'
import ThDropdownItem from './src/dropdown/dropdownItem.ts'
import ThEmpty from './src/empty/empty.ts'
import ThForm from './src/form/form.ts'
import ThFormItem from './src/form/formItem.ts'
import ThIcon from './src/icon/icon.ts'
import ThImage from './src/image/image.ts'
import ThInput from './src/input/input.ts'
import ThMention from './src/mention/mention.ts'
import ThMenu from './src/menu/menu.ts'
import ThMenuItem from './src/menu/menuItem.ts'
import ThInputNumber  from './src/number/number.ts'
import ThPageHeader from './src/pageHeader/pageHeader.ts'
import ThPagination from './src/pagination/pagination.ts'
import ThPopconfirm from './src/popconfirm/popconfirm.ts'
import ThPopover from './src/popover/popover.ts'
import ThProgress from './src/progress/progress.ts'
import ThQuery from './src/query/query.ts'
import ThRadio from './src/radio/radio.ts'
import ThRate from './src/rate/rate.ts'
import ThResult from './src/result/result.ts'
import ThRow from './src/row/row.ts'
import ThSegmented from './src/segmented/segmented.ts'
import ThSelect from './src/select/select.ts'
import ThSelectV2 from './src/select/selectv2.ts'
import ThSkeleton from './src/skeleton/skeleton.ts'
import ThSlider from './src/slider/slider.ts'
import ThStatistic from './src/statistic/statistic.ts'
import ThSteps from './src/steps/steps.ts'
import ThSwitch from './src/switch/switch.ts'
import ThTable from './src/table/table.ts'
import ThTableColumn from './src/table/tableColumn.ts'
import ThTabs from './src/tabs/tabs.ts'
import ThTag from './src/tag/tag.ts'
import ThTimeline from './src/timeline/timeline.ts'
import ThTimePicker from './src/timePicker/timePicker.ts'
import ThTimeSelect from './src/timeSelect/timeSelect.ts'
import ThTooltip from './src/tooltip/tooltip.ts'
import ThTour from './src/tour/tour.ts'
import ThTransfer from './src/transfer/transfer.ts'
import ThTree from './src/tree/tree.ts'
import ThTreeSelect from './src/treeSelect/treeSelect.ts'
import ThTreeV2 from './src/treeV2/treeV2.ts'
import ThUpload from './src/upload/upload.ts'
import ThTableV2 from './src/virtualizedTable/tableV2.ts'
import ThWatermark from './src/watermark/watermark.ts'

const components: {
  [propName: string]: Component
} = {
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
}

// 插件声明：声明所有插件
// 插件注册：在 Vue 项目的入口文件中，通过 ( app.use(插件) ) 进行注册
const installComponents: any = (app: App) => {
  // components.forEach((comp: any) => {
  //   app.component(comp.name as string, comp)
  // })
  //   app.use(ElementPlus, {
  //     locale // 语言设置
  //   // size: Cookies.get('size') || 'medium' // 设置默认尺寸
  // })
  for (const key in components) {
    app.component(key, components[key])
  }
}
// vue插件
// - install：每个插件都有一个 install 方法
// - 参数：是通过 Vue.createApp() 创建的 app 实例
const install: any = (app: any, _router?: any) => {
  // !router && installRouter(app);
  installComponents(app)
}
// @ts-ignore
if (typeof window !== "undefined" && window.Vue) {
  // @ts-ignore
  install(window.Vue)
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install
}