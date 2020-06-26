import {ADD_PRODUCT_BASKET} from './types'
import {PRODUCT_ID} from './types'


export const addBasket = (productId)=>{
	return {
	type: ADD_PRODUCT_BASKET,
	payload: productId
}
}