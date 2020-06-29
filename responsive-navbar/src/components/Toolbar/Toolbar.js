import React from 'react'
import './Toolbar.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'

const Toolbar = (props) => (
	// css ClassNames are based on BEM http://getbem.com/introduction/
	<header className ="toolbar">
		<nav className = "toolbar__navigation">
			 <div>
				 <DrawerToggleButton />
			 </div>
			 <div className="toolbar__logo"><a href="/"> Foodee</a></div>
			 <div className="spliter"></div>
			 <div className="toolbar__navigation-items">
				 <ul>
					 <li><a href="/">Products</a></li>
					 <li><a href="/">Users</a></li>
				 </ul>
			 </div>
		</nav>
	</header>
	)

export default Toolbar