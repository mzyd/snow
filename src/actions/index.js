import KFetch from '../network/KFetch.js'
import {
  ABC,
  MENU_TOGGLE,
} from '../constants/index.js'

export const abc = (params) => {
  return {
    type: ABC,
    payload: KFetch.GET('/abc')
    /* payload: KFetch.GET('/abc', params) */
  }
}

export const menuToggleAction = () => ({
  type: MENU_TOGGLE
})
