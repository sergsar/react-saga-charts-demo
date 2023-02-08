import { combineReducers } from 'redux'

import marketReducer from './market/reducer'

const rootReducer = combineReducers({
  market: marketReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
