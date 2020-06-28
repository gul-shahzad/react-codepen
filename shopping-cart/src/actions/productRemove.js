import * as actions from './actionTypes'

export const productRemove = (action, name)=>{
	return {
	type: actions.PRODUCT_REMOVE,
	payload: name
}
}