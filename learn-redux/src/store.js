import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import allReducers from './reducers'

const initialState = {}
const miiddleware = [thunk]

export const store = createStore(
	allReducers,
	initialState,
	composeWithDevTools(applyMiddleware(...miiddleware))
)
