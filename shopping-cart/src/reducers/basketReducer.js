import * as actions from '../actions/actionTypes'

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

const  basketReducer =(state = initialState, action) => {
	let productSelected = null
	switch (action.type) {
		case actions.ADD_PRODUCT_BASKET:
			productSelected = { ...state.products[action.payload]}
			productSelected.numbers +=1
			productSelected.inCart = true
			//console.log(productSelected)
			return {
				...state,
				basketCounter: state.basketCounter +1,
				cartCost: state.cartCost + productSelected.price,
				products: {
						...state.products,
							[action.payload]:productSelected
				}

			}
				
		case actions.INCREASE_QUANTITY:
			console.log("Increased is called")
			productSelected = { ...state.products[action.payload]}
			productSelected.numbers +=1
			return {
				...state,
				cartCost: state.cartCost + productSelected.price,
				products: {
					...state.products,
					[action.payload]:productSelected

				}
			}
		case actions.DECREASE_QUANTITY:
			productSelected = { ...state.products[action.payload]}
			let cartTotal = 0
			if (productSelected.numbers <= 0 ){
				productSelected.numbers = 0 
				cartTotal = state.cartCost
			}else{
				productSelected.numbers -=1
				cartTotal = state.cartCost - productSelected.price
			}
			
			return {
				...state,
				cartCost: cartTotal,
				products: {
					...state.products,
					[action.payload]:productSelected
				}
			}
			default:
			return state
	}
}

export default basketReducer;