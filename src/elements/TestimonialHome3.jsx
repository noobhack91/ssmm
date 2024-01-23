import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IMAGES } from '../constants/theme'
import { Autoplay, Pagination } from 'swiper'

const home3testimonial = [
    { image: IMAGES.team5, name: "Karla Lyias", skill: "Engineer" },
    { image: IMAGES.team6, name: "Lindsey", skill: "Manager Effiect" },
    { image: IMAGES.team4, name: "Kaylynn Donin", skill: "CEO Factory" },
    { image: IMAGES.team5, name: "Karla Lyias", skill: "Engineer" },   
]

const TestimonialHome3 = () => {
    const swiperRef = React.useRef(null);
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '0' + (index + 1) + "</span>";
        },
        el: '.testimonial3-pagination'
    };
    return (
        <>
            <section className="content-inner-1 bg-gray over">
                <div className="container">
                    <div className="section-head style-2 text-center">
                        <h6 className="sub-title text-primary">Testimonial</h6>
                        <h2 className="title ">What The People Thinks About  Us</h2>
                    </div>
                    <div className="testi-inner">
                        <Swiper className="swiper-container testimonial-swiper-3"
                            spaceBetween={30}
                            slidesPerView={3}
                            ref={swiperRef}
                            modules={[Pagination, Autoplay]}
                            pagination={pagination}
                            speed={1500}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false
                            }}
                            breakpoints={{
                                991: {
                                    slidesPerView: 3
                                }, 600: {
                                    slidesPerView: 2
                                }, 300: {
                                    slidesPerView: 1
                                }
                            }}
                        >
                           
                                {
                                    home3testimonial.map((item, index) => (
                                        <SwiperSlide className="swiper-slide" key={index}>
                                            <div className="testimonial-3">
                                                <div className="testimonial-detail">
                                                    <div className="testimonial-pic">
                                                        <img src={item.image} alt="" />
                                                    </div>
                                                    <div className="clearfix">
                                                        <h4 className="testimonial-name">{item.name}</h4>
                                                        <span className="testimonial-position">{item.skill}</span>
                                                    </div>
                                                </div>
                                                <div className="testimonial-text">
                                                    <p>There are many variations of passages of Lore alteration in some form, by injected humour, or which don't look even slightly believable.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                           
                                <div className="num-pagination style-1">
                                    <div className="testimonial3-next btn-prev" onClick={() => swiperRef.current.swiper.slidePrev()}><i className="las la-arrow-left"></i></div>
                                    <div className="testimonial3-pagination" style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}></div>
                                    <div className="testimonial3-prev btn-next" onClick={() => swiperRef.current.swiper.slideNext()}><i className="las la-arrow-right"></i></div>
                                </div>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TestimonialHome3