import React from 'react'
import { IMAGES } from '../constants/theme'
import { Link } from 'react-router-dom'

const Footer2 = () => {
	return (
		<>
			<footer className="site-footer style-1" id="footer">

				<div className="container">
					<div className="row">
						<div className="col-lg-5 aos-item" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
							<div className="footer-bg" style={{ backgroundImage: `url(${IMAGES.footerBgimg})` }}></div>
						</div>
						<div className="col-lg-7">
							<div className="footer-top">
								<div className="row">
									<div className="col-md-12 aos-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
										<div className="footer-logo logo-light">
											<Link to="/"><img src={IMAGES.footerLogoImg} alt="Footer Logo" /></Link>
										</div>
									</div>
									<div className="col-md-5 col-sm-6 aos-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
										<div className="widget widget_services">
											<h4 className="footer-title">Our Links</h4>
											<ul>
												<li><Link to="/index">Home</Link></li>
												<li><Link to="/about-us">About Us</Link></li>
												<li><Link to="/services">Services</Link></li>
												<li><Link to="/portfolio">Portfolio</Link></li>
												<li><Link to="/blog-grid">Blogs</Link></li>
												<li><Link to="/contact-us">Contact Us</Link></li>
												<li><Link to="/team">Team</Link></li>
											</ul>
										</div>
									</div>
									<div className="col-md-7 col-sm-6 aos-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
										<div className="widget widget_about">
											<h4 className="footer-title">About Us</h4>
											<p>Nullam nec rutrum eros. Maecenas maximus augue eget libero dictum, vitae tempus erat pretium. Fusce fermentum lacus ut nunc dignissim hendrerit. Quisque sit amet dignissim orci, eget laoreet eros.</p>
											<ul className="social-list style-1">
												<li><Link to="https://www.facebook.com/dexignzone/" target="_blank" ><i className="fab fa-facebook-f"></i></Link></li>
												<li><Link to="https://www.instagram.com/dexignzone/" target="_blank"><i className="fab fa-instagram"></i></Link></li>
												<li><Link to="https://twitter.com/dexignzones/" target="_blank"><i className="fab fa-twitter"></i></Link></li>
												<li><Link to="https://www.youtube.com/@dexignzone1723" target="_blank"><i className="fab fa-youtube"></i></Link></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-bottom">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-md-6 text-center text-md-start">
								<span className="copyright-text">Copyright © 2023 <Link to="https://dexignzone.com/" className="text-primary" target="_blank">DexignZone</Link> All rights reserved.</span>
							</div>
							<div className="col-md-6 text-center text-md-end">
								<ul className="footer-link d-inline-block">
									<li><Link>Privacy Policy</Link></li>
									<li><Link>Team & Condition</Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer2