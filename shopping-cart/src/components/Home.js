import React from 'react'
import '../App.css'
import { addBasket } from '../actions/addAction'
 import { useSelector, useDispatch} from 'react-redux'
import store from '../store'

function Home(){
	const counter = useSelector(state => state.basketCounter)
	//const dispatch = useDispatch()
	
	//const ancOnClick = (e) =>{
		//dispatch(addBasket())
		//console.log('The link was clicked.'); 
		//e.preventDefault()
	//}

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
								<h4 className="card-title"> Orange1</h4>
								<p className="card-text"> Price: $1</p>
								<button onClick={() => store.dispatch(addBasket("Orange1"))}>Add to cart</button>
								{/* <a href='javascript:void(0)' onClik = {ancOnClick} >Add to cart</a> */}
								{/* <Link onClik = {ancOnClick}  data-name="Orange" data-price="0.5" className = "add-to-cart btn btn-primary">Add to cart</Link> */}
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
									<h4 className="card-title"> Orange2</h4>
									<p className="card-text"> Price: $2</p>
								  <button onClick={() => store.dispatch(addBasket("Orange2"))}>Add to cart</button>
									{/* <a href="#" data-name="Orange" data-price="0.5" className = "add-to-cart btn btn-primary">Add to cart</a> */}
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
									<h4 className="card-title"> Orange3</h4>
									<p className="card-text"> Price: $3</p>
								<button onClick={() => store.dispatch(addBasket("Orange3"))}>Add to cart</button>
									{/* <a href="#" data-name="Orange" data-price="0.5" className = "add-to-cart btn btn-primary">Add to cart</a> */}
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
									<h4 className="card-title"> Orange4</h4>
									<p className="card-text"> Price: $4</p>
								  <button onClick={() => store.dispatch(addBasket("Orange4"))}>Add to cart</button>
									{/* <a href="#" data-name="Orange" data-price="0.5" className = "add-to-cart btn btn-primary">Add to cart</a> */}
								</div>
							</div>
						</div>					

					</div>
			</div>		
		</div>		
		)
}
export default Home