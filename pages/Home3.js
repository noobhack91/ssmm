import React, {  useState, useContext, useEffect } from 'react'
import Home3Banner from '../elements/Home3Banner'
import { IMAGES } from '../constants/theme'
import { Swiper, SwiperSlide } from 'swiper/react'


import { Accordion } from 'react-bootstrap'
import ModalVideo from 'react-modal-video'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import Brand from '../components/Brand';
import Home3team from '../elements/Home3team';
import TestimonialHome3 from '../elements/TestimonialHome3';
import CoworkingSlider from '../components/CoworkingSlider';


const ourServices = [
    { id: 1, delay: 0.2, icon: "flaticon-blueprint-1", text: "Your Bid" },
    { id: 2, delay: 0.4, icon: "flaticon-crane", text: "Data-Driven" },
    { id: 3, delay: 0.6, icon: "flaticon-interior-design-1", text: "Interior Designing" },
    { id: 4, delay: 0.8, icon: "flaticon-home", text: "Architecture & build." },
]


const services = [
    { header: "Is Your Service safe to use", eventKey: 0, },
    { header: "Why should i use your service", eventKey: 1, },
    { header: "How can i see my password letter", eventKey: 2, },
    { header: "What make Link strong password", eventKey: 3, },
]

const blogSlide = [
    { id: 1, img: IMAGES.home3blogimg1, blog: IMAGES.home3blogimg2 },
    { id: 2, img: IMAGES.home3blogimg3, blog: IMAGES.home3blogimg4 },
    { id: 3, img: IMAGES.home3blogimg5, blog: IMAGES.home3blogimg6 },
    { id: 4, img: IMAGES.home3blogimg1, blog: IMAGES.home3blogimg2 },
    { id: 5, img: IMAGES.home3blogimg3, blog: IMAGES.home3blogimg4 },
    { id: 6, img: IMAGES.home3blogimg5, blog: IMAGES.home3blogimg6 },
]
const Home3 = () => {
    const [isOpen, setOpen] = useState(false);   
    return (
        <>
            <div className="page-content bg-white">
                <Home3Banner />               
                <section className="content-inner service-area">
                    <div className="container">
                        <div className="section-head style-2 text-center">
                            <h6 className="sub-title text-primary">Our Best Services</h6>
                            <h2 className="title">How To We Provide<br /> Our Services</h2>
                        </div>
                        <div className="row align-items-center">

                            {
                                ourServices.map((i) => (
                                    <motion.div
                                        key={i.id}
                                        className="col-xl-3 col-md-6 m-lg-b30 aos-item aos-init aos-animate" 
                                        initial={{ opacity: 0, y: "100%" }}
                                        whileInView={{ opacity: 1, y: "0%" }}
                                        transition={{ duration: 1, delay: i.delay }}
                                    >
                                        <div className="icon-bx-wraper style-9">
                                            <div className="icon-lg">
                                                <span className="icon-cell">
                                                    <i className={i.icon}></i>
                                                </span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="dz-title">{i.text}</h4>
                                                <p>Find out what you need to offer within 24 hours.</p>
                                                <Link to="/blog-details" className="btn btn-primary btn-rounded btn-sm hover-icon">
                                                    <span>READ MORE</span>
                                                    <i className="fas fa-arrow-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            }

                        </div>
                    </div>
                </section>
               
                <section className="content-inner-3">
                    <div className="container">
                        <div className="row align-items-center about-bx4">
                            <div className="col-lg-6 m-b30">
                                <div className="dz-media">
                                    <motion.img src={IMAGES.home3aboutUs1} alt="" className="img1 aos-item aos-init aos-animate" data-aos="fade-down" data-aos-duration="800" data-aos-delay="400"
                                        initial={{ opacity: 0, y: "-30%" }}
                                        whileInView={{ opacity: 1, y: "0%" }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                    />
                                    <motion.img src={IMAGES.home3aboutUs2} alt="" className="img2 aos-item aos-init aos-animate" data-aos="fade-down" data-aos-duration="800" data-aos-delay="400"
                                        initial={{ opacity: 0, y: "-30%" }}
                                        whileInView={{ opacity: 1, y: "0%" }}
                                        transition={{ duration: 1, delay: 0.4 }}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 m-b30 aos-item aos-init aos-animate" data-aos="fade-in" data-aos-duration="800" data-aos-delay="400">
                                <motion.div className="section-head style-2"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                >
                                    <h6 className="sub-title text-primary">About Us</h6>
                                    <h2 className="title m-b20">We Provide You The Best Experience</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                </motion.div>
                                <Link to="blog-details" className="btn btn-primary btn-rounded  hover-icon">
                                    <span>READ MORE</span>
                                    <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-inner-2">
                    <div className="container">
                        <div className="section-head style-2 text-center">
                            <h6 className="sub-title text-primary">About Services</h6>
                            <h2 className="title">Coworking  Space</h2>
                        </div>
                        <motion.div className="row align-items-center"
                            initial={{ opacity: 0, y: "50%" }}
                            whileInView={{ opacity: 1, y: "0%" }}
                            transition={{ duration: 1 }}
                        >
                           <CoworkingSlider />
                        </motion.div>
                    </div >
                </section >
                < section className="section-full content-inner-1 about-bx5 over overflow-hidden" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 aos-item" data-aos="fade-left" data-aos-duration="800" data-aos-delay="600">
                                <div className="section-head style-2 ">
                                    <h6 className="sub-title text-primary">Services</h6>
                                    <h2 className="title ">Frequently Asked Question</h2>
                                </div>
                                <Accordion defaultActiveKey={0}>
                                    {
                                        services.map((i) => (
                                            <motion.div key={i.eventKey} className="accordion dz-accordion accordion-sm style-1" id="accordionFaq"
                                                initial={{ opacity: 0, x: "50%" }}
                                                whileInView={{ opacity: 1, x: "0%" }}
                                                transition={{ duration: 1 }}
                                            >
                                                <Accordion.Item className="accordion-item" eventKey={i.eventKey}>
                                                    <Accordion.Header className="accordion-header" id="headingOne">
                                                        {i.header}
                                                        <span className="toggle-close"></span>
                                                    </Accordion.Header>
                                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionFaq">
                                                        <Accordion.Body className="accordion-body">
                                                            <p className="m-b0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                                                        </Accordion.Body>
                                                    </div>
                                                </Accordion.Item>
                                            </motion.div>
                                        ))
                                    }
                                </Accordion>
                            </div>
                            <div className="col-lg-6">
                                <div className="dz-media">
                                    <div className="img1 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200"><motion.img src={IMAGES.home3aboutpic8} alt=""
                                        initial={{ opacity: 0, y: "80%" }}
                                        whileInView={{ opacity: 1, y: "0%" }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                    /></div>
                                    <div className="img2 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400"><motion.img src={IMAGES.home3aboutpic9} alt=""
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                    /></div>
                                    <div className="img3 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600"><motion.img src={IMAGES.home3aboutpic10} alt=""
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 1, delay: 1 }}
                                    /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
                < section className="dz-content-bx style-5 content-inner-1" >
                    <div className="dz-content-inner">
                        <div className="container">
                            <div className="section-head style-2 text-center">
                                <h2 className="title text-white">Let’s Show For A <br />Cool Project</h2>
                            </div>

                            <div className="row spno">
                                <div className="col-lg-12">
                                    <div className="video-bx content-media style-3">
                                        <img src={IMAGES.videoPic3} alt="" />
                                        <div className="video-btn aos-item" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
                                            <button onClick={() => { setOpen(true) }} className="popup-youtube"><i className="fas fa-play"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >   
                <div className="clients-wrapper">
                    <div className="container">
                        <Brand />
                    </div>            
                </div>    
                <section className="content-inner-1 overflow-hidden">
                    <div className="container">
                        <Home3team />
                    </div>
                </section>
                <TestimonialHome3 />
                <section className="content-inner bg-white line-img">
                    <div className="container">
                        <div className="row align-items-center section-head style-2">
                            <div className="col-lg-8 aos-item aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                                <h5 className="text-primary sub-title">Blog Details</h5>
                                <h2 className="title">Read Our Latest Blog & News</h2>
                            </div>
                            <div className="col-lg-4 aos-item aos-init aos-animate text-end d-none d-lg-block" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                                <Link to="/blog-details" className="btn btn-primary btn-rounded  hover-icon">
                                    <span>View All Post</span>
                                    <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>

                        <Swiper className="swiper-container blog-swiper"
                            slidesPerView={3}
                            loop={true}
                            spaceBetween={30}
                            breakpoints={{

                                600: {
                                    slidesPerView: 3
                                }, 500: {
                                    slidesPerView: 2
                                }, 400: {
                                    slidesPerView: 1
                                }, 200: {
                                    slidesPerView: 1
                                },
                            }}
                        >

                            {
                                blogSlide.map((slide, ind) => (

                                    <SwiperSlide className="swiper-slide" key={ind}>
                                        <div className="dz-card blog-grid style-3 aos-item h-100 rounded-0" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
                                            <div className="dz-media">
                                                <Link to="/blog-details"><img src={slide.img} alt="" /></Link>
                                            </div>
                                            <div className="dz-info">
                                                <div className="dz-meta">
                                                    <ul>
                                                        <li className="post-author d-flex align-items-center">
                                                            <img src={slide.blog} alt="" /><span className="text-dark m-l10 m-r5">By</span> <span className="text-primary">Alex </span>
                                                        </li>
                                                        <li className="post-comments">
                                                            <span className="m-r10">
                                                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M1.31947 6.55334H14.6874" stroke="#00ADEF" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                    <path d="M11.3316 9.48205H11.3385" stroke="#00ADEF" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                    <path d="M8.00346 9.48205H8.0104" stroke="#00ADEF" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                    <path d="M4.66842 9.48205H4.67537" stroke="#00ADEF" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                    <path d="M11.3316 12.3971H11.3385" stroke="#00ADEF" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                    <path d="M8.00346 12.3971H8.0104" stroke="#00ADEF" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                    <path d="M4.66842 12.3971H4.67537" stroke="#00ADEF" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                    <path d="M11.0328 1V3.46809" stroke="#00ADEF" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                    <path d="M4.97412 1V3.46809" stroke="#00ADEF" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.1787 2.18457H4.82822C2.6257 2.18457 1.25 3.41152 1.25 5.66684V12.4541C1.25 14.7449 2.6257 16.0002 4.82822 16.0002H11.1718C13.3812 16.0002 14.75 14.7661 14.75 12.5108V5.66684C14.7569 3.41152 13.3882 2.18457 11.1787 2.18457Z" stroke="#00ADEF" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                </svg>
                                                                22 feb 2022
                                                            </span>
                                                            <span>
                                                                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M13.427 7.13818L10.0945 9.84796C9.46488 10.3475 8.57903 10.3475 7.94941 9.84796L4.58882 7.13818" stroke="#00ADEF" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.6816 16.25C14.9627 16.2563 16.5 14.3822 16.5 12.0788V6.92751C16.5 4.62412 14.9627 2.75 12.6816 2.75H5.31835C3.03734 2.75 1.5 4.62412 1.5 6.92751V12.0788C1.5 14.3822 3.03734 16.2563 5.31835 16.25H12.6816Z" stroke="#00ADEF" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                </svg>
                                                                15
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h4 className="dz-title"><Link to="/blog-details">How to grow trees from seeds?</Link></h4>
                                                <p className="text">Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy. Lorem Ipsum is simply dummy.</p>
                                                <div className="read-more">
                                                    <Link to="/blog-details" className="btn btn-primary btn-rounded btn-sm hover-icon">
                                                        <span>Read More</span>
                                                        <i className="fas fa-arrow-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }


                        </Swiper>
                    </div>
                </section >
                <ModalVideo channel="youtube" autoplay
                    isOpen={isOpen} videoId="sNCv3_NTNtU" onClose={() => setOpen(false)}
                />
            </div>
        </>
    )
}

export default Home3