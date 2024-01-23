import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { IMAGES } from '../constants/theme';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import loc from "../assets/images/loc.JPG"

const portfolioBlog = [
    { image: loc , title: 'बेटी बचाओ बेटी पढ़ाओ', location: '', subtitle: '', },
    { image: loc, changeStyle: 'mt-5',  title: 'ठंडे RO पानी ', location: '', subtitle: '', },
    { image: loc, title: 'बे सहारा बीमार गऊ हस्पताल', location: '', subtitle: '', },
    { image: loc, changeStyle: 'mt-5', title: 'ठंडे RO पानी ', location: '', subtitle: '', },
    // { image: IMAGES.pic5, title: '', location: '', subtitle: '', },
    // { image: IMAGES.pic6, changeStyle: 'mt-5', title: 'Modern Family House,', location: 'Italy', subtitle: 'INTERIOR DESIGN', },
    // { image: IMAGES.pic4, title: 'Modern House Interior ', location: 'New York', subtitle: 'INTERIOR DESIGN', },
    // { image: IMAGES.pic5, changeStyle: 'mt-5', title: 'Residantial Project,', location: 'Paris', subtitle: 'ARCHITECTURAL', },
    // { image: IMAGES.pic6, title: 'Modern Family House,', location: 'Italy', subtitle: 'INTERIOR DESIGN', },
    // { image: IMAGES.pic4, changeStyle: 'mt-5', title: 'Modern House Interior ', location: 'New York', subtitle: 'INTERIOR DESIGN', },
    // { image: IMAGES.pic5, title: 'Residantial Project,', location: 'Paris', subtitle: 'ARCHITECTURAL', },
    // { image: IMAGES.pic6, changeStyle: 'mt-5', title: 'Modern Family House,', location: 'Italy', subtitle: 'INTERIOR DESIGN', },

];
const Projects = () => {


    return (
        <>

            <section className="content-inner-2">
                <div className="container-fluid">
                    <Swiper className="swiper-container swiper-portfolio lightgallery aos-item"
                        slidesPerView={4}
                        spaceBetween={30}
                        breakpoints={{
                            1280: {
                                slidesPerView: 4,
                            },
                            991: {
                                slidesPerView: 3,
                            },
                            591: {
                                slidesPerView: 2,
                            },
                            300: {
                                slidesPerView: 1,
                            },
                        }}
                    >

                        {portfolioBlog.map((item, index) => (
                            <SwiperSlide className="swiper-slide" key={index}>
                                {/* <motion.div className={`dz-box overlay style-1 ${item.changeStyle}`} >                                     */}
                                    <Link to={item.image}>
                                        <img alt="img1" src={item.image} />
                                    </Link>
                                    <div className="dz-info">
                                        <span data-exthumbimage={item.image} data-src={item.image} className="view-btn lightimg" title="ARCHITECTURAL"></span>
                                        <h6 className="sub-title">{item.subtitle}</h6>
                                        <h4 className="title m-b15"><Link to="/portfolio-details">{item.title} <span>{item.location}</span></Link></h4>
                                    </div>
                                {/* </motion.div> */}
                            </SwiperSlide>
                        ))}


                    </Swiper>
                </div >
                {/* <div className="content-inner bg-secondary subscribe-area" style={{ backgroundImage: `url(images/background/bg2-1.png)`, backgroundPosition: 'center' }}> */}
                    {/* <div className="container"> */}
                        {/* <div className="row subscribe-content"> */}
                            {/* <div className="col-lg-6 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200"> */}
                                {/* <motion.div className="section-head style-1 mb-0"
                                    initial={{ opacity: 0, y: "200%" }}
                                    whileInView={{ opacity: 1, y: "0%" }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <h6 className="sub-title text-primary">NEWSLETTER</h6>
                                    <h2 className="title text-white">Stay Updated With Us !</h2>
                                </motion.div> */}
                            {/* </div> */}
                            {/* <div className="col-lg-6 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400"> */}
                                {/* <form className="dzSubscribe dz-subscription mt-3" action="#" method="post"> */}
                                    {/* <div className="dzSubscribeMsg dz-subscription-msg"></div> */}
                                    {/* <motion.div className="input-group"
                                        initial={{ opacity: 0, y: "200%" }}
                                        whileInView={{ opacity: 1, y: "0%" }}
                                        transition={{ duration: 0.8, delay: 0.4 }}
                                    >
                                        <input name="dzEmail" required="required" className="form-control" placeholder="Enter Your Email Address..." type="email" />                                         
                                        <button name="submit" type="submit" className="btn btn-primary btn-rounded">Subscribe Now <i className="m-l10 fas fa-plus scale08"></i></button>
                                    </motion.div> */}
                                {/* </form> */}
                            {/* </div> */}


                        {/* </div> */}
                    {/* </div> */}
                {/* </div> */}
            </section>
        </>
    )
}

export default Projects