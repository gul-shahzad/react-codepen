import React, {Fragment} from 'react'
import {productQuantity} from '../actions/productQuantity'
import {useSelector} from 'react-redux'
import store from '../store'

const images ="http://www.azspagirls.com/files/2010/09/orange.jpg"

function Cart(){

	const basketState = useSelector(state => state)
	let productsInCart = []
	Object.keys(basketState.products).forEach( function(item){

		if (basketState.products[item].inCart) {
			productsInCart.push(basketState.products[item])
			console.log("ProductInCart", productsInCart)
		}

	})
			
	const productImages = [images, images, images, images]
	
	productsInCart = productsInCart.map( (product, index) => {
	return(
		<Fragment key={index}>
			<div className="product">
				<ion-icon name = "close-circle"></ion-icon>
				<img src={productImages[index]} />
				<span className = "sm-hide">{product.name}</span>
			</div>
			<div className="price sm-hide">SEK{product.price},00</div>
			
			<div className = "quantity">
				<ion-icon onClick={() => store.dispatch(productQuantity("decrease", product.name))} className = "decrease" name="arrow-back-circle-outline"></ion-icon>
				<span>{product.numbers}</span>
				<ion-icon onClick={() => store.dispatch(productQuantity('increase', product.name))}  className = "increase" name="arrow-forward-circle-outline"></ion-icon>
			</div>
			<div className="total">${product.numbers * product.price},00</div>
		</Fragment>
		)
	})
	
	return (
		<div className="container-products">
			<div className="product-header">
				<h5 className="product-title">PRODUCT</h5>
				<h5 className="price sm-hide">PRICE</h5>
				<h5 className="quantity">QUANTITY</h5>
				<h5 className="total">TOTAL</h5>
		 </div>
		 <div className="products">
			 {productsInCart}
		 </div>	
		 <div className="basketTotalContainer">
			 <h4 className="basketTotalTitle"> Basket Total</h4>
			 <h4 className="basketTotal"> {basketState.cartCost},00</h4>

		 </div>
		</div>
	)
}
export default Cart