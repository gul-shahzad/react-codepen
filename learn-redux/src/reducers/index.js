import basketReducer from './basketReducer'

import { combineReducers } from 'redux'

// combine all reducers
const allReducers = combineReducers({
		basketReducer: basketReducer
})

export default allReducers