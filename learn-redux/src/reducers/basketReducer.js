import { ADD_PRODUCT_BASKET, REMOVE_PRODUCT_BASKET } from '../actions/types'

const basketReducer = (state = 0, action) => {
	switch(action.type){
		case ADD_PRODUCT_BASKET: 
			return state + action.payload
		case REMOVE_PRODUCT_BASKET:
			return state - action.payload
		default:
			return state
	}

}

export default basketReducer;