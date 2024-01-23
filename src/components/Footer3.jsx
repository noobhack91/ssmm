import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Footer3 = () => {
	return (
		<>
			<footer className="site-footer style-2" id="footer">
				<div className="footer-top">
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-12 aos-item"  >
								<motion.div className="widget widget_about"
									initial={{ opacity: 0, y: '100%' }}
									whileInView={{ opacity: 1, y: "0" }}
									transition={{ duration: 0.5 }}
								>
									<h4 className="footer-title">CONTACT</h4>
									<div className="widget_getintuch">
										<ul>
											<li>
												<i className="las la-map-marker-alt"></i>
												1247/Plot No. 39, 15th Phase,
												Colony, Kkatpally, Hyderabad
											</li>
											<li>
												<i className="las la-phone-volume"></i>
												+91 987-654-3210
												+91 123-456-7890
											</li>
											<li>
												<i className="las la-map-marker-alt"></i>
												info@example.com
												info@example.com
											</li>
										</ul>
									</div>
								</motion.div>
							</div>
							<motion.div className="offset-lg-1 col-lg-2 col-sm-4 col-6 aos-item"  
								initial={{ opacity: 0, y: '100%' }}
								whileInView={{ opacity: 1, y: "0" }}
								transition={{ duration: 0.5, delay: 0.4 }}
							>
								<div className="widget widget_services">
									<h4 className="footer-title">OUR LINKS</h4>
									<ul>
										<li><Link to="/index">Home</Link></li>
										<li><Link to="/about-us">About Us</Link></li>
										<li><Link to="/services">Services</Link></li>
										<li><Link to="/team">Team</Link></li>
										<li><Link to="/blog-grid">Blogs</Link></li>
									</ul>
								</div>
							</motion.div>
							<motion.div className="col-lg-3 col-sm-4 col-6 aos-item"  
								initial={{ opacity: 0, y: '100%' }}
								whileInView={{ opacity: 1, y: "0" }}
								transition={{ duration: 0.5, delay: 0.6 }}
							>
								<div className="widget widget_services">
									<h4 className="footer-title">OUR SERVICES</h4>
									<ul>
										<li><Link>Strategy & Research</Link></li>
										<li><Link>Web Development</Link></li>
										<li><Link>Web Solution</Link></li>
										<li><Link>Digital Marketing</Link></li>
										<li><Link>App Design</Link></li>
									</ul>
								</div>
							</motion.div>
							<motion.div className="col-lg-3 col-sm-4 col-6 aos-item"  
								initial={{ opacity: 0, y: '100%' }}
								whileInView={{ opacity: 1, y: "0" }}
								transition={{ duration: 0.5, delay: 0.8 }}
							>
								<div className="widget widget_services">
									<h4 className="footer-title">OTHER LINKS</h4>
									<ul>
										<li><Link>FAQ</Link></li>
										<li><Link>Portfolio</Link></li>
										<li><Link>Privacy Policy</Link></li>
										<li><Link>Terms & Condition</Link></li>
										<li><Link>Support</Link></li>
									</ul>
								</div>
							</motion.div>
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
									<li><Link>About</Link></li>
									<li><Link>Help Desk</Link></li>
									<li><Link>Privacy Policy</Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer3