import React from 'react'
import { Link } from 'react-router-dom'
import { IMAGES } from '../constants/theme'
import { Swiper, SwiperSlide } from 'swiper/react'


const Home3teame = [
    { img: IMAGES.team1 },
    { img: IMAGES.team2 },
    { img: IMAGES.team3 },
    { img: IMAGES.team1 },
    { img: IMAGES.team2 },
    { img: IMAGES.team3 },
]

const Home3team = () => {
    return (
        <>
            <div className="row">
                <div className="col-xl-4 col-lg-4 align-self-center px-3 mb-lg-0 mb-4">
                    <div className="section-head style-2 ">
                        <h6 className="sub-title text-primary">Team</h6>
                        <h2 className="title ">Meet Our Team</h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority don't look even slightly believable.</p>
                    </div>
                    <Link to="/blog-details" className="btn btn-primary btn-rounded  hover-icon">
                        <span>View All Members</span>
                        <i className="fas fa-arrow-right"></i>
                    </Link>
                </div>
                <div className="col-xl-8 col-lg-8">
                    <Swiper className="swiper-container swiper-team-2 p-b50 lightgallery"
                        slidesPerView={3}
                        spaceBetween={30}
                        speed={1500}
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
                            Home3teame.map((teame, index) => (
                                <SwiperSlide className="swiper-slide" key={index}>
                                    <div className="dz-team style-4 text-center m-b30 overlay-shine ">
                                        <div className="dz-media">
                                            <Link><img src={teame.img} alt="" /></Link>
                                        </div>
                                        <div className="dz-content m-t20">
                                            <h6 className="dz-position line text-primary">Engineer</h6>
                                            <h5 className="dz-name"><Link>Andrey Carol</Link></h5>
                                            <ul className="team-social d-flex">
                                                <li><Link target="_blank" ><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link target="_blank"><i className="fab fa-instagram"></i></Link></li>
                                                <li><Link target="_blank"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link target="_blank"><i className="fab fa-youtube"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>                
        </>
    )
}

export default Home3team