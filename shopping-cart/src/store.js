import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
//import allReducers from './reducers'
import basketReducer from './reducers/basketReducer'

const initialState = {}
const miiddleware = [thunk]

const store = createStore(
	basketReducer,
	//allReducers,
	composeWithDevTools(applyMiddleware(...miiddleware))
)

export default store