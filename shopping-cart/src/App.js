import React from 'react'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import {Prodiver, Provider} from 'react-redux'
import store from './store'
function App(){
	return(
		<Provider store = {store}>
			<div className="App">
				<Navbar/>
				<Home/>
			</div>
		</Provider>
	)
}
export default App