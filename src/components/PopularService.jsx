import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const card = [
    { id: 1, delay: 0.2, icon: 'flaticon-blueprint-1' },
    { id: 2, delay: 0.4, icon: 'flaticon-crane' },
    { id: 3, delay: 0.6, icon: 'flaticon-interior-design-1' },
    { id: 4, delay: 0.8, icon: 'flaticon-furniture' },
    { id: 5, delay: 1, icon: 'flaticon-home' },
    { id: 6, delay: 1.2, icon: 'flaticon-support' },

]

const PopularService = () => {
    const [addActive, setAddActive] = useState(1)
    return (
        <>
            <div className="container">
                <div className="section-head style-1 text-center">
                    <h6 className="sub-title text-primary">POPULAR SERVICES</h6>
                    <h2 className="title">Our Featured Services</h2>
                </div>
                <div className="row">
                    {
                        card.map((item, ind) => (
                            <motion.div key={ind} className="col-lg-4 col-sm-6 aos-item" 
                                initial={{ opacity: 0, y: "100%" }}
                                whileInView={{ opacity: 1, y: "0%" }}
                                transition={{ duration: 0.8, delay:item.delay }}
                            >
                                <div className={`icon-bx-wraper style-3  m-b30 ${addActive == item.id ? 'active' : ''}`}
                                    onMouseEnter={() => setAddActive(item.id)}
                                >
                                    <div className="icon-xl m-b30">
                                        <Link className="icon-cell"><i className={item.icon}></i></Link>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="title m-b10"><Link></Link></h4>
                                        <p className="m-b30">Phasellus facilisis urna at ultrices egestas. Nulla mi arcu, finibus non lectus non, mollis tempus enim.</p>
                                        <Link className="btn btn-primary btn-rounded btn-sm hover-icon">
                                            <span>Read More</span>
                                            <i className="fas fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>

                            </motion.div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}

export default PopularService