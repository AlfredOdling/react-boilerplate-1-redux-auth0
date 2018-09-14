import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import appReducer from './reducers/appReducer'
import userReducer from './reducers/userReducer'

export default function configureStore(initialState = {}, history) {
  const middlewares = [routerMiddleware(history), thunk]
  const appliedMiddleware = [applyMiddleware(...middlewares)]

  const allReducers = combineReducers({
    appReducer,
    userReducer,
  })

  const store = createStore(
    allReducers,
    compose(
      ...appliedMiddleware,
      window.devToolsExtension ? window.devToolsExtension() : f => f // eslint-disable-line no-undef
    )
  )

  return store
}
