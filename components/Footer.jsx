import React from "react";
import { IMAGES } from "../constants/theme";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo2 from "./../assets/images/logo-2.png";

const Footer = () => {
  return (
    <>
      <footer className="site-footer style-1" id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <motion.div
                className="col-md-12 aos-item"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                initial={{ opacity: 0, y: "100%" }}
                whileInView={{ opacity: 1, y: "0%" }}
                transition={{ duration: 0.8 }}
              >
                <div className="ft-calltoaction">
                  <h1
                    style={{
                      backgroundColor: "#e3421b",
                      textAlign: "center",
                      color: "#ffffff",
                      width:"1000px"
                    }}
                  >
                    श्री सालासर बाला जी संकीर्तन मंडल मौर मंडी{" "}
                  </h1>{" "}
                  {/* <Link
                    to="/contact-us"
                    className="btn btn-primary btn-rounded"
                  >
                    Contact Us
                  </Link> */}
                </div>
              </motion.div>
              <div
                className="col-xl-3 col-lg-3 col-md-6 col-sm-12 aos-item"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="600"
              >
                <motion.div
                  className="widget widget_about"
                  initial={{ opacity: 0, y: "70%" }}
                  whileInView={{ opacity: 1, y: "0%" }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  <div className="footer-logo">
                    <Link to="/">
                    <img style={{ height: "80px", width: "80px" }} src={logo2} alt="" />
                    </Link>
                  </div>
                  <p>
                  श्री सालासर बाला जी संकीर्तन मंडल पिछले 22 सालों से बाला जी महाराज का भव्य बिशाल जागरण व सामूहिक बिशाल श्री हनुमान चालीसा प्रभात फेरी के माध्यम से सनातन धर्म का प्रचार कर रहा है
                  </p>
                  <div className="widget_getintuch">
                    <ul>
                      <li>
                        <i className="las la-map-marker-alt"></i>
                        <span>
                          {" "}
                         MAUR MANDI
                        </span>
                      </li>
                      <li>
                        <i className="las la-phone-volume"></i>
                        <span> +919855260556 +919417094964</span>
                      </li>
                    </ul>
                  </div>
                  <ul className="social-list style-1 mt-3">
                    {/* <li>
                      <Link to="https://www.facebook.com/profile.php?id=100079745027756">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://instagram.com/impresabuildtech?igshid=YmMyMTA2M2Y=">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li> */}
                    <li>
                      <Link to="https://wa.me/919855260556">
                        <i className="fab fa-whatsapp"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.youtube.com/@Balajimandalmaur">
                        <i className="fab fa-youtube"></i>
                      </Link>
                    </li>
                  </ul>
                </motion.div>
              </div>
              <div
                className="col-xl-3 col-lg-2 col-md-6 col-sm-6 aos-item"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <motion.div
                  className="widget widget_services"
                  initial={{ opacity: 0, y: "70%" }}
                  whileInView={{ opacity: 1, y: "0%" }}
                  transition={{ duration: 1 }}
                >
                  <h4 className="footer-title">Our Links</h4>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    {/* <li>
                      <Link to="/about-us">About Us</Link>
                    </li>
                    <li>
                      <Link to="/services">Services</Link>
                    </li>
                    <li>
                      <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                      <Link to="/blog-grid">Blogs</Link>
                    </li>
                    <li>
                      <Link to="/contact-us">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/team">Team</Link>
                    </li> */}
                  </ul>
                </motion.div>
              </div>
              <div
                className="col-xl-3 col-lg-3 col-md-6 col-sm-6 aos-item"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <motion.div
                  className="widget widget_services"
                  initial={{ opacity: 0, y: "70%" }}
                  whileInView={{ opacity: 1, y: "0%" }}
                  transition={{ duration: 1 }}
                >
                  {/* <h4 className="footer-title">Our Service</h4> */}
                  {/* <ul>
                    <li>
                      <Link>Floor Plan Design</Link>
                    </li>
                    <li>
                      <Link>Furniture Work</Link>
                    </li>
                    <li>
                      <Link>Construction Work</Link>
                    </li>
                    <li>
                      <Link>Architecture</Link>
                    </li>
                    <li>
                      <Link>Interior Designing</Link>
                    </li>
                    <li>
                      <Link>Planning Solution</Link>
                    </li>
                    <li>
                      <Link>24x7 Support</Link>
                    </li>
                  </ul> */}
                </motion.div>
              </div>
              {/* <div
                className="col-xl-3 col-lg-4 col-md-6 col-sm-12 aos-item"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <motion.div
                  className="widget recent-posts-entry"
                  initial={{ opacity: 0, y: "70%" }}
                  whileInView={{ opacity: 1, y: "0%" }}
                  transition={{ duration: 1 }}
                >
                  <h4 className="footer-title">Recent Posts</h4>
                  <div className="widget-post-bx">
                    <div className="widget-post clearfix">
                      <div className="dz-media">
                        <Link to="/blog-details">
                          <img src={IMAGES.footer1} alt="" />
                        </Link>
                      </div>
                      <div className="dz-info">
                        <h4 className="title">
                          <Link to="/blog-details" className="text-white">
                            Fusce mollis felis quis tristique
                          </Link>
                        </h4>
                        <div className="dz-meta">
                          <ul>
                            <li className="post-date"> 25 March, 2023 </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="widget-post clearfix">
                      <div className="dz-media">
                        <Link to="/blog-details">
                          <img src={IMAGES.footer2} alt="" />
                        </Link>
                      </div>
                      <div className="dz-info">
                        <h4 className="title">
                          <Link to="/blog-details" className="text-white">
                            Fusce mollis felis quis tristique
                          </Link>
                        </h4>
                        <div className="dz-meta">
                          <ul>
                            <li className="post-date"> 7 March, 2023 </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 text-center text-md-start">
                <span className="copyright-text">
                  Copyright © 2024{" "}
                  <Link
                    to="https://impresabuildtech.com/"
                    className="text-primary"
                    target="_blank"
                  >
                    SSBM
                  </Link>{" "}
                  All rights reserved.
                </span>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <ul className="footer-link d-inline-block">
                  <li>
                    <Link to={"#"}>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to={"#"}>Team & Condition</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
