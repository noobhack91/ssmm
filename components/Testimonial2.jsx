import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IMAGES } from '../constants/theme'
import { Autoplay } from 'swiper'
import { Link } from 'react-router-dom'

const testimonial2 = [
    {id:1, testimonial2Img: IMAGES.pic13, title: "TARUN KUMRA", subtitle: "PRESIDENT", },
    {id:2, testimonial2Img: IMAGES.pic14, title: "PARDEEP KUMAR", subtitle: "CHAIRMAN", },
    {id:3, testimonial2Img: IMAGES.pic15, title: "PANKAJ KUMAR", subtitle: "SECRETARY", },
    {id:4, testimonial2Img: IMAGES.pic16, title: "VARINDER KUMAR", subtitle: "CASHIER", },
    {id:5, testimonial2Img: IMAGES.pic17, title: "AMAN GARG", subtitle: "MEMBER", },
    {id:6, testimonial2Img: IMAGES.pic13, title: "SANDEEP GARG", subtitle: "MEMBER", },
    {id:7, testimonial2Img: IMAGES.pic14, title: "PANKAJ GARG(JIMMY)", subtitle: "MEMBER", },
    {id:8, testimonial2Img: IMAGES.pic15, title: "JONY AGGARWAL", subtitle: "MEMBER", },
    // {id:9, testimonial2Img: IMAGES.pic16, title: "Amelia Stanley", subtitle: "Fitness Zumba Coach", },
    // {id:10, testimonial2Img: IMAGES.pic17, title: "Amelia Stanley", subtitle: "Fitness Zumba Coach", },
]
const Testimonial2 = () => {
    return (
        <>
            <div className="container-fluid">
                <Swiper className="swiper-container swiper-team"
                    slidesPerView={4}
                    spaceBetween={30}
                    modules={[Autoplay]}
                    speed={1000}
                    loop={true}
                    autoplay={{
                        delay:500,
                        disableOnInteraction:false
                    }}
                    breakpoints={{
                        1500: {
                            slidesPerView: 5,
                        },
                        1200: {
                            slidesPerView: 4,
                        },
                        991: {
                            slidesPerView: 3,
                        },
                        576: {
                            slidesPerView: 2,
                        },
                        100: {
                            slidesPerView: 1,
                        },
                    }}
                >
                    <div className="swiper-wrapper">
                        {
                            testimonial2.map((i,ind) => (
                                <SwiperSlide className="swiper-slide" key={ind}>
                                    <div className="card dz-team style-1">
                                        <div className="card-media">
                                            <img src={i.testimonial2Img} alt="" />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="dz-name m-b5"><Link></Link>{i.title}</h5>
                                            <span className="dz-position">{i.subtitle}</span>
                                            <ul className="dz-social">
                                            <li><a href="tel:+1234567890">123456789</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </div>
                </Swiper>
            </div>
        </>
    )
}

export default Testimonial2