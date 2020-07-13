import React from 'react';
import logo from './logo.svg';

import './assets/css/foodee.css'


//ADD Additional css
const s3ImgBucketUrl = "https://foodee-webapp-images.s3.eu-north-1.amazonaws.com/"

function App() {
	return (
		<div>
			<div className="section section-header section-all-products section-category gradient-light-blue">
				{/* Nav bar start */}
				<navbar id="navigationbar" className="navigationbar filter-bar navigationbar-fixed-top navigationbar-transparent">
					<div className="container">
						<div className="navigationbar-header">
							<div data-turbolinks="false">
								<a href="index.html" className="navigationbar-brand">
									<div className="logo"> <img src={s3ImgBucketUrl + 'food logo.png'} width={60} height={60} /> </div>
									<p>Foodee</p>
								</a>
							</div>
						</div>
						<div className="collapse navigationbar-collapse navigationbar-ex1-collapse">
							<ul className="nav navigationbar-nav navigationbar-new-categories navigationbar-right" data-turbolinks="false">
								<li className="dropdown techonolgies dropdown-categories" data-turbolinks="false">
									<a href="#" className="dropdown-toggle" data-turbolinks="false">
										<span className="nav-fount-size">Köp med Klarna</span>
									</a>
									<div className="dropdown-menu">
										<div className="dropdown-overflow">
											<div className="dropdown-wrapper">
												<h6 className="dropdown-header technology-size"> <a href="#">Frontend</a> </h6>
												<ul className="mt-10">
													<li> <a className="dropdown-item" href="#">  Angular </a> </li>
													<li> <a className="dropdown-item" href="#">  React </a> </li>
													<li> <a className="dropdown-item" href="#">  Vuejs </a> </li>
													<li> <a className="dropdown-item" href="#">  React Native </a> </li>
												</ul>
											</div>
										</div>
									</div>
								</li>
								<li className="dropdown design dropdown-categories" data-turbolinks="false">
									<a href="#" className="dropdown-toggle" data-turbolinks="false">
										<span className="nav-fount-size">Klarna för företag</span>
									</a>
								</li>
								<li data-turbolinks="false" className="login">
									<a href="#" role="button" data-toggle="modal" rel="nofollow">
										<span className="nav-fount-size"> Login in</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</navbar>
				{/* Nav bar END */}
				{/* Top banner start */}
				<div className="info">
					<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
						<div className="noun-carousel noun-carousel--type mid-content">
							<div className="noun-carousel__wrapper">
								<div className="banner-heading">HEMLEVERANS AV
											ÄKTA MAT</div>
								<span className="txt-rotate" data-period={2000} data-rotate="[ &quot;UPPLANDS VÄSBY.&quot;, &quot;ROTEBRO.&quot;, &quot;SOLLENTUNA.&quot;, &quot;VALLENTUNA.&quot;]" />
							</div>
							<br />
							<a href="#" className="btn btn-purple btn-round btn-fill">Order Now!</a>
						</div>
					</div>
					<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
						<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
							<ol className="carousel-indicators">
								<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
								<li data-target="#carouselExampleIndicators" data-slide-to="1" />
								<li data-target="#carouselExampleIndicators" data-slide-to="2" />
							</ol>
							<div className="carousel-inner">
								<div className="carousel-item active">
									<img className="image-height-banner" src={s3ImgBucketUrl + "dish.png"} alt="First slide" />
								</div>
								<div className="carousel-item">
									<img className="image-height-banner" src={s3ImgBucketUrl + "cart.png"} alt="Second slide" />
								</div>
								<div className="carousel-item">
									<img className="image-height-banner" src={s3ImgBucketUrl + "delivery.png"} alt="Third slide" />
								</div>
							</div>
							<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
								<span className="carousel-control-prev-icon" aria-hidden="true" />
								<span className="sr-only">Previous</span>
							</a>
							<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
								<span className="carousel-control-next-icon" aria-hidden="true" />
								<span className="sr-only">Next</span>
							</a>
						</div>
					</div>
				</div>
				{/* Top banner End */}

			</div>
			{/* main container */}
			<div className="main">
				<div className="container">
					<div className="row" id="mix-container">
						{/* Find what you need  and drop bar  */}
						<div className="col-md-12">
							<div className="landing-title">
								<h2 className="title">Find what you need</h2>
								<div className="filters">
									<fieldset className="btn-prices">
										<h6>Sort Themes:</h6>
										<div className="dropdown pull-right">
											<button className="filter btn btn-default btn-round" type="button" data-toggle="dropdown"> Price: high to low <span className="caret">
											</span> </button>
											<ul className="dropdown-menu">
												<li><a href>Newest Items</a></li>
												<li><a href>Price: low to high</a></li>
												<li><a href>Price: high to low</a></li>
												<li><a href>Most Downloaded</a></li>
											</ul>
										</div>
									</fieldset>
								</div>
							</div>
						</div>
					</div>
					{/* Find what you need  and drop bar end */}
					{/* <!-- left side bar  -->  */}
					<div className="col-md-3">
						<h3 className="widget-title">Categories</h3>
						<ul className="product-categories">
							<li className="cat-item cat-item-33 cat-parent">
								<a href="#" style={{ color: "#363636ad;" }}>Foodee Menu</a> <span className="count" style={{ display: 'inline' }}></span>
								<ul className="children">
									<li className="cat-item cat-item-35"><a href="#">Vegetarian</a> <span className="count" style={{ display: 'inline' }}>3</span></li>
									<li className="cat-item cat-item-36"><a href="#">Non-Vegetarian</a> <span className="count" style={{ display: 'inline' }}>1</span></li>
									<li className="cat-item cat-item-34"><a href="#">Vegan</a> <span className="count" style={{ display: 'inline' }}>1</span></li>
								</ul>
							</li>
						</ul>
						{/* </li>
                </ul> */}
						<h3 className="widget-title">Ingredients</h3>
						<a href="#" className="tab-button tab-buttonfill"> Meat</a>
						<a href="#" className="tab-button tab-buttonfillnon">Dairy Products</a>

						<a href="#" className="tab-button tab-buttonfillnon">Seafood</a>
						<a href="#" className="tab-button tab-buttonfillnon">Sugar</a>
						<a href="#" className="tab-button tab-buttonfillnon">Nuts and Oilseeds</a>
						<h3 className="widget-title">Featured products</h3>
						<div className="col-md-12 marginbottom">
							<div className="col-md-3" style={{ padding: 0 }}>
								<a href="#">
									<img style={{ "width": "65px" }} src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/27/2018/03/5559325500_2_5_1-400x400.jpg" alt="" srcSet="" />
								</a>
							</div >
							<div className="col-md-9">
								<h6>Featured products</h6>
								<span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>24.00</span>
								<span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>14.00</span>
							</div>
						</div>
						<div className="col-md-12 marginbottom" tyle="padding: 0px">
							<div className="col-md-3" style={{ padding: 0 }}>
								<a href="#">
									<img style={{ "width": "65px" }} src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/27/2018/03/5559325500_2_5_1-400x400.jpg" alt="" srcSet="" />
								</a>
							</div>
							<div className="col-md-9">
								<h6>Featured products</h6>
								<span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>24.00</span>
								<span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>14.00</span>
							</div>
						</div>
						<div className="col-md-12 marginbottom" tyle="padding: 0px">
							<div className="col-md-3" style={{ padding: 0 }}>
								<a href="#">
									<img style={{ "width": "65px" }} src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/27/2018/03/5559325500_2_5_1-400x400.jpg" alt="" srcSet="" />
								</a>
							</div>
							<div className="col-md-9">
								<h6>Featured products</h6>
								<span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>24.00</span>
								<span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>14.00</span>
							</div>
						</div>
					</div>
					{/* <!-- left side bar end  -->  */}
					{/* right side bar prodacts  */}
					<div className="col-md-9">
						<div>
							<div className="row">
								<div className="col-md-11">
									<h3>
										Our Selected Dishes
              </h3>
								</div>
								<div className="col-md-1">
									{/* Controls */}
									<div className="controls pull-right hidden-xs" style={{ marginTop: '10px' }}>
										<span><a className="left fa fa-chevron-left " href="#carousel-example-generic" data-slide="prev" /></span>
										<span> <a className="right fa fa-chevron-right " href="#carousel-example-generic" data-slide="next" /></span>
									</div>
								</div>
							</div>
							{/* carousel prodact */}
							<div id="carousel-example-generic" className="carousel slide hidden-xs" data-ride="carousel">
								<div className="carousel-inner">
									<div className="item active">
										<div className="row">
											{/* loop prodact */}
											<div className="col-sm-4">
												<div className="col-item">
													<div className="card">
														<div className="thumbnail">
															<img src={s3ImgBucketUrl + 'food-1.jpeg'} data-retina alt="No Image" /> <a href="#" className="thumb-cover" />
															<div className="details">
																<div className="numbers"> <b className="downloads"><i className="fa fa-arrow-circle-o-down" /> 10</b> <b className="comments-icon"> <i className="fa fa-star" /> 5.00/5</b> </div>
																<div className="clearfix" />
															</div>
															<b className="actions"> <a href className="btn btn-neutral btn-round btn-fill" rel="tooltip" title="More Details"> <i className="fa fa-align-left" /> </a>
																<a href className="btn btn-neutral btn-fill btn-round" target="_blank" title="Live Preview" rel="tooltip">
																	<i className="fa fa-laptop" /> </a>
																<a className="btn btn-info btn-round btn-fill" rel="tooltip" title="View Pricing" data-source="product-card" href> <i className="fa fa-shopping-cart" /> </a> </b>
														</div>
														<div className="card-info">
															<a href>
																<h3>
																	Name of the product
                              <div className="time pull-right premium-product "> <span>99</span> SEK </div>
																</h3>
																<p>Premium Laravel Cms adfasa fas adsf af</p>
															</a>
														</div>
													</div>
												</div>
											</div>
											{/* loop prodact end */}
											<div className="col-sm-4">
												<div className="col-item">
													<div className="card">
														<div className="thumbnail">
															<img src={s3ImgBucketUrl + 'food-2.jpg'} data-retina alt="No Image" /> <a href="#" className="thumb-cover" />
															<div className="details">
																<div className="numbers"> <b className="downloads"><i className="fa fa-arrow-circle-o-down" /> 10</b> <b className="comments-icon"> <i className="fa fa-star" /> 5.00/5</b> </div>
																<div className="clearfix" />
															</div>
															<b className="actions"> <a href className="btn btn-neutral btn-round btn-fill" rel="tooltip" title="More Details"> <i className="fa fa-align-left" /> </a>
																<a href className="btn btn-neutral btn-fill btn-round" target="_blank" title="Live Preview" rel="tooltip">
																	<i className="fa fa-laptop" /> </a>
																<a className="btn btn-info btn-round btn-fill" rel="tooltip" title="View Pricing" data-source="product-card" href> <i className="fa fa-shopping-cart" /> </a> </b>
														</div>
														<div className="card-info">
															<a href>
																<h3>
																	Material Blog PRO Laravel
                              <div className="time pull-right premium-product "> <span>$</span>199 </div>
																</h3>
																<p>Premium Laravel Cms </p>
															</a>
														</div>
													</div>
												</div>
											</div>
											<div className="col-sm-4">
												<div className="col-item">
													<div className="card">
														<div className="thumbnail">
															<img src={s3ImgBucketUrl + 'food-3.jpg'} data-retina alt="No Image" /> <a href="#" className="thumb-cover" />
															<div className="details">
																<div className="numbers"> <b className="downloads"><i className="fa fa-arrow-circle-o-down" /> 10</b> <b className="comments-icon"> <i className="fa fa-star" /> 5.00/5</b> </div>
																<div className="clearfix" />
															</div>
															<b className="actions"> <a href className="btn btn-neutral btn-round btn-fill" rel="tooltip" title="More Details"> <i className="fa fa-align-left" /> </a>
																<a href className="btn btn-neutral btn-fill btn-round" target="_blank" title="Live Preview" rel="tooltip">
																	<i className="fa fa-laptop" /> </a>
																<a className="btn btn-info btn-round btn-fill" rel="tooltip" title="View Pricing" data-source="product-card" href> <i className="fa fa-shopping-cart" /> </a> </b>
														</div>
														<div className="card-info">
															<a href>
																<h3>
																	Material Blog PRO Laravel
                              <div className="time pull-right premium-product "> <span>$</span>199 </div>
																</h3>
																<p>Premium Laravel Cms </p>
															</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="item">
										<div className="row">
											<div className="col-sm-4">
												<div className="col-item">
													<div className="card">
														<div className="thumbnail">
															<img src={s3ImgBucketUrl + 'food-4.jpg'} data-retina alt="No Image" /> <a href="#" className="thumb-cover" />
															<div className="details">
																<div className="numbers"> <b className="downloads"><i className="fa fa-arrow-circle-o-down" /> 10</b> <b className="comments-icon"> <i className="fa fa-star" /> 5.00/5</b> </div>
																<div className="clearfix" />
															</div>
															<b className="actions"> <a href className="btn btn-neutral btn-round btn-fill" rel="tooltip" title="More Details"> <i className="fa fa-align-left" /> </a>
																<a href className="btn btn-neutral btn-fill btn-round" target="_blank" title="Live Preview" rel="tooltip">
																	<i className="fa fa-laptop" /> </a>
																<a className="btn btn-info btn-round btn-fill" rel="tooltip" title="View Pricing" data-source="product-card" href> <i className="fa fa-shopping-cart" /> </a> </b>
														</div>
														<div className="card-info">
															<a href>
																<h3>
																	Material Blog PRO Laravel
                              <div className="time pull-right premium-product "> <span>$</span>199 </div>
																</h3>
																<p>Premium Laravel Cms </p>
															</a>
														</div>
													</div>
												</div>
											</div>
											<div className="col-sm-4">
												<div className="col-item">
													<div className="card">
														<div className="thumbnail">
															<img src={s3ImgBucketUrl + 'food-5.jpg'} data-retina alt="No Image" />
															<a href="#" className="thumb-cover" />
															<div className="details">
																<div className="numbers"> <b className="downloads">
																	<i className="fa fa-arrow-circle-o-down" />
                                10</b> <b className="comments-icon"> <i className="fa fa-star" /> 5.00/5</b> </div>
																<div className="clearfix" />
															</div>
															<b className="actions"> <a href className="btn btn-neutral btn-round btn-fill" rel="tooltip" title="More Details"> <i className="fa fa-align-left" /> </a>
																<a href className="btn btn-neutral btn-fill btn-round" target="_blank" title="Live Preview" rel="tooltip">
																	<i className="fa fa-laptop" /> </a>
																<a className="btn btn-info btn-round btn-fill" rel="tooltip" title="View Pricing" data-source="product-card" href> <i className="fa fa-shopping-cart" /> </a> </b>
														</div>
														<div className="card-info">
															<a href>
																<h3>
																	Material Blog PRO Laravel
                              <div className="time pull-right premium-product "> <span>$</span>199 </div>
																</h3>
																<p>Premium Laravel Cms </p>
															</a>
														</div>
													</div>
												</div>
											</div>
											<div className="col-sm-4">
												<div className="col-item">
													<div className="card">
														<div className="thumbnail">
															<img src={s3ImgBucketUrl + 'food-6.jpg'} data-retina alt="No Image" /> <a href="#" className="thumb-cover" />
															<div className="details">
																<div className="numbers"> <b className="downloads"><i className="fa fa-arrow-circle-o-down" /> 10</b> <b className="comments-icon"> <i className="fa fa-star" /> 5.00/5</b> </div>
																<div className="clearfix" />
															</div>
															<b className="actions"> <a href className="btn btn-neutral btn-round btn-fill" rel="tooltip" title="More Details"> <i className="fa fa-align-left" /> </a>
																<a href className="btn btn-neutral btn-fill btn-round" target="_blank" title="Live Preview" rel="tooltip">
																	<i className="fa fa-laptop" /> </a>
																<a className="btn btn-info btn-round btn-fill" rel="tooltip" title="View Pricing" data-source="product-card" href> <i className="fa fa-shopping-cart" /> </a> </b>
														</div>
														<div className="card-info">
															<a href>
																<h3>
																	Material Blog PRO Laravel
                              <div className="time pull-right premium-product "> <span>99</span>SEK </div>
																</h3>
																<p>Premium Laravel Cms </p>
															</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* carousel prodact end */}
						</div>
						<div>
							<div className="row">
								<div className="col-md-10">
									<h3>
										A la Carte
              </h3>
								</div>
								<div className="col-md-2">
									{/* Controls */}
									<div className="controls pull-right hidden-xs" style={{ marginTop: '10px' }}>
										<span><a className="left fa fa-chevron-left " href="#carousel-example-generic1" data-slide="prev" /></span>
										<span> <a className="right fa fa-chevron-right" href="#carousel-example-generic1" data-slide="next" /></span>
									</div>
								</div>
							</div>
							<div id="carousel-example-generic1" className="carousel slide hidden-xs" data-ride="carousel">
								{/* Wrapper for slides */}
								<div className="carousel-inner">
									<div className="item active">
										<div className="row">
											<div className="col-sm-4">
												<div className="col-item">
													<div className="card">
														<div className="thumbnail">
															<img src={s3ImgBucketUrl + 'food-7.jpg'} data-retina alt="No Image" /> <a href="#" className="thumb-cover" />
															<div className="details">
																<div className="numbers"> <b className="downloads"><i className="fa fa-arrow-circle-o-down" /> 10</b> <b className="comments-icon"> <i className="fa fa-star" /> 5.00/5</b> </div>
																<div className="clearfix" />
															</div>
															<b className="actions"> <a href className="btn btn-neutral btn-round btn-fill" rel="tooltip" title="More Details"> <i className="fa fa-align-left" /> </a>
																<a href className="btn btn-neutral btn-fill btn-round" target="_blank" title="Live Preview" rel="tooltip">
																	<i className="fa fa-laptop" /> </a>
																<a className="btn btn-info btn-round btn-fill" rel="tooltip" title="View Pricing" data-source="product-card" href> <i className="fa fa-shopping-cart" /> </a> </b>
														</div>
														<div className="card-info">
															<a href>
																<h3>
																	Material Blog PRO Laravel
                              <div className="time pull-right premium-product "> <span>$</span>199 </div>
																</h3>
																<p>Premium Laravel Cms </p>
															</a>
														</div>
													</div>
												</div>
											</div>
											<div className="col-sm-4">
												<div className="col-item">
													<div className="card">
														<div className="thumbnail">
															<img src={s3ImgBucketUrl + 'food-8.jpg'} data-retina alt="No Image" />
															<a href="#" className="thumb-cover" />
															<div className="details">
																<div className="numbers"> <b className="downloads"><i className="fa fa-arrow-circle-o-down" /> 10</b> <b className="comments-icon"> <i className="fa fa-star" /> 5.00/5</b> </div>
																<div className="clearfix" />
															</div>
															<b className="actions"> <a href className="btn btn-neutral btn-round btn-fill" rel="tooltip" title="More Details"> <i className="fa fa-align-left" /> </a>
																<a href className="btn btn-neutral btn-fill btn-round" target="_blank" title="Live Preview" rel="tooltip">
																	<i className="fa fa-laptop" /> </a>
																<a className="btn btn-info btn-round btn-fill" rel="tooltip" title="View Pricing" data-source="product-card" href> <i className="fa fa-shopping-cart" /> </a> </b>
														</div>
														<div className="card-info">
															<a href>
																<h3>
																	Material Blog PRO Laravel
                              <div className="time pull-right premium-product "> <span>$</span>199 </div>
																</h3>
																<p>Premium Laravel Cms </p>
															</a>
														</div>
													</div>
												</div>
											</div>
											<div className="col-sm-4">
												<div className="col-item">
													<div className="card">
														<div className="thumbnail">
															<img src={s3ImgBucketUrl + 'food-9.jpg'} data-retina alt="No Image" /> <a href="#" className="thumb-cover" />
															<div className="details">
																<div className="numbers"> <b className="downloads"><i className="fa fa-arrow-circle-o-down" /> 10</b> <b className="comments-icon"> <i className="fa fa-star" /> 5.00/5</b> </div>
																<div className="clearfix" />
															</div>
															<b className="actions"> <a href className="btn btn-neutral btn-round btn-fill" rel="tooltip" title="More Details"> <i className="fa fa-align-left" /> </a>
																<a href className="btn btn-neutral btn-fill btn-round" target="_blank" title="Live Preview" rel="tooltip">
																	<i className="fa fa-laptop" /> </a>
																<a className="btn btn-info btn-round btn-fill" rel="tooltip" title="View Pricing" data-source="product-card" href> <i className="fa fa-shopping-cart" /> </a> </b>
														</div>
														<div className="card-info">
															<a href>
																<h3>
																	Material Blog PRO Laravel
                              <div className="time pull-right premium-product "> <span>$</span>199 </div>
																</h3>
																<p>Premium Laravel Cms </p>
															</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="item">
										<div className="row">
											<div className="col-sm-4">
												<div className="col-item">
													<div className="card">
														<div className="thumbnail">
															<img src={s3ImgBucketUrl + 'food-10.jpg'} data-retina alt="No Image" /> <a href="#" className="thumb-cover" />
															<div className="details">
																<div className="numbers"> <b className="downloads"><i className="fa fa-arrow-circle-o-down" /> 10</b> <b className="comments-icon"> <i className="fa fa-star" /> 5.00/5</b> </div>
																<div className="clearfix" />
															</div>
															<b className="actions"> <a href className="btn btn-neutral btn-round btn-fill" rel="tooltip" title="More Details"> <i className="fa fa-align-left" /> </a>
																<a href className="btn btn-neutral btn-fill btn-round" target="_blank" title="Live Preview" rel="tooltip">
																	<i className="fa fa-laptop" /> </a>
																<a className="btn btn-info btn-round btn-fill" rel="tooltip" title="View Pricing" data-source="product-card" href> <i className="fa fa-shopping-cart" /> </a> </b>
														</div>
														<div className="card-info">
															<a href>
																<h3>
																	Material Blog PRO Laravel
                              <div className="time pull-right premium-product "> <span>$</span>199 </div>
																</h3>
																<p>Premium Laravel Cms </p>
															</a>
														</div>
													</div>
												</div>
											</div>
											<div className="col-sm-4">
												<div className="col-item">
													<div className="card">
														<div className="thumbnail">
															<img src={s3ImgBucketUrl + 'food-11.jpg'} data-retina alt="No Image" /> <a href="#" className="thumb-cover" />
															<div className="details">
																<div className="numbers"> <b className="downloads"><i className="fa fa-arrow-circle-o-down" /> 10</b> <b className="comments-icon"> <i className="fa fa-star" /> 5.00/5</b> </div>
																<div className="clearfix" />
															</div>
															<b className="actions"> <a href className="btn btn-neutral btn-round btn-fill" rel="tooltip" title="More Details"> <i className="fa fa-align-left" /> </a>
																<a href className="btn btn-neutral btn-fill btn-round" target="_blank" title="Live Preview" rel="tooltip">
																	<i className="fa fa-laptop" /> </a>
																<a className="btn btn-info btn-round btn-fill" rel="tooltip" title="View Pricing" data-source="product-card" href> <i className="fa fa-shopping-cart" /> </a> </b>
														</div>
														<div className="card-info">
															<a href>
																<h3>
																	Material Blog PRO Laravel
                              <div className="time pull-right premium-product "> <span>$</span>199 </div>
																</h3>
																<p>Premium Laravel Cms </p>
															</a>
														</div>
													</div>
												</div>
											</div>
											<div className="col-sm-4">
												<div className="col-item">
													<div className="card">
														<div className="thumbnail">
															<img src={s3ImgBucketUrl + 'food-12.jpg'} data-retina alt="No Image" /> <a href="#" className="thumb-cover" />
															<div className="details">
																<div className="numbers"> <b className="downloads"><i className="fa fa-arrow-circle-o-down" /> 10</b> <b className="comments-"> <i className="fa fa-star" /> 5.00/5</b> </div>
																<div className="clearfix" />
															</div>
															<b className="actions"> <a href className="btn btn-neutral btn-round btn-fill" rel="tooltip" title="More Details"> <i className="fa fa-align-left" /> </a>
																<a href className="btn btn-neutral btn-fill btn-round" target="_blank" title="Live Preview" rel="tooltip">
																	<i className="fa fa-laptop" /> </a>
																<a className="btn btn-info btn-round btn-fill" rel="tooltip" title="View Pricing" data-source="product-card" href> <i className="fa fa-shopping-cart" /> </a> </b>
														</div>
														<div className="card-info">
															<a href>
																<h3>
																	Material Blog PRO Laravel
                              <div className="time pull-right premium-product "> <span>$</span>199 </div>
																</h3>
																<p>Premium Laravel Cms </p>
															</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* right side bar prodacts End  */}
					{/* Our Recipes */}
					<div className="col-md-12">
						<div className="row">
							<div className="col-md-12">
								<center><h3>Our Recipes</h3></center>
							</div>
							{/* loop Recipes */}
							<div className="col-md-4">
								<div className="card card-product" data-count={2}>
									<div data-header-animation="true" className="card-header card-header-image"><a href="#pablo">
										<img src={s3ImgBucketUrl + 'food-13.jpg'} className="prodact-img" />
									</a></div>
									<div className="card-body">
										<h4 className="card-title"><a href="#pablo">Beautiful Castle</a></h4>
										<div className="card-description"> The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan. </div>
									</div>
								</div>
							</div>
							{/* loop Recipes end */}
							<div className="col-md-4">
								<div className="card card-product" data-count={2}>
									<div data-header-animation="true" className="card-header card-header-image"><a href="#pablo">
										<img src={s3ImgBucketUrl + 'food-14.jpg'} className="prodact-img" />
									</a></div>
									<div className="card-body">
										<h4 className="card-title"><a href="#pablo">Beautiful Castle</a></h4>
										<div className="card-description"> The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan. </div>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<div className="card card-product" data-count={2}>
									<div data-header-animation="true" className="card-header card-header-image"><a href="#pablo">
										<img src={s3ImgBucketUrl + 'food-15.jpg'} className="prodact-img" />
									</a></div>
									<div className="card-body">
										<h4 className="card-title"><a href="#pablo">Beautiful Castle</a></h4>
										<div className="card-description"> The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan. </div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Our Recipes end */}
				</div>
			</div>
			{/* main container end */}

			{/* footer */}
			<div className="footer">
				<div className="overlayer">
					<div className="container">
						<div className="row support">
							<div className="col-sm-2 col-xs-6">
								<h4 className="text-white">Company</h4>
								<ul className="list-unstyled" data-turbolinks="false">
									<li><a href>About Us</a></li>
									<li><a href>Freebies</a></li>
									<li><a href>Premium</a></li>
									<li> <a href>Blog</a></li>
									<li> <a href>Affiliate Program</a></li>
									<li> <a href>Get coupon</a></li>
								</ul>
							</div>
							<div className="col-sm-2 col-xs-6">
								<h4 className="text-white">Help and Support</h4>
								<ul className="list-unstyled" data-turbolinks="false">
									<li><a href>Knowledge Center</a></li>
									<li><a href>Contact Us</a></li>
									<li><a href>Premium Support</a></li>
									<li><a href>Sponsorships</a></li>
									<li><a target="blank" href>Custom Development</a></li>
								</ul>
							</div>
							<div className="col-sm-2 col-xs-6">
								<h4 className="text-white">Legal</h4>
								<ul className="list-unstyled" data-turbolinks="false">
									<li> <a href>Terms &amp; Conditions</a></li>
									<li> <a href>Privacy Policy</a></li>
									<li><a href="#">EULA</a></li>
								</ul>
							</div>
							<div className="col-sm-2 col-xs-6">
								<h4 className="text-white">Resources</h4>
								<ul className="list-unstyled" data-turbolinks="false">
									<li> <a href>Bootstrap Cheat Sheet</a></li>
									<li><a href>Third-Party Tools</a></li>
									<li><a target="_blank" href>Illustrations</a></li>
									<li><a target="_blank" href>Bits</a></li>
									<li><a target="_blank" href>Bluehost</a></li>
									<li><a target="_blank" href="h">Digital Ocean</a></li>
									<li><a href="#">Made with Creative Tim</a></li>
								</ul>
							</div>
							<div className="col-sm-4 col-xs-12 text-center twitter-news">
								<h4 className="text-white mb-0">Latest News</h4>
							</div>
						</div>
						<div className="row pt-30">
							<div className="col-md-12">
								<div className="social-area text-center" itemScope itemType="h">
									<a href className="footer-brand">
										<div>
											<img className="logo-footer" src={s3ImgBucketUrl + 'food logo-white.png'} />
										</div>
										<span itemProp="name">Foodee</span>
									</a>
									<br />
									<a itemProp="sameAs" href className="btn btn-default btn-social btn-round" rel="publisher" target="_blank">
										<i className="fa fa-github" /></a>
									<a href className="btn btn-default btn-social btn-round" target="_blank">
										<i className="fa fa-dribbble" /></a>
									<a href className="btn btn-default btn-social btn-round" target="_blank">
										<i className="fa fa-facebook-square" /></a>
									<a href className="btn btn-default btn-social btn-round" target="_blank">
										<i className="fa fa-twitter" /></a>
									<a href className="btn btn-default btn-social btn-round" target="_blank">
										<i className="fa fa-instagram" /></a>
									<a href className="btn btn-default btn-social btn-round" target="_blank">
										<i className="fa fa-youtube" /></a>
									<a href className="btn btn-default btn-social btn-round" target="_blank"><i className="fa fa-pinterest" /></a>
								</div>
							</div>
							<div className="col-md-12">
								<div className="credits"> © 2020 Foodee, all rights reserved. </div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* popup login */}
			<div className="modal fade login" id="loginModal">
				<div className="modal-dialog login animated">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
							<h4 className="modal-title">Login with</h4>
						</div>
						<div className="modal-body">
							<div className="box">
								<div className="content">
									<div className="social" data-turbolinks="false">
										<a id="github_login" className="circle github" rel="nofollow" href>
											<i className="icon-github" /> </a>
										<a id="google_login" className="circle google" rel="nofollow" href>
											<i className="fa fa-google" /> </a>
										<a id="facebook_login" className="circle facebook" rel="nofollow" href>
											<i className="icon-facebook-alt" /> </a>
									</div>
									<div className="division">
										<div className="line l" />
										<span>or</span>
										<div className="line r" />
									</div>
									<div className="error inside-alert" />
									<div className="form loginBox">
										<form html="{:multipart=>true}" action acceptCharset="UTF-8" method="post"><input name="utf8" type="hidden" defaultValue="✓" />
											<input type="hidden" name="authenticity_token" defaultValue />
											<input name="email" className="form-control" placeholder="Email" />
											<input type="password" name="password" className="form-control" placeholder="Password" />
											<input type="hidden" name="destination" defaultValue="dashboard" />
											<input type="hidden" name="url" defaultValue />
											<input type="submit" name="commit" defaultValue="login" className="btn btn-default btn-login" data-disable-with="Login" /> </form>
									</div>
								</div>
							</div>
							<div className="box">
								<div className="content registerBox" style={{ display: 'none' }}>
									<div className="form">
										<form html="{:multipart=>true}" action acceptCharset="UTF-8" data-remote="true" method="post">
											<input name="utf8" type="hidden" defaultValue="✓" />
											<input name="email" className="form-control" placeholder="Email" />
											<input type="password" name="password" className="form-control" placeholder="Password" />
											<input type="password" name="password_confirmation" className="form-control" placeholder="Repeat Password" />
											<input type="hidden" name="destination" defaultValue="dashboard" />
											<input type="hidden" name="url" defaultValue />
											<input type="submit" name="commit" defaultValue="Create account" className="btn btn-default btn-register" data-disable-with="Create account" />
											<label className="checkbox">
												<input type="checkbox" defaultValue={1} data-toggle="checkbox" name="subscribed" className="ct-info checkbox-subscribe" /> Subscribe me to the Newsletter </label> </form>
									</div>
								</div>
							</div>
						</div>
						<div className="modal-footer">
							<div className="forgot login-footer">
								<span>Looking to <a href="javascript: showRegisterForm();" rel="nofollow>create an account"> ?</a></span><a href="javascript: showRegisterForm();" rel="nofollow>create an account" ><br />
							<span /></a><a rel="nofollow" href>Forgot password</a> ? </div>
					<div className="forgot register-footer" style={{ display: 'none' }}>
						<span>Already have an account?</span> <a href="javascript: showLoginForm();">Login</a> </div>
				</div>
			</div>
		</div>
        </div >
		{/* fooder code */ }


		</div >
	);
}

export default App;
