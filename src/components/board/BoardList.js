import {Fragment,useEffect,useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {fetchBoardList,fetchBoardTotal} from "../../actions/boardActions";

function BoardList() {
    const dispatch=useDispatch()
    const [curpage,setCurpage]=useState(1)
    useEffect(() => {
        dispatch(fetchBoardList(curpage))

    }, [curpage]);
    useEffect(() => {
        dispatch(fetchBoardTotal())

    }, []);
    // store에 저장된 데이터 읽기
    const board_list=useSelector((state)=>state.boards.board_list)
    const total=useSelector((state)=>state.boards.total)
    const prevHandler=()=>{
        setCurpage(curpage>1?curpage-1:curpage)
    }
    const nextHandler=()=>{
        setCurpage(curpage<total?curpage+1:curpage)
        // render() => useEffect() 재호출
    }
    console.log(total)
    /*
                    dispatch(action함수)             dispatch(action)
                                                    type(요청),payload(결과값)
                React =============> action함수 호출 ===============> reducer ===============> store
                                         데이터값                                                 |

     */
    let html;
    if (board_list && board_list.length > 0) {
        html = board_list.map((vo) => (
            <tr key={vo.no}>
                <td className={"text-center"} width={"10%"}>{vo.no}</td>
                <td width={"45%"}>
                    <Link to={"/board/detail/" + vo.no} style={{"color":"black"}}>{vo.subject}</Link>
                </td>
                <td className={"text-center"} width={"15%"}>{vo.name}</td>
                <td className={"text-center"} width={"20%"}>{vo.regdate}</td>
                <td className={"text-center"} width={"10%"}>{vo.hit}</td>
            </tr>
        ));
    } else {
        html = (
            <tr>
                <td colSpan="5" className="text-center">게시물이 없습니다.</td>
            </tr>
        );
    }

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
                        <h2 className={"text-center h2"} style={{"font-family": "Pretendard Variable, sans-serif"}}>게시판</h2>
                        <table className={"table"}>
                            <tbody>
                            <tr>
                                <td>
                                    <Link to={"/board/insert"} className={"btn"}>새글</Link>
                                </td>
                            </tr>
                            </tbody>
                        </table>

                        <table className={"table"}>
                            <thead>
                            <tr className={"success"}>
                                <th className={"text-center"} width={"10%"}>번호</th>
                                <th className={"text-center"} width={"45%"}>제목</th>
                                <th className={"text-center"} width={"15%"}>이름</th>
                                <th className={"text-center"} width={"20%"}>작성일</th>
                                <th className={"text-center"} width={"10%"}>조회수</th>
                            </tr>
                            </thead>
                            <tbody>
                            {html}
                            </tbody>
                            <tfoot>
                            <tr>
                                <td colSpan={"5"} className={"text-center"}>
                                    <input type={"button"} className={"btn"} value={"이전"} style={{"marginRight": "13px"}} onClick={prevHandler}/>
                                    {curpage} page / {total} pages
                                    <input type={"button"} className={"btn"} value={"다음"}style={{"marginLeft": "13px"}} onClick={nextHandler}/>
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

export default BoardList