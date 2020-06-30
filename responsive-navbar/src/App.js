import React from 'react';
import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'

class App  extends React.Component{
	constructor(){
		super()
		this.state = {SideDrawerVisible : false}
		this.onClickSideDrawer = this.onClickSideDrawer.bind(this)
	}

	// show sidedrawer
	onClickSideDrawer = () => {
		this.setState( (prevState)=>{
			return { SideDrawerVisible : !prevState.SideDrawerVisible }
		} )
	}
	// hide sidedrawer
	onClickBackdrop = () =>{
		this.setState( () => {
			return {SideDrawerVisible : false}
		})
	}

	render() {
		let backDropComponent
		console.log(this.state.SideDrawerVisible)
		if (this.state.SideDrawerVisible){
			backDropComponent = <Backdrop onClickBackdrop={this.onClickBackdrop}/>
		}
		return (
			// ensure that you also provide height :100% to index.css which styles the overall page
			<div style = {{ height: '100%'}}>  
				<Toolbar onClickSideDrawer = {this.onClickSideDrawer}/>
				<SideDrawer showSideDrawer = {this.state.SideDrawerVisible}/>
				{backDropComponent}
				<main style = {{marginTop: '64px'}}></main>
				<p>This is my toolbar page</p>

			</div>
		)
	}
}

export default App;
