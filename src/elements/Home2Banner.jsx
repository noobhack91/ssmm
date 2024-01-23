import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { IMAGES } from '../constants/theme';
import { Pagination, Parallax } from 'swiper';
import { Link } from 'react-router-dom';


const slideImg = [
    {banner: IMAGES.home2Bg1, image: IMAGES.home2slider1 },
    {banner: IMAGES.home2Bg1, image: IMAGES.home2slider2 },
    {banner: IMAGES.home2Bg1, image: IMAGES.home2slider4 },
    {banner: IMAGES.home2Bg1, image: IMAGES.home2slider5 },
]

export const Home2Banner = () => {
    const swiperRef=React.useRef(null)
    return (
        <Swiper className="swiper-container main-silder-swiper-02"
            slidesPerView={1}
            parallax={true}
            loop={true}
            speed={1500}
            modules={[Pagination,Parallax]}
            ref={swiperRef}

        >
            {
                slideImg.map((i, index) => (
                    <SwiperSlide key={index} style={{ backgroundImage: `url(${i.banner})`, backgroundPosition: 'bottom left', backgroundRepeat: 'no-repeat' }}>

                        <div className="silder-content" data-swiper-parallax="-40%">
                            <div className="side-image" data-swiper-parallax="100%">
                                <img src={i.image} alt="" />
                            </div>
                            <div className="inner-content">
                                <div className="inner-text">
                                    <h3 className="title-small">Creative Concepts<br />Interior Design	</h3>
                                    <p>Morbi pharetra fermentum facilisis. Aenean eleifend quam ante, ats luctus turpis rhoncus quis. Quisque in est luctus, blandit lorem quis, placerat augue.</p>
                                    <Link to="/about-us" className="btn shadow-primary btn-primary btn-rounded">Contact Us</Link>
                                </div>
                            </div>
                            <div className="overlay-slide" data-swiper-parallax="100%">
                                <img src={i.image} alt="" />
                            </div>
                            <div className="swiper-pagination swiper-pagination-white"></div>
                         
                        </div>

                    </SwiperSlide>
                ))
            }
            <div className="slider-one-pagination">
                <div className="btn-prev swiper-button-prev2 swiper-button-white"
                    onClick={() => swiperRef.current.swiper.slidePrev()}
                ><i className="las la-angle-left"></i></div>
                <div className="btn-next swiper-button-next2 swiper-button-white"
                    onClick={() => { swiperRef.current.swiper.slideNext() }}
                ><i className="las la-angle-right"></i></div>
            </div>

        </Swiper>
    )
}
