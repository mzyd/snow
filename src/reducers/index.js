import { combineReducers } from 'redux'

const abc = (state = {}, action) => {
  switch(action.type) {
    case 'ABC':
      return 'abc'
    default:
      return state
  }
}

const rootReducer = combineReducers({
  abc,
})

export default rootReducer
