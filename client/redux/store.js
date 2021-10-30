import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { reducer as globalReducer } from './globalRedux'
import * as services from '../services'

const DEFAULT_INITIAL_STATE = {
  global: {
    loginUser: {
      id: 'loginUser',
      data: null
    },
    uiState: {
      id: 'uiState',
      data: {}
    },
    test: {
      id: 'test',
      data: 'In Progress'
    },
    parties: {
      id: 'parties',
      data: 'Main'
    },
    isToggleNew: {
      id: 'isToggleNew',
      data: false
    },
    dashboard: {
      id: 'dashboard',
      data: 'Main'
    }
  }
}

export const makeStore = initialState => {
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose
  // state name redux
  return createStore(
    combineReducers({
      global: globalReducer
    }),
    {
      ...DEFAULT_INITIAL_STATE,
      ...initialState
    },
    composeEnhancers(applyMiddleware(thunk.withExtraArgument(services)))
  )
}
