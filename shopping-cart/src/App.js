import React from 'react'
import './App.css'
import Home from './components/Home'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import Products from './components/products/Products'
import {BrowserRouter, Route, Switch} from 'react-router-dom'


function App(){
	return(
			<div className="App">
				<BrowserRouter>
					<Navbar/>
					<Switch>
						<Route exact path = "/" component={Home}/>
						<Route path="/products" component= {Products}/>	
						{/* <Route path = "/cart" component={Cart}/>	 */}
					</Switch>
				</BrowserRouter>
			</div>
	)
}
export default App