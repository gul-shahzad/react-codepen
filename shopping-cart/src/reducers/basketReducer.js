import {ADD_PRODUCT_BASKET} from '../actions/types'

const initialState = {
	basketCounter :  0,
	cartCost : 0,
	products : { 
			Orange1 : {
				name : "Orange1",
				price : 1,
				numbers : 0,
				inCart : false
			},
			Orange2 : {
				name : "Orange2",
				price : 2,
				numbers : 0,
				inCart : false
			},
			Orange3 : {
				name : "Orange3",
				price : 3,
				numbers : 0,
				inCart : false
			},
			Orange4 : {
				name : "Orange4",
				price : 4,
				numbers : 0,
				inCart : false
			}								
	}
}

const  basketReducer =(state = 0, action) => {
	switch (action.type) {
		case ADD_PRODUCT_BASKET:
			let addQuantity = { ...initialState.products[action.payload] } 
			addQuantity.numbers +=1
			addQuantity.inCart = !addQuantity.inCart
			console.log(state)
			return state = state +1
		default:
			return state
	}
}

export default basketReducer;