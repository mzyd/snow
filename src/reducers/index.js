import { combineReducers } from 'redux'
import { MENU_TOGGLE } from '../constants/'


const abc = (state = {}, action) => {
  switch(action.type) {
    case 'ABC':
      return 'abc'
    default:
      return state
  }
}

const defaultStore = {
  menuToggle: false
}

const menuToggleReducer = (state = defaultStore, action) => {
  switch (action.type) {
    case MENU_TOGGLE:
      return { ...state, menuToggle: !state.menuToggle }
    default:
      return state
  }
}


const rootReducer = combineReducers({
  abc,
  menuToggleReducer,
})

export default rootReducer
