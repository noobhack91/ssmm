import React, { useRef } from 'react'
import { IMAGES } from '../constants/theme'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Parallax } from "swiper";
import { Link } from 'react-router-dom';


const bannerSlider = [
    { img: IMAGES.home3slider1 },
    { img: IMAGES.home3slider2 },
    { img: IMAGES.home3slider3 },
]



const Home3Banner = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '0' + (index + 1) + "</span>";
        },
        el: ".style-2"
    };


    return (
        <>





            <div className="slidearea ps-0">
                <div className="silder-three">
                    <Swiper className="swiper-container main-silder-swiper-03"
                        loop={true}
                        speed={1500}
                        parallax={true}
                        pagination={pagination}
                        onInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                        modules={[Navigation, Parallax, Pagination]}
                    >
                        <div className="swiper-wrapper">
                            {
                                bannerSlider.map((slide, index) => (
                                    <SwiperSlide className="swiper-slide" key={index}>
                                        <div className="silder-content" data-swiper-parallax="-40%">
                                            <div className="container">
                                                <div className="inner-content row align-items-center g-0">
                                                    <div className="col-md-6">
                                                        <div className="inner-text">
                                                            <h6 className="text text-primary">What We Do</h6>
                                                            <h3 className="title">Architeture With<br /> A<span className="text-primary">Different</span> Approach</h3>
                                                            <p>If you are going to use Link passage of Ipsum, needanything embarrassing hidden in the middle of text.</p>
                                                            <div>
                                                                <Link to="/blog-details" className="btn btn-primary btn-rounded btn-md hover-icon">
                                                                    <span>Viev Projects</span>
                                                                    <i className="fas fa-arrow-right"></i>
                                                                </Link>
                                                                <Link to="/blog-details" className="btn btn-primary btn-rounded  m-l15 btn-border btn-md hover-icon">
                                                                    <span>Our Services</span>
                                                                    <i className="fas fa-arrow-right"></i>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="overlay-slide" data-swiper-parallax="100%">
                                                            <img src={slide.img} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </div>
                        <div className="swiper-pagination style-2" style={{ bottom: "0", left: "auto", width: "240px" }}></div>
                        <div className="slider-three-pagination">
                            <div className="btn-prev swiper-button-prev3 swiper-button-white" ref={prevRef}><i className="las la-angle-left"></i></div>
                            <div className="btn-next swiper-button-next3 swiper-button-white" ref={nextRef}><i className="las la-angle-right"></i></div>
                        </div>

                    </Swiper>
                </div>
            </div>


        </>
    )
}

export default Home3Banner