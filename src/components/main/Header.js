import {Fragment} from "react";
import {Link} from "react-router-dom";
function Header(){
    return(
        <Fragment>
            <div className="site-mobile-menu site-navbar-target">
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close">
                        <span className="icofont-close js-menu-toggle"></span>
                    </div>
                </div>
                <div className="site-mobile-menu-body"></div>
            </div>

            <nav className="site-nav mt-3">
                <div className="container">

                    <div className="site-navigation">
                        <div className="row Navi">
                            <div className="col-6 col-lg-3">
                                <a href="index.html" className="logo m-0 float-start">BookHive</a>
                            </div>
                            <div className="col-lg-6 d-none d-lg-inline-block text-center nav-center-wrap">
                                <ul className="js-clone-nav  text-right site-menu p-0 m-0">
                                    <li className="active"><a href="index.html">Home</a></li>
                                    <li><a href="about.html">Book</a></li>
                                    <li><Link to="/board/list">Board</Link></li>
                                </ul>
                            </div>
                            {/*<div className="col-6 col-lg-3 text-lg-end">*/}
                            {/*    <ul className="js-clone-nav d-none d-lg-inline-block text-end site-menu ">*/}
                            {/*        <li className="cta-button"><a href="contact.html">Contact Us</a></li>*/}
                            {/*    </ul>*/}

                            {/*    <a href="#"*/}
                            {/*       className="burger ms-auto float-end site-menu-toggle js-menu-toggle d-inline-block d-lg-none light"*/}
                            {/*       data-toggle="collapse" data-target="#main-navbar">*/}
                            {/*        <span></span>*/}
                            {/*    </a>*/}
                            {/*</div>*/}
                        </div>
                    </div>

                </div>
            </nav>
        </Fragment>
    )
}

export default Header