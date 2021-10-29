import { combineReducers } from 'redux'

import bankReducer from './bankReducer'
import tellerReducer from './tellerReducer'

const rootReducer = combineReducers({
    bank: bankReducer,
    tellers: tellerReducer
})

export default rootReducer