import React from 'react'
import { IMAGES } from '../constants/theme'
import CommanBanner from '../elements/CommanBanner'
import Brand from '../components/Brand'
import Testimonial2 from '../components/Testimonial2'
import { Link } from 'react-router-dom'

const ServicesDetail = () => {
  return (
  <>
      <div className="page-content bg-white">
      <CommanBanner mainTitle="Service Details" parentTitle="Home" pageName="Service Details" bgImage={IMAGES.bnr5} />
      <section className="section-full content-inner-2" style={{backgroundImage:`url(${IMAGES.ServicesDetailBg2})`, backgroundPosition:'right bottom', backgroundSize:'100%', backgroundRepeat:'no-repeat'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-7 aos-item" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500">
              <div className="service-detail">
                <div className="dz-page-text">
                  <h2 className="title mb-2">Suspendisse ornare suscipit nibh quis maximus raesent tristique.</h2>
                  <p>Donec non ex elementum, auctor elit a, vehicula mauris. Etiam varius faucibus tortor quis iaculis. Proin tortor eros, dignissim at velit nec, cursus gravida lectus. Pellentesque egestas nisl et lacus sollicitudin pulvinar. Donec a maximus augue,</p>
                  <div className="row">
                    <div className="col-lg-6">
                      <img src={IMAGES.ServicePic1} className="m-b30  w-100" alt=""/>
                        <p className="m-b0">Nunc eu pulvinar mauris, in volutpat nulla. Donec efficitur at lectus sit amet egestas. Morbi sit amet auctor quam. Donec auctor congue orci non semper.</p>
                        <p className="m-b0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a purus ac lorem dictum mattis vulputate id lorem. Phasellus imperdiet velit non enim semper, ac euismod nisl mattis. Mauris sollicitudin purus interdum.</p>
                    </div>
                    <div className="col-lg-6">
                      <img src={IMAGES.ServicePic2} className="m-b30 w-100" alt=""/>
                        <p className="m-b0">Nunc eu pulvinar mauris, in volutpat nulla. Donec efficitur at lectus sit amet egestas. Morbi sit amet auctor quam. Donec auctor congue orci non semper.</p>
                        <p className="m-b0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a purus ac lorem dictum mattis vulputate id lorem. Phasellus imperdiet velit non enim semper, ac euismod nisl mattis. Mauris sollicitudin purus interdum.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-5 m-b30 aos-item right" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="300">
              <div className="sticky-top">
                <div className="widget ext-sidebar-menu">
                  <ul className="menu">
                    <li className="active"><Link>Interior Design</Link>  </li>
                    <li><Link>Floor Plan Design</Link>  </li>
                    <li><Link>Construction</Link>  </li>
                    <li><Link>Furniture Production</Link> </li>
                    <li><Link>Architecture Design</Link> </li>
                    <li><Link>24X 7 Support</Link> </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="content-inner-2">
        <Testimonial2 />
      </section>
      <section className="content-inner-1">
        <div className="container">
          <div className="section-head style-1 text-center">
            <h6 className="sub-title text-primary">Brands</h6>
            <h2 className="title">Our Top Partners</h2>
          </div>
          <Brand />
        </div>
      </section>
      </div>
  </>
  )
}

export default ServicesDetail