import React from 'react'
import './DrawerToggleButton.css'

const drawerToggleButton = (props) =>{
	console.log("props.onClickSideDrawer",props.onClickSideDrawer)
	return(

	<button className = "toggle-button" onClick={props.onClickSideDrawer}>
		<span className = "toggle-button__line"/>
		<span className = "toggle-button__line"/>
		<span className = "toggle-button__line"/>
	</button>
)}
export default drawerToggleButton