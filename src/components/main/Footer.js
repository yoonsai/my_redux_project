import {Fragment} from "react";
import {Link} from "react-router-dom";
function Footer(){
    return(
        <div className="site-footer">
            <div className="container">

                <div className="row">
                    <div className="col-lg-4">
                        <div className="widget">
                            <h3>About Passport<span className="text-primary">.</span> </h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                        <div className="widget">
                            <h3>Connect</h3>
                            <ul className="list-unstyled social">
                                <li><a href="#"><span className="icon-instagram"></span></a></li>
                                <li><a href="#"><span className="icon-twitter"></span></a></li>
                                <li><a href="#"><span className="icon-facebook"></span></a></li>
                                <li><a href="#"><span className="icon-linkedin"></span></a></li>
                                <li><a href="#"><span className="icon-pinterest"></span></a></li>
                                <li><a href="#"><span className="icon-dribbble"></span></a></li>
                            </ul>
                        </div> 
                    </div> 

                    <div className="col-lg-2 ml-auto">
                        <div className="widget">
                            <h3>Links</h3>
                            <ul className="list-unstyled float-left links">
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">News</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div> 
                    </div>

                    <div className="col-lg-2">
                        <div className="widget">
                            <h3>Company</h3>
                            <ul className="list-unstyled float-left links">
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">News</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div> 
                    </div> 


                    <div className="col-lg-3">
                        <div className="widget">
                            <h3>Contact</h3>
                            <address>43 Raymouth Rd. Baltemoer, London 3910</address>
                            <ul className="list-unstyled links mb-4">
                                <li><a href="tel://11234567890">+1(123)-456-7890</a></li>
                                <li><a href="tel://11234567890">+1(123)-456-7890</a></li>
                                <li><a href="mailto:info@mydomain.com">info@mydomain.com</a></li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="row mt-5">
                    <div className="col-12 text-center">
                        <p className="mb-0">Copyright &copy;<script>document.write(new Date().getFullYear());</script>. All Rights Reserved. &mdash; Designed with love by <a href="https://untree.co">Untree.co</a>Distributed By <a href="https:/themewagon.com" target="_blank">ThemeWagon</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer