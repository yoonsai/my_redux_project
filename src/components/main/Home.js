import {Fragment,useState,useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {boardMainList} from "../../actions/boardActions";
import {BookMainList} from "../../actions/bookActions";
function Home(){
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(boardMainList())
        dispatch(BookMainList())
    },[])
    const bList=useSelector((state)=>state.boards.board_main_list)
    const bkList=useSelector((state)=>state.books.book_main_list)
    console.log(bList)
    console.log(bkList)
    const bHtml = bList.map((vo, index) =>
        <div className="accordion-item" key={index} style={{"fontFamily":"pretendard"}}>
            <h2 className="mb-0">
                <button className="btn btn-link" type="button" data-bs-toggle="collapse" style={{"fontFamily":"pretendard"}}
                        data-bs-target={`#collapse${index + 1}`} aria-expanded={index === 0 ? "true" : "false"}
                        aria-controls={`collapse${index + 1}`}>{vo.subject}
                </button>
            </h2>

            <div id={`collapse${index + 1}`} className={`collapse${index === 0 ? " show" : ""}`} aria-labelledby={`heading${index + 1}`}
                 data-bs-parent="#accordion_1">
                <div className="accordion-body">
                    {vo.content}
                </div>
            </div>
        </div>
    );
    const bkHtml=bkList.map((bvo)=>
        <div className="destination" style={{"width": "315px","height": "575px"}}>
            <div className="thumb" style={{"width": "315px","height": "433px"}}>
                <img src={bvo.poster} alt="Image" className="img-fluid" style={{"object-fit": "cover",
                        "width": "100%",
                        "height": "100%"}}/>

            </div>
            <div className="mt-4">
                <h3 style={{"fontFamily":"Pretendard","overflow": "hidden",
                    "white-space": "nowrap",
                    "text-overflow": "ellipsis"}}><a href="#" style={{"fontFamily": "pretendard", "fontSize": "22px"}}>{bvo.title}</a></h3>
                <span className="meta">{bvo.genre}</span>
            </div>
        </div>
    )

    return (
        <Fragment>
            <div className="hero overlay">

                <div className="img-bg rellax">
                    <img src="images/main.png" alt="Image" className="img-fluid" style={{"transform": "scale(1.2) translate(8%, -6%)"}}/>
                </div>

                <div className="container">
                    <div className="row align-items-center justify-content-start">
                        <div className="col-lg-5">
                            <h1 className="heading" data-aos="fade-up">BookHive</h1>
                            <p style={{"fontFamily": "pretendard", "margin-top": "25px"}} className="mb-5"
                               data-aos="fade-up">지금, 당신의 상상력을 자극할 새로운 이야기를 찾아보세요. <br/> 우리와 함께 지금 책의 세계로 떠나보세요!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section section-3" data-aos="fade-up" data-aos-delay="100">
                <div className="container">
                    <div className="row align-items-center justify-content-between  mb-5">
                        <div style={{"width": "300px"}} className="col-lg-5" data-aos="fade-up">
                            <h2 className="heading mb-3">BEST TOP4 BOOK</h2>
                        </div>
                    </div>

                </div>

                <div className="destination-slider-wrap">
                    <div className="destination-slider">
                        {bkHtml}

                    </div>
                </div>

            </div>

            <div className="section">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-5 mb-4 mb-lg-0 order-lg-2" data-aos="fade-up">
                            <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149320038.jpg" alt="Image" className="img-fluid"/>
                        </div>
                        <div className="col-lg-5" data-aos="fade-up" data-aos-delay="100">
                            <h2 className="heading mb-4">Discover the world through books.</h2>
                            <p style={{"fontFamily": "pretendard", "margin-top": "25px"}}>책을 읽으면, 끊임없이 성장하는 자신을 발견하게
                                됩니다. </p>
                            <p style={{"fontFamily": "pretendard", "margin-top": "20px"}}>
                                창의력과 상상력을 자극하며, 마음의 여행을 떠나는 기회를 만들어줍니다. </p>
                            <p style={{"fontFamily": "pretendard", "margin-top": "20px"}}>책을 통해 세상의 다양성을 경험하고, 새로운
                                관점을 받아들일 수 있습니다.
                            </p>
                            <p style={{"fontFamily": "pretendard", "margin-top": "20px"}}>또한, 책은 스트레스를 해소하고 자기 계발에 도움이
                                되며, 마음의 안정과 평화를 찾게 해줍니다. </p>
                            <p style={{"fontFamily": "pretendard", "margin-top": "20px"}}>당신의 성장과
                                풍요로운
                                삶을 위한 첫걸음, 지금 바로 책을 읽어보세요.</p>

                            <p className="my-4" data-aos="fade-up" data-aos-delay="200"><a href="#"
                                                                                           className="btn btn-primary" style={{"paddingBottom":"6px"}}>Read
                                more</a></p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="section">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-5 mb-4 mb-lg-0">
                            <img src="https://img.freepik.com/premium-vector/confused-man-wondering-looking-problem-solution-pensive-young-guy-frustrated-with-trouble_160308-7820.jpg" alt="Image" className="img-fluid"/>
                        </div>
                        <div className="col-lg-5 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="100">

                            <h2 className="heading mb-5"> Most Viewed<br/> Posts</h2>

                            <div className="custom-accordion" id="accordion_1">
                                {bHtml}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Home