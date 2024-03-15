import {Fragment,useState,useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate, useParams} from "react-router-dom";
import Pagination from "react-js-pagination";
import {fetchBookDetail} from "../../actions/bookActions";
export const BookDetail=()=>{
    const dispatch=useDispatch()
    const nav=useNavigate()
    const {no}=useParams()
    useEffect(()=>{
        dispatch(fetchBookDetail(no))
    },[])
    const vo=useSelector((state)=>state.books.book_detail)
    console.log(vo)
    return (
        <Fragment>
            <div className="hero overlay">

                <div className="img-bg">
                    <img src="http://localhost:3000/images/books_1.png" alt="Image" className="img-fluid"/>
                </div>
                <div className="container">
                    <div className="row align-items-center justify-content-start">
                        <div className="col-lg-6 mx-auto text-center">

                            <h1 className="heading">Books</h1>
                        </div>
                    </div>
                </div>
            </div>


            <div className="section section-2">
                <div className="container" style={{"width":"1180px"}}>
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-6 order-lg-1 mb-5 mb-lg-0">
                            <div className="image-stack mb-5 mb-lg-0">
                                <div className="image-stack__item image-stack__item--bottom" style={{"width":"100%"}}>
                                    <img src={vo.poster} alt="Image" className="img-fluid rellax " style={{"width": "83%",
                                        "height": "600px",
                                        "object-fit": "cover"}}/>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6 order-lg-2">

                            <div style={{"fontFamily": "pretendard"}}>
                                <h2 className="heading mb-6"
                                    style={{"fontFamily": "pretendard", "marginBottom": "62px"}}
                                    data-aos-delay="100">{vo.title}</h2>
                                <div className={"bookTitleSub"}>
                                    <p data-aos-delay="200" className={"titleSubLeft"}>저자</p>
                                    <p data-aos-delay="200" className={"titleSubRight"}>{vo.author}</p>
                                </div>
                                <div className={"bookTitleSub"}>
                                    <p data-aos-delay="200" className={"titleSubLeft"}>출판사</p>
                                    <p data-aos-delay="200" className={"titleSubRight"}>{vo.publ}</p>
                                </div>
                                <div className={"bookTitleSub"}>
                                    <p data-aos-delay="200" className={"titleSubLeft"}>장르</p>
                                    <p data-aos-delay="200" className={"titleSubRight"}>{vo.genre}</p>
                                </div>
                                <div className={"bookTitleSub"}>
                                    <p data-aos-delay="200" className={"titleSubLeft"}>출판일</p>
                                    <p data-aos-delay="200" className={"titleSubRight"}>{vo.b_date}</p>
                                </div>
                                <div className={"bookTitleSub"}>
                                    <p data-aos-delay="200" className={"titleSubLeft"}>가격</p>
                                    <p data-aos-delay="200" className={"titleSubRight price"}>{vo.price}</p>
                                </div>
                                {/*<p data-aos-delay="200" className={"price"}>30,000원</p>*/}

                                <p className="my-4" data-aos-delay="300"><a href="#"
                                                                            className="btn btn-primary backBtn" onClick={()=>nav(-1)}>목록</a></p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="section">
                <div className="container" style={{"width": "1180px"}}>
                    <div className="row mb-5" style={{"borderBottom": "1px solid #e5e5e5"}}>
                        <div className="col-lg-6 mx-auto text-center">
                            <div className="heading-content">
                                <h2 className="heading" style={{"font-size": "37px"}}>Info</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            {(vo.content && vo.content !== '이미지 정보가 없습니다.') ? (
                                <a href="#" className="person">
                                    <img src={vo.content} alt="Image" className="img-fluid mb-4"
                                         style={{"width": "100%"}}/>
                                </a>
                            ) : (
                                <h3 style={{"textAlign":"center","fontFamily":"pretendard"}}>이미지가 없습니다.</h3>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}