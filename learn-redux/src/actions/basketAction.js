import {ADD_PRODUCT_BASKET, REMOVE_PRODUCT_BASKET} from './types'

export const addToBasket = (nr) => {
	return {
		type: ADD_PRODUCT_BASKET,
		payload: nr
	}
}

export const removeFromBasket = (nr) =>{
	return {
		type : REMOVE_PRODUCT_BASKET,
		payload : nr
	}
}
