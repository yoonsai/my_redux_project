import {Fragment,useState,useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchBookList} from "../../actions/bookActions";
import {Link} from "react-router-dom";
import Pagination from "react-js-pagination";
export const BookList=()=>{
    const [title,setTitle]=useState('')
    const [curpage,setCurpage]=useState(1)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchBookList(curpage,title))

    },[title,curpage])
    const book_list=useSelector((state)=>state.books.book_list.list)
    const totalpage=useSelector((state)=>state.books.book_list.totalpage)
    console.log(totalpage)
    const findChange=(e)=>{
        setTitle(e.target.value)
    }
    const pageChange=(page)=>{
        setCurpage(page)
    }

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


            <div className="section" style={{"fontFamily":"Pretendard"}}>
                <div className="container" style={{"fontFamily":"Pretendard"}}>
                    <div className={"search_bar"}>
                        <input type={"text"} placeholder={"검색어를 입력해주세요"} className={"searchBar"} onChange={findChange} value={title}/>
                        <button className={"btn btn-primary"}>검색</button>
                    </div>
                    <div className="row align-items-stretch">
                        {
                            book_list &&
                            book_list.map((vo) =>
                                <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-4" data-aos-delay="100">
                                    <div className="media-entry">
                                        <Link to={"/book/detail/"+vo.no} style={{"height":"418px"}}>
                                            <img src={vo.poster} alt="Image"
                                                 className="img-fluid" style={{"height":"100%","objectFit":"cover","width":"100%"}}/>
                                        </Link>
                                        <div className="bg-white m-body">
                                            <span className="date">{vo.genre}</span>
                                            <h3 style={{"marginTop":"10px","fontSize":"19px","fontFamily":"Pretendard","overflow": "hidden",
                                                "white-space": "nowrap",
                                                "text-overflow": "ellipsis"}}><a href="index.html">{vo.title}</a></h3>
                                            <p style={{"fontFamily":"Pretendard","overflow": "hidden",
                                                "white-space": "nowrap",
                                                "text-overflow": "ellipsis"}}>{vo.author}</p>

                                            <div
                                               className="d-flex align-items-center float-end">
                                                <span className="label" style={{"color": "#f17945",
                                                    "font-size": "18px",
                                                    "font-weight": "700"}}>{vo.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <nav className="mt-5 " aria-label="Page navigation example" style={{"width":"50%","margin":"0 auto",
                            "display": "flex",
                            "justify-content": "center"}}
                             data-aos-delay="100">
                            <ul className="custom-pagination pagination">
                                    <Pagination
                                        activePage={curpage}
                                        itemsCountPerPage={12}
                                        totalItemsCount={totalpage}
                                        pageRangeDisplayed={10}
                                        prevPageText={"<"}
                                        nextPageText={">"}
                                        onChange={pageChange}
                                        itemClass="page-item"
                                        linkClass="page-link"
                                        innerClass="pagination"
                                        activeClass="active"
                                    />
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}