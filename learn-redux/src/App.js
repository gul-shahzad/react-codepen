import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import  {addToBasket, removeFromBasket}  from './actions/basketAction'


function App() {
	const counter = useSelector(state => state.basketReducer)
	const dispatch = useDispatch()
	return (
		<div className = "App">
			<h4>Basket</h4>
			<h2>Counter {counter}</h2>
			<button onClick={() => dispatch(addToBasket(2))}>+</button>
			<button onClick={() => dispatch(removeFromBasket(2))}>-</button>
		</div>
		);
}

export default App;
