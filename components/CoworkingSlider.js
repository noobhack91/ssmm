import React ,{useRef} from 'react'
import {Link} from 'react-router-dom';
import { IMAGES } from '../constants/theme';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper';


const aboutservices = [
    { img: IMAGES.pic4, heading: "Work Space" },
    { img: IMAGES.pic5, heading: "Custom Space" },
    { img: IMAGES.pic6, heading: "Private Space" },
    { img: IMAGES.pic4, heading: "Work Space" },
]

const CoworkingSlider = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + "0" + (index + 1) + "</span>";
        },
        el: '.testimonial3'
    };
  return (
    <div className="col-lg-12 m-b30">
        <Swiper className="swiper-container blog-swiper-2"
            slidesPerView={3}
            spaceBetween={30}
            pagination={pagination}
            speed={1500}
            loop={true}
            onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
            }}
            modules={[Navigation, Pagination]}
            breakpoints={{
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
            {
                aboutservices.map((i, index) => (
                    <SwiperSlide className="swiper-slide" key={index}>
                        <div className="dz-card blog-grid style-2 aos-item  rounded-0" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200">
                            <div className="dz-media">
                                <Link to={"/blog-details"}><img src={i.img} alt="" /></Link>
                            </div>
                            <div className="dz-meta">
                                <ul>
                                    <li className="post-date">{index + 1}</li>
                                </ul>
                            </div>
                            <div className="dz-info">
                                <div className="bottom-contact">
                                    <h5 className="dz-title"><Link to={"/blog-details"}>{i.heading}</Link></h5>
                                    <p className="text">Dedicated and hot desk </p>
                                </div>
                                <div className="read-more">
                                    <Link to={"/blog-details"} className="btn btn-primary btn-rounded btn-sm align-items-center">
                                        <span>View More<i className="fas fa-arrow-right"></i></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
        <div className="num-pagination style-1">
            <div className="testimonial3-next btn-prev"
                ref={prevRef}
            >
                <i className="las la-arrow-left"></i>
            </div>
            <div className="testimonial3-pagination testimonial3" style={{ display: 'flex', justifyContent: 'center' }}></div>
            <div className="testimonial3-prev btn-next"
                ref={nextRef}
            >
                <i className="las la-arrow-right"></i></div>
        </div>
    </div>
  )
}

export default CoworkingSlider