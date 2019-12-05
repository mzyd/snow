import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

const configureStore = (proloadedState) => {
  const store = createStore(
    rootReducer,
    proloadedState,
    applyMiddleware(
      thunk,
      promise,
    )
  )
  return store
}

export default configureStore
