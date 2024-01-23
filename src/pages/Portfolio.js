import React, { useState } from 'react'
import { IMAGES } from '../constants/theme'
import CommanBanner from '../elements/CommanBanner'
import Progress from '../components/Progress'
import Faq from '../components/Faq'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';




const ImaGallery = [
    { id: 1, catagery: "architecture", img: IMAGES.galleryImg1 },
    { id: 2, catagery: "interiar design", img: IMAGES.galleryImg2 },
    { id: 3, catagery: "construction", img: IMAGES.galleryImg3 },
    { id: 4, catagery: "construction", img: IMAGES.galleryImg4 },
    { id: 5, catagery: "architecture", img: IMAGES.galleryImg5 },
    { id: 6, catagery: "interiar design", img: IMAGES.galleryImg6 },
]


const Portfolio = () => {
    const [item, setItem] = useState(ImaGallery);
    const [active, setActive] = useState(false);
    const fiterItemes = (filterArr) => {
        setActive(filterArr);
        let updateItemes = ImaGallery.filter((CurEle) => {
            return CurEle.catagery === filterArr;
        });
        setItem(updateItemes);
    }


    return (
        <>



            <div className="page-content bg-white">
                <CommanBanner mainTitle="Portfolio" parentTitle="Home" pageName="Portfolio" bgImage={IMAGES.bnr8} />
                <section className="content-inner line-img overflow-hidden">
                    <div className="site-filters style-1 clearfix center">
                        <ul className="filters" data-toggle="buttons">
                            <li onClick={() => { setItem(ImaGallery); setActive(false) }} className={`btn ${item === ImaGallery ? 'active' : undefined}`}
                            >
                                <Link>All</Link>
                            </li>
                            <li 
                                onClick={() => { fiterItemes('interiar design') }}
                                className={`btn ${active === 'interiar design' ? 'active' : undefined}`} >
                                <Link>Architecture</Link>
                            </li>
                            <li onClick={() => { fiterItemes('construction') }}
                                className={`btn ${active === 'construction' ? 'active' : undefined}`}
                            >
                                <Link >Interior Design</Link>
                            </li>
                            <li onClick={() => { fiterItemes('architecture') }}
                                className={`btn ${active === 'architecture' ? 'active' : undefined}`}
                            >
                                <Link>Construction</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="container">
                        <ul id="masonry" className="row lightgallery">
                            {
                                item.map((i, index) => (
                                    <motion.li className="card-container col-xl-4 col-md-6 col-sm-6 architecture m-b30" key={index}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 1 }}
                                    >
                                        <div className="dz-box overlay style-1">
                                            <div className="dz-media">
                                                <img src={i.img} alt="" />
                                            </div>
                                            <div className="dz-info">
                                                <span data-exthumbimage="images/work/work-1/pic-3.jpg" data-src="images/work/work-1/pic-3.jpg" className="view-btn lightimg" title="INTERIOR DESIGN"></span>
                                                <h6 className="sub-title">INTERIOR DESIGN</h6>
                                                <h4 className="title m-b15"><Link to="/portfolio-details">Modern House Interior <span>New York</span></Link></h4>
                                            </div>
                                        </div>
                                    </motion.li>
                                ))
                            }
                        </ul>
                    </div>
                </section>
                <section className="section-full dz-content-bx style-2 text-white" >
                    <Progress />
                </section>
                <section className="section-full content-inner overflow-hidden" style={{ backgroundImage: `url(${IMAGES.bg1})`, backgroundPosition: 'left top', backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>
                    <Faq />
                </section>
            </div>
        </>
    )
}

export default Portfolio