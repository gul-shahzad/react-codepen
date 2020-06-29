import React from 'react';
import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'
function App() {
  return (
		// ensure that you also provide height :100% to index.css which styles the overall page
     <div style = {{ height: '100%'}}>  
			<Toolbar/>
			<SideDrawer/>
			<Backdrop />
			<main style = {{marginTop: '64px'}}></main>
			<p>This is my toolbar page</p>
    </div>
  );
}

export default App;
