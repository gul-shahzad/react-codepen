import * as actions from './actionTypes'

export const productQuantity = (action, name)=>{
	return {
	type: action === "increase" ? actions.INCREASE_QUANTITY : actions.DECREASE_QUANTITY,
	payload: name
}
}