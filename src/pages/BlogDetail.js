import React from 'react'
import CommanBanner from '../elements/CommanBanner'
import { IMAGES } from '../constants/theme'
import LargeSidebar from '../components/LargeSidebar'
import { Link } from 'react-router-dom'

const testimonialBlog = [
    {img: IMAGES.blogGridPic2 },
    {img: IMAGES.blogGridPic1 },
]

const coments = [
    {name: "A", img: IMAGES.avatar },
    {changeStyle: "m-l40", name: "B", img: IMAGES.avatar1 },
    {name: "C", img: IMAGES.avatar2 },
]

const BlogDetail = () => {
    return (
        <>
            <div className="page-content bg-white">
                <CommanBanner mainTitle="Blog Details" parentTitle="Home" pageName="About Us" bgImage={IMAGES.bnr2} />
                <div className="content-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8">
                                <div className="dz-card blog-single style-1">
                                    <div className="dz-media">
                                        <img src={IMAGES.blogGridPic2} alt="" />
                                    </div>
                                    <div className="dz-info">
                                        <div className="dz-meta">
                                            <ul>
                                                <li>April 26, 2021</li>
                                                <li className="post-user">By <Link>John Doe</Link></li>
                                            </ul>
                                        </div>
                                        <h2 className="dz-title">Five Quick Tips Regarding Architecture.</h2>
                                        <div className="dz-post-text">
                                            <p>In hac habitasse platea dictumst. Integer congue et enim cursus porttitor. Vestibulum mattis placerat magna, sit amet laoreet sapien. Vestibulum venenatis egestas lacus, Link porta elit ornare sit amet. Morbi dapibus efficitur nisi, ut faucibus
                                                lorem. Morbi interdum odio ac leo vehicula iaculis. Aenean condimentum, erat ac volutpat iaculis, nibh massa pharetra lectus,</p>
                                            <blockquote className="block-quote style-1">
                                                <p>“ Mauris justo augue, laoreet quis faucibus et, ultrices eu ante. Duis magna eratut dui eu maximus metus bibendum suscipit ”</p>
                                                <cite>Visva</cite>
                                            </blockquote>
                                            <div className="alignleft w-50">
                                                <img alt="" src={IMAGES.blogGridPic2} className="w-100" />
                                            </div>
                                            <p>Nulla sodales finibus risus. Sed suscipit turpis mi, eget ornare ipsum laoreet ac. Sed pharetra, dui Link congue tincidunt, lacus metus consectetur nunc, sit amet laoreet velit nunc vitae diam. Maecenas posuere pellentesque orci at placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                                            <h4>20th Century Revolution</h4>
                                            <p>Pellentesque congue at augue et porttitor. Aenean volutpat porttitor euismod. Suspendisse eget pretium augue. Etiam venenatis non elit quis tincidunt.</p>
                                            <p>Mauris egestas erat ut arcu interdum molestie. Nam sed hendrerit lorem. Duis eget orci ac odio gravida laoreet. Donec et diam varius, semper justo at, accumsan elit.</p>
                                            <h4>Aenean volutpat porttitor euismod.</h4>
                                            <p>Mauris egestas erat ut arcu interdum molestie. Nam sed hendrerit lorem. Duis eget orci ac odio gravida laoreet. Donec et diam varius, semper justo at, accumsan elit. Aenean ut condimentum purus, et egestas lectus. Nulla pretium justo ex, vel iaculis velit aliquet et. Cras sed nisi id ante congue scelerisque non at eros. In finibus rutrum justo nec fringilla. Etiam id augue ornare, dictum tortor ut, tristique metus.</p>
                                            <p>Proin non ultrices mauris. Nam ultricies justo eu turpis ornare condimentum. Quisque felis tortor, commodo vitae tristique facilisis, luctus rutrum justo.</p>

                                            <p>Aliquam risus nisl, convallis vitae dolor vitae, vulputate mollis nunc. Fusce at feugiat tellus, ac vestibulum orci. Fusce orci risus, pulvinar in rhoncus Link, varius et sapien. Nullam porta leo sit amet urna consectetur, at rutrum risus aliquet. Proin vehicula nulla eu quam rhoncus ullamcorper.</p>
                                        </div>
                                        <div className="post-footer">
                                            <div className="post-tags">
                                                <strong>Tags:</strong>
                                                <Link rel="tag">Fashion</Link>
                                            </div>
                                            <div className="dz-share-post">
                                                <h5 className="title">Share :</h5>
                                                <ul className="dz-social-icon">
                                                    <li><Link target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                                                    <li><Link target="_blank"><i className="fab fa-twitter"></i></Link></li>
                                                    <li><Link target="_blank"><i className="fab fa-linkedin"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="author-box blog-user m-b60">
                                    <div className="author-profile-info">
                                        <div className="author-profile-pic">
                                            <img src={IMAGES.testimonial} alt="Profile Pic" />
                                        </div>
                                        <div className="author-profile-content">
                                            <h6>John Doe</h6>
                                            <p>We woke reasonably late following the feast and free flowing wine the night before. After gathering ourselves and our packs, we headed down to our home.</p>
                                            <ul className="list-inline m-b0">
                                                <li>
                                                    <Link target="_blank" className="btn-link">
                                                        <i className="fas fa-globe"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link target="_blank" className="btn-link">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link target="_blank" className="btn-link">
                                                        <i className="fab fa-twitter"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link target="_blank" className="btn-link">
                                                        <i className="fab fa-youtube"></i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="row extra-blog style-1">
                                    <div className="col-md-12">
                                        <div className="widget-title">
                                            <h4 className="title"> Related Blogs</h4>
                                            <div className="dz-separator style-1 text-primary mb-0"></div>
                                        </div>
                                    </div>
                                    {
                                        testimonialBlog.map((i, index) => (
                                            <div className="col-md-6" key={index}>
                                                <div className="dz-card blog-grid style-1 aos-item">
                                                    <div className="dz-media">
                                                        <Link to="/blog-details"><img src={i.img} alt="" /></Link>
                                                    </div>
                                                    <div className="dz-info">
                                                        <div className="dz-meta">
                                                            <ul>
                                                                <li className="post-date">
                                                                    <strong>26</strong>
                                                                    <span>Apr</span>
                                                                </li>
                                                                <li className="post-user">By <Link>John Doe</Link></li>
                                                            </ul>
                                                        </div>
                                                        <h5 className="dz-title"><Link to="/blog-details">Modern Family House.</Link></h5>
                                                        <div className="read-more">
                                                            <Link className="btn btn-primary btn-rounded btn-sm hover-icon"><span>Read More </span><i className="fas fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>

                                <div className="clear" id="comment-list">
                                    <div className="comments-area style-1" id="comments">
                                        <div className="widget-title">
                                            <h4 className="title">8 Comments</h4>
                                            <div className="dz-separator style-1 text-primary mb-0"></div>
                                        </div>
                                        <div className="clearfix">
                                            <ol className="comment-list">
                                                {
                                                    coments.map((i, index) => (
                                                        <li className={`comment ${i.changeStyle}`} key={index}>
                                                            <div className="comment-body">
                                                                <div className="comment-author vcard">
                                                                    <img className="avatar photo" src={i.img} alt="" />
                                                                    <cite className="fn">John Doe</cite>
                                                                </div>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                                <div className="reply">
                                                                    <Link className="comment-reply-link">
                                                                        <i className="fa fa-reply"></i>Reply</Link>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))
                                                }

                                            </ol>
                                        </div>
                                    </div>
                                </div>

                                <div className="comment-respond style-1" id="respond">
                                    <div className="widget-title">
                                        <h4 className="title">Leave Your Comment</h4>
                                        <div className="dz-separator style-1 text-primary mb-0"></div>
                                        <Link style={{ display: 'none' }} id="cancel-comment-reply-link" rel="nofollow">Cancel reply</Link>
                                    </div>
                                    <form className="comment-form" id="commentform" method="post">
                                        <p className="comment-form-author">
                                            <label htmlFor="author">Name <span className="required">*</span></label>
                                            <input type="text" name="Author" placeholder="Author" id="author" />
                                        </p>
                                        <p className="comment-form-email">
                                            <label htmlFor="email">Email <span className="required">*</span></label>
                                            <input type="text" placeholder="Email" name="email" id="email" />
                                        </p>
                                        <p className="comment-form-author w-100">
                                            <label htmlFor="author">Subtitale <span className="required">*</span></label>
                                            <input type="text" name="Author" placeholder="Subtitale" id="subtitale" />
                                        </p>
                                        <p className="comment-form-comment">
                                            <label htmlFor="comment">Comment</label>
                                            <textarea rows="8" name="comment" placeholder="Comment" id="comment"></textarea>
                                        </p>
                                        <p className="form-submit">
                                            <button type="submit" className="btn shadow-primary btn-primary btn-icon btn-rounded" id="submit">POST NOW
                                                <i className="fas fa-caret-right ms-1"></i>
                                            </button>
                                        </p>
                                    </form>
                                </div>
                            </div>
                            <LargeSidebar />
                        </div>
                    </div>
                </div>
            </div>

        </>)
}

export default BlogDetail