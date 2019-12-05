import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'


const configureStore = proloadedState => {
  const store = createStore(
    rootReducer,
    proloadedState,
    composeWithDevTools(
      applyMiddleware(
        thunk,
        logger,
        promise,
      )
    )
  )

  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept('../reducers', () => {
        store.relaceReducer(rootReducer)
      })
    }
  }

  return store

}

export default configureStore
