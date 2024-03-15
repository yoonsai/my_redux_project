import {Fragment,useState,useEffect} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchBoardDetail} from "../../actions/boardActions";

function BoardDetail(){
    const {no}=useParams()
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchBoardDetail(no))
    },[dispatch])
    const detail=useSelector((state)=>state.boards.board_detail)
    return (
        <Fragment>
            <div className="hero overlay">

                <div className="img-bg rellax">
                    <img src="http://localhost:3000/images/sticky.png" alt="Image" className="img-fluid boardImage"/>
                </div>
                <div className="container">
                <div className="row align-items-center justify-content-start">
                        <div className="col-lg-6 mx-auto text-center">

                            <h1 className="heading">Board</h1>

                        </div>
                    </div>
                </div>
            </div>
            <div className={"section boardList"}>
                <div className={"container"}>
                    <div className={"row"}>
                        <h2 className={"text-center h1 h2"}>내용보기</h2>
                        <table className={"table"}>
                            <tbody>
                            <tr>
                                <td className={"text-center success"} width={"20%"}>번호</td>
                                <td className={""} width={"30%"}>{detail.no}</td>
                                <td className={"text-center success"} width={"20%"}>작성일</td>
                                <td className={""} width={"30%"}>{detail.regdate}</td>
                            </tr>
                            <tr>
                                <td className={"text-center success"} width={"20%"}>이름</td>
                                <td className={""} width={"30%"}>{detail.name}</td>
                                <td className={"text-center success"} width={"20%"}>조회수</td>
                                <td className={""} width={"30%"}>{detail.hit}</td>
                            </tr>
                            <tr>
                                <td className={"text-center success"} width={"20%"}>제목</td>
                                <td colSpan={"3"}>{detail.subject}</td>
                            </tr>
                            <tr>
                                <td className={"text-left"} height={"200"} colSpan={"4"} valign={"top"}>
                                    <pre style={{
                                        "whiteSpace": "pre-wrap",
                                        "backgroundColor": "white",
                                        "border": "none"
                                    }}>{detail.content}</pre>
                                </td>
                            </tr>
                            </tbody>
                            <tfoot>
                            <tr>
                                <td className={"text-right"} colSpan={"4"}>
                                    <Link to={"/board/update/" + no}
                                          className={"btn"} style={{"marginRight":"10px"}}
                                    >수정</Link>
                                    <Link to={"/board/delete/" + no}
                                          className={"btn"} style={{"marginRight":"10px"}}
                                    >삭제</Link>
                                    <Link to={"/board/list"}
                                          className={"btn"}
                                    >목록</Link>
                                </td>
                            </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default BoardDetail