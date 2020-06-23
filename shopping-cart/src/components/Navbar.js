import React from 'react'
import '../App.css'

function Navbar(){
	return(
			<header>
			{/* <div className="overlay"></div> */}
			<nav>
				<h2>Foodee</h2>
				<ul>
					<li><a href="#">Home</a></li>
					<li><a href="#">About</a></li>
					<li className="cart"><a href="#">
						<ion-icon name="cart-outline"></ion-icon>
						<span>0</span>
						</a></li>
				</ul>
			</nav>
		</header>
	)	
}
export default Navbar