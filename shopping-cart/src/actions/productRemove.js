import * as actions from './actionTypes'

export const productRemove = (action, name)=>{
	return {
	type: actions.productRemove,
	payload: name
}
}