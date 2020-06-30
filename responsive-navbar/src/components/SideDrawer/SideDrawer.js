import React from 'react'
import './SideDrawer.css'

const SideDrawer = (props) => {
 let drawerClasses = 'side-drawer'
 if (props.showSideDrawer){
	 drawerClasses = 'side-drawer open'
 }

return (
	<nav className={drawerClasses}> 
		<ul>
			<li><a href="/">Order</a></li>
			<li><a href="/">Recipe</a></li>
			<li><a href="/">About</a></li>			
		</ul>
	</nav>
)}

export default SideDrawer