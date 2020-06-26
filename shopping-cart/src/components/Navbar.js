import React from 'react'
import '../App.css'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

function Navbar(){
	const basketCounter = useSelector( state=> state.basketCounter)
	return(
			<header>
			{/* <div className="overlay"></div> */}
			<nav>
				<h2>Foodee</h2>
				<ul>
					<li><Link to="#">Home</Link ></li>
					<li><Link to="#">About</Link ></li>
					<li className="cart"><Link to="#">
						<ion-icon name="cart-outline"></ion-icon>
						<span>{basketCounter}</span>
						</Link ></li>
				</ul>
			</nav>
		</header>
	)	
}
export default Navbar