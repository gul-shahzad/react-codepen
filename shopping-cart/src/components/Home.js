import React from 'react'
import '../App.css'
import {connect } from 'react-redux'
import { addBasket } from '../actions/addAction'

class Home extends React.Component{
	render(props){
		console.log(props)
		return (
		<div className="container">
			<div className="products">
				<div className="row">
					<div className="col">
						<div className="card" style={{width:"200rem;"}} >
							<img className="card-img-top" 
								src="http://www.azspagirls.com/files/2010/09/orange.jpg"
								alt="Card image cap"
							/>
							<div className="card-block">
								<h4 className="card-title"> Orange</h4>
								<p className="card-text"> Price: $0.5</p>
								<a href="#" data-name="Orange" data-price="0.5" className = "add-to-cart btn btn-primary">Add to cart</a>
							</div>
							</div>
						</div>
						
						<div className="col">
							<div className="card" style={{width:"200rem;"}} >
								<img className="card-img-top" 
									src="http://www.azspagirls.com/files/2010/09/orange.jpg"
									alt="Card image cap"
								/>
								<div className="card-block">
									<h4 className="card-title"> Orange</h4>
									<p className="card-text"> Price: $0.5</p>
									<a href="#" data-name="Orange" data-price="0.5" className = "add-to-cart btn btn-primary">Add to cart</a>
								</div>
							</div>
						</div>					

						<div className="col">
							<div className="card" style={{width:"200rem;"}} >
								<img className="card-img-top" 
									src="http://www.azspagirls.com/files/2010/09/orange.jpg"
									alt="Card image cap"
								/>
								<div className="card-block">
									<h4 className="card-title"> Orange</h4>
									<p className="card-text"> Price: $0.5</p>
									<a href="#" data-name="Orange" data-price="0.5" className = "add-to-cart btn btn-primary">Add to cart</a>
								</div>
							</div>
						</div>					

						<div className="col">
							<div className="card" style={{width:"200rem;"}} >
								<img className="card-img-top" 
									src="http://www.azspagirls.com/files/2010/09/orange.jpg"
									alt="Card image cap"
								/>
								<div className="card-block">
									<h4 className="card-title"> Orange</h4>
									<p className="card-text"> Price: $0.5</p>
									<a href="#" data-name="Orange" data-price="0.5" className = "add-to-cart btn btn-primary">Add to cart</a>
								</div>
							</div>
						</div>					

					</div>
			</div>		
		</div>		
		)
	}
}
export default connect(null, {addBasket})(Home)