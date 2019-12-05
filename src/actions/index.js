import KFetch from '../network/KFetch.js'
import {
  ABC,
} from '../constants/index.js'

export const abc = (params) => {
  return {
    type: ABC,
    payload: KFetch.GET('/abc')
    /* payload: KFetch.GET('/abc', params) */
  }
}
