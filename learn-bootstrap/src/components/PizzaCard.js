import React from 'react'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

//https://bootstrapbay.com/blog/day-13-bootstrap-4-cards-tutorial-and-examples/
const PizzaCard = (props)=>{

return(
	// <Card className="h-100 shadow-sm bg-white rounded">
	// 	<Card.Img variant="top" scr={props.data.image} />
	// 	<Card.Body className = "d-flex flex-column">
	// 	<div className="d-flex mb-2 justify-content-between">
	// 		<Card.Title className="mb-0 font-weight-bold">{props.data.name}</Card.Title>
	// 	</div>
	// 	</Card.Body> 
	// </Card>
	<div className="card" style={{width: '18rem'}}>
 		<img src="http://www.azspagirls.com/files/2010/09/orange.jpg"  className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.data.name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Cras justo odio</li>
    <li className="list-group-item">Dapibus ac facilisis in</li>
    <li className="list-group-item">Vestibulum at eros</li>
  </ul>
  <div className="card-body">
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
	</div>
)
}
export default PizzaCard