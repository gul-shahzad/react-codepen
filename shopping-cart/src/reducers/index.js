import basketReducer from './basketReducer'
import { combineReducers } from 'redux'

// combine all reducers
const allReducers = combineReducers({
		basketCounter: basketReducer
})

export default allReducers