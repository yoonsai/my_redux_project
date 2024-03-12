import {Fragment} from "react";
import {Link} from "react-router-dom";
function Home(){
    return(
        <Fragment>
            <div className="hero overlay">

                <div className="img-bg rellax">
                    <img src="images/hero_1.jpg" alt="Image" className="img-fluid"/>
                </div>

                <div className="container">
                    <div className="row align-items-center justify-content-start">
                        <div className="col-lg-5">

                            <h1 className="heading" data-aos="fade-up">It's a Big World Out There, Go Explore</h1>
                            <p className="mb-5" data-aos="fade-up">A small river named Duden flows by their place and
                                supplies it with the necessary regelialia. It is a paradisematic country, in which
                                roasted parts of sentences fly into your mouth.</p>

                            <div data-aos="fade-up">
                                <a href="https://www.youtube.com/watch?v=5n-e6lOhVq0"
                                   className="play-button align-items-center d-flex glightbox3">
							<span className="icon-button me-3">
								<span className="icon-play"></span>
							</span>
                                    <span className="caption">Watch Video</span>
                                </a>
                            </div>
                        </div>


                    </div>
                </div>


            </div>


            <div className="section section-2">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-6 order-lg-2 mb-5 mb-lg-0">
                            <div className="image-stack mb-5 mb-lg-0">
                                <div className="image-stack__item image-stack__item--bottom" data-aos="fade-up">
                                    <img src="images/img_v_1.jpg" alt="Image" className="img-fluid rellax "/>
                                </div>
                                <div className="image-stack__item image-stack__item--top" data-aos="fade-up"
                                     data-aos-delay="100" data-rellax-percentage="0.5">
                                    <img src="images/img_v_2.jpg" alt="Image" className="img-fluid"/>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 order-lg-1">

                            <div>
                                <h2 className="heading mb-3" data-aos="fade-up" data-aos-delay="100">Explore All Corners
                                    of The World With Us</h2>

                                <p data-aos="fade-up" data-aos-delay="200">Far far away, behind the word mountains, far
                                    from the countries Vokalia and Consonantia, there live the blind texts. Separated
                                    they live in Bookmarksgrove right at the coast of the Semantics, a large language
                                    ocean.</p>

                                <p data-aos="fade-up" data-aos-delay="300">A small river named Duden flows by their
                                    place and supplies it with the necessary regelialia. It is a paradisematic country,
                                    in which roasted parts of sentences fly into your mouth.</p>

                                <p className="my-4" data-aos="fade-up" data-aos-delay="300"><a href="#"
                                                                                               className="btn btn-primary">Read
                                    more</a></p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div className="section service-section-1">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 mb-4 mb-lg-0">
                            <div className="heading-content" data-aos="fade-up">
                                <h2>Our <span className="d-block">Services</span></h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                    Consonantia, there live the blind texts.</p>
                                <p className="my-4" data-aos="fade-up" data-aos-delay="300"><a href="#"
                                                                                               className="btn btn-primary">View
                                    All</a></p>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-6 col-md-6 col-lg-3 mb-4 mb-lg-0" data-aos="fade-up"
                                     data-aos-delay="100">
                                    <div className="service-1">
								<span className="icon">
									<img src="images/svg/01.svg" alt="Image" className="img-fluid"/>
								</span>
                                        <div>
                                            <h3>Tourism</h3>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia
                                                and Consonantia, there live the blind texts.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-6 col-lg-3 mb-4 mb-lg-0" data-aos="fade-up"
                                     data-aos-delay="200">
                                    <div className="service-1">
								<span className="icon">
									<img src="images/svg/02.svg" alt="Image" className="img-fluid"/>
								</span>
                                        <div>
                                            <h3>Package Tours</h3>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia
                                                and Consonantia, there live the blind texts.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-6 col-lg-3 mb-4 mb-lg-0" data-aos="fade-up"
                                     data-aos-delay="300">
                                    <div className="service-1">
								<span className="icon">
									<img src="images/svg/03.svg" alt="Image" className="img-fluid"/>
								</span>
                                        <div>
                                            <h3>Travel Insurance</h3>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia
                                                and Consonantia, there live the blind texts.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-6 col-lg-3 mb-4 mb-lg-0" data-aos="fade-up"
                                     data-aos-delay="400">
                                    <div className="service-1">
								<span className="icon">
									<img src="images/svg/04.svg" alt="Image" className="img-fluid"/>
								</span>
                                        <div>
                                            <h3>Airport Lounge Access</h3>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia
                                                and Consonantia, there live the blind texts.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="section section-3" data-aos="fade-up" data-aos-delay="100">
                <div className="container">
                    <div className="row align-items-center justify-content-between  mb-5">
                        <div className="col-lg-5" data-aos="fade-up">
                            <h2 className="heading mb-3">Discover Hundred of Travel Destinations</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
                                the Semantics, a large language ocean.</p>
                        </div>
                        {/*<div className="col-lg-5 text-md-end" data-aos="fade-up" data-aos-delay="100">*/}
                        {/*    <div id="destination-controls">*/}
						{/*<span className="prev me-3" data-controls="prev">*/}
						{/*	<span className="icon-chevron-left"></span>*/}

						{/*</span>*/}
                        {/*        <span className="next" data-controls="next">*/}
						{/*	<span className="icon-chevron-right"></span>*/}

						{/*</span>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>

                </div>

                <div className="destination-slider-wrap">
                    <div className="destination-slider">
                        <div className="destination">
                            <div className="thumb">
                                <img src="images/img-1.jpg" alt="Image" className="img-fluid"/>
                                <div className="price">$430</div>
                            </div>
                            <div className="mt-4">
                                <h3><a href="#">Paradise Beach, Palawan Island</a></h3>
                                <span className="meta">Maldives, Repbulic Maldives</span>
                            </div>
                        </div>

                        <div className="destination">
                            <div className="thumb">
                                <img src="images/img-2.jpg" alt="Image" className="img-fluid"/>
                                <div className="price">$560</div>
                            </div>
                            <div className="mt-4">
                                <h3><a href="#">Paradise Beach, Palawan Island</a></h3>
                                <span className="meta">Maldives, Repbulic Maldives</span>
                            </div>
                        </div>

                        <div className="destination">
                            <div className="thumb">
                                <img src="images/img-3.jpg" alt="Image" className="img-fluid"/>
                                <div className="price">$490</div>
                            </div>
                            <div className="mt-4">
                                <h3><a href="#">Paradise Beach, Palawan Island</a></h3>
                                <span className="meta">Maldives, Repbulic Maldives</span>
                            </div>
                        </div>

                        <div className="destination">
                            <div className="thumb">
                                <img src="images/img-4.jpg" alt="Image" className="img-fluid"/>
                                <div className="price">$490</div>
                            </div>
                            <div className="mt-4">
                                <h3><a href="#">Paradise Beach, Palawan Island</a></h3>
                                <span className="meta">Maldives, Repbulic Maldives</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className="section">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-5 mb-4 mb-lg-0 order-lg-2" data-aos="fade-up">
                            <img src="images/img-1.jpg" alt="Image" className="img-fluid"/>
                        </div>
                        <div className="col-lg-5" data-aos="fade-up" data-aos-delay="100">
                            <h2 className="heading mb-4">Sweet Memories Come To Life Again</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
                                the Semantics, a large language ocean.</p>
                            <p>A small river named Duden flows by their place and supplies it with the necessary
                                regelialia. It is a paradisematic country, in which roasted parts of sentences fly into
                                your mouth.</p>
                            <p className="my-4" data-aos="fade-up" data-aos-delay="200"><a href="#"
                                                                                           className="btn btn-primary">Read
                                more</a></p>
                        </div>
                    </div>
                </div>
            </div>



            <div className="section">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-5 mb-4 mb-lg-0">
                            <img src="images/img_v_2.jpg" alt="Image" className="img-fluid"/>
                        </div>
                        <div className="col-lg-5 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="100">

                            <h2 className="heading mb-5">Frequently Asked <br/> Questions</h2>

                            <div className="custom-accordion" id="accordion_1">
                                <div className="accordion-item">
                                    <h2 className="mb-0">
                                        <button className="btn btn-link" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne" aria-expanded="true"
                                                aria-controls="collapseOne">How to download and register?
                                        </button>
                                    </h2>

                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                                         data-bs-parent="#accordion_1">
                                        <div className="accordion-body">
                                            Far far away, behind the word mountains, far from the countries Vokalia and
                                            Consonantia, there live the blind texts. Separated they live in
                                            Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="mb-0">
                                        <button className="btn btn-link collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                aria-expanded="false" aria-controls="collapseTwo">How to create your
                                            paypal account?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                                         data-bs-parent="#accordion_1">
                                        <div className="accordion-body">
                                            A small river named Duden flows by their place and supplies it with the
                                            necessary regelialia. It is a paradisematic country, in which roasted parts
                                            of sentences fly into your mouth.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="mb-0">
                                        <button className="btn btn-link collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                aria-expanded="false" aria-controls="collapseThree">How to link your
                                            paypal and bank account?
                                        </button>
                                    </h2>

                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                                         data-bs-parent="#accordion_1">
                                        <div className="accordion-body">
                                            When she reached the first hills of the Italic Mountains, she had a last
                                            view back on the skyline of her hometown Bookmarksgrove, the headline of
                                            Alphabet Village and the subline of her own road, the Line Lane. Pityful a
                                            rethoric question ran over her cheek, then she continued her way.
                                        </div>
                                    </div>

                                </div>


                                <div className="accordion-item">
                                    <h2 className="mb-0">
                                        <button className="btn btn-link collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                aria-expanded="false" aria-controls="collapseFour">We are better than
                                            others?
                                        </button>
                                    </h2>

                                    <div id="collapseFour" className="collapse" aria-labelledby="headingThree"
                                         data-bs-parent="#accordion_1">
                                        <div className="accordion-body">
                                            When she reached the first hills of the Italic Mountains, she had a last
                                            view back on the skyline of her hometown Bookmarksgrove, the headline of
                                            Alphabet Village and the subline of her own road, the Line Lane. Pityful a
                                            rethoric question ran over her cheek, then she continued her way.
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="section">
                <div className="container">

                    <div className="row">
                        <div className="col-12" data-aos="fade-up" data-aos-delay="0">

                            <h2 className="heading mb-5">Recent Posts</h2>
                        </div>
                    </div>
                    <div className="row align-items-stretch">
                        <div className="col-6 col-sm-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
                            <div className="media-entry">
                                <a href="#">
                                    <img src="images/gal_1.jpg" alt="Image" className="img-fluid"/>
                                </a>
                                <div className="bg-white m-body">
                                    <span className="date">May 14, 2020</span>
                                    <h3><a href="#">Far far away, behind the word mountains</a></h3>
                                    <p>Vokalia and Consonantia, there live the blind texts. Separated they live.</p>

                                    <a href="single.html" className="more d-flex align-items-center float-start">
                                        <span className="label">Read More</span>
                                        <span className="arrow"><span
                                            className="icon-keyboard_arrow_right"></span></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
                            <div className="media-entry">
                                <a href="#">
                                    <img src="images/gal_2.jpg" alt="Image" className="img-fluid"/>
                                </a>
                                <div className="bg-white m-body">
                                    <span className="date">May 14, 2020</span>
                                    <h3><a href="#">Far far away, behind the word mountains</a></h3>
                                    <p>Vokalia and Consonantia, there live the blind texts. Separated they live.</p>

                                    <a href="single.html" className="more d-flex align-items-center float-start">
                                        <span className="label">Read More</span>
                                        <span className="arrow"><span
                                            className="icon-keyboard_arrow_right"></span></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
                            <div className="media-entry">
                                <a href="#">
                                    <img src="images/gal_3.jpg" alt="Image" className="img-fluid"/>
                                </a>
                                <div className="bg-white m-body">
                                    <span className="date">May 14, 2020</span>
                                    <h3><a href="#">Far far away, behind the word mountains</a></h3>
                                    <p>Vokalia and Consonantia, there live the blind texts. Separated they live.</p>
                                    <a href="single.html" className="more d-flex align-items-center float-start">
                                        <span className="label">Read More</span>
                                        <span className="arrow"><span
                                            className="icon-keyboard_arrow_right"></span></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
                            <div className="media-entry">
                                <a href="#">
                                    <img src="images/gal_4.jpg" alt="Image" className="img-fluid"/>
                                </a>
                                <div className="bg-white m-body">
                                    <span className="date">May 14, 2020</span>
                                    <h3><a href="#">Far far away, behind the word mountains</a></h3>
                                    <p>Vokalia and Consonantia, there live the blind texts. Separated they live.</p>
                                    <a href="single.html" className="more d-flex align-items-center float-start">
                                        <span className="label">Read More</span>
                                        <span className="arrow"><span
                                            className="icon-keyboard_arrow_right"></span></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Home