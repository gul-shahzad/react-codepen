import React from 'react'
import './Toolbar.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'

const Toolbar = (props) => (
	// css ClassNames are based on BEM http://getbem.com/introduction/
	<header className ="toolbar">
		<nav className = "toolbar__navigation">
			<div className = "toolbar__toggle-button">
				<DrawerToggleButton onClickSideDrawer = {props.onClickSideDrawer}/>
			</div>
			 <div className="toolbar__logo"><a href="/"> Foodee</a></div>
			 <div className="spliter"></div>
			 <div className="toolbar__navigation-items">
				 <ul>
					 <li><a href="/">Order</a></li>
					 <li><a href="/">Recipes</a></li>
					 <li><a href="/">About</a></li>
				 </ul>
			 </div>
			 <div className = "toolbar__cart"> 
			 <a href="/cart"><ion-icon name="cart-outline"></ion-icon></a>
				<span className="toolbar__cart-counter">0</span>
			 </div> 
		</nav>
	</header>
	)

export default Toolbar