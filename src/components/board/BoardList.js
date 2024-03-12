import {Fragment,useEffect,useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {fetchBoardList,fetchBoardTotalpage} from "../../actions/boardActions";

function BoardList() {
    const dispatch=useDispatch()
    const [curpage,setCurpage]=useState(1)
    useEffect(() => {
        dispatch(fetchBoardTotalpage())
        dispatch(fetchBoardList(curpage))
    }, [curpage]);
    // store에 저장된 데이터 읽기
    const board_list=useSelector((state)=>state.boards.board_list)
    const total=useSelector((state)=>state.boards.total)
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
                <Link to={"/board/detail/"+vo.no}>
                    <td width={"45%"}>{vo.subject}</td>
                </Link>
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
        <div className={"row"}>
            <h3 className={"text-center"}>게시판</h3>
            <table className={"table"}>
                <tbody>
                <tr>
                    <td>
                        <Link to={"/board/insert"} className={"btn btn-sm btn-success"}>새글</Link>
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
                        <input type={"button"} className={"btn-sm btn-danger"} value={"이전"}/>
                        {curpage} page / {total} pages
                        <input type={"button"} className={"btn-sm btn-danger"} value={"다음"}/>
                    </td>
                </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default BoardList