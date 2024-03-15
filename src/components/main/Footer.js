import {Fragment} from "react";
import {Link} from "react-router-dom";
function Footer(){
    return(
        <div className="site-footer">
            <div className="container">

                <div className="row">
                    <div className="col-lg-4">
                        <div className="widget">
                            <h3>BookHive<span className="text-primary">.</span> </h3>
                            <p style={{"fontFamily":"pretendard"}}>지금, 당신의 상상력을 자극할 새로운 이야기를 찾아보세요.<br/>
                                우리와 함께 지금 책의 세계로 떠나보세요!</p>
                        </div>
                        <div className="widget">
                            <h3>Connect</h3>
                            <ul className="list-unstyled social">
                                <li style={{"marginRight": "5px"}}><a href="#"><span className="icon-instagram"></span></a></li>
                                <li style={{"marginRight": "5px"}}><a href="#"><span className="icon-facebook"></span></a></li>
                                <li style={{"marginRight": "5px"}}><a href="#"><span className="icon-dribbble"></span></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 ml-auto">
                        <div className="widget">
                            <h3>Links</h3>
                            <ul className="list-unstyled float-left links">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Book</a></li>
                                <li><a href="#">Board</a></li>
                            </ul>
                        </div> 
                    </div>

                    <div className="col-lg-4">
                        <div className="widget">
                            <h3>Contact</h3>
                            <address>경기도 김포시 수기로 67-54</address>
                            <ul className="list-unstyled links mb-4">
                                <li><a href="tel://11234567890">010-4152-2729</a></li>
                                <li><a href="mailto:info@mydomain.com">micelle0716@naver.com</a></li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="row mt-5">
                    <div className="col-12 text-center">
                        <p className="mb-0">Copyright &copy;<script>document.write(new Date().getFullYear());</script>. All Rights Reserved. &mdash; <a href={"#"}>윤새영</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer