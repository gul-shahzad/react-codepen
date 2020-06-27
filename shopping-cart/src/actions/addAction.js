import * as actions from './actionTypes'


export const addBasket = (productId)=>{
	return {
	type: actions.ADD_PRODUCT_BASKET,
	payload: productId
}
}