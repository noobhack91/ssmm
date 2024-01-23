import React from 'react'
import { Link } from 'react-router-dom';

const CommanBanner = (props) => {
    return (
        <div className="slidearea bannerside">
            <div className="side-contact-info">
                <ul>
                    <li><i className="fas fa-phone-alt"></i> +919988227050  +919976000142</li>
                    <li><i className="fas fa-envelope"></i>   info@impresabuildtech.com</li>
                </ul>
            </div>
            <div className="dz-bnr-inr style-1 overlay-left"
                style={{ backgroundImage: `url(${props.bgImage})` }}
            >
                <div className="container-fluid">
                    <div className="dz-bnr-inr-entry">
                        <h1>{props.mainTitle}</h1>
                        <nav  className="breadcrumb-row">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to={"/"}>{props.parentTitle}</Link></li>
                                <li className="breadcrumb-item">{props.pageName}</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommanBanner