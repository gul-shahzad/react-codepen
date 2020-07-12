import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import  Row  from 'react-bootstrap/Row'
import  Col from 'react-bootstrap/Col'
import dishes from './data'
import PizzaCard from './components/PizzaCard'


function App() {
	console.log(dishes)
	const dishesArr = Object.entries(dishes)
	console.log(dishesArr)
  return (
		<Container>
			<Row >
				{Object.entries(dishes).map(([key, value])=>( //   ).map(item =>(
					<Col sm={4} className="col-sm" key={'${data.id}'}>
						<PizzaCard data={value} />
					</Col>
				))
				}
			</Row>
		</Container>
  );
}

export default App;
