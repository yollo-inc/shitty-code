import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import postReducer from 'reducers/postReducer'

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  postReducer,
})

export default rootReducer
