import { withInstall } from "../withInstall"
import Autocomplete from "./autocomplete.vue"
import { ElAutocomplete } from 'element-plus'
export const ThAutocomplete = withInstall(Autocomplete)
export type ThAutocompleteProps =  typeof ElAutocomplete & typeof ThAutocomplete
export default ThAutocomplete
