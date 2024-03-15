import {useState, useRef, useEffect, Fragment} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {boardDelete} from "../../actions/boardActions";

function BoardDelete(){
    const {no} = useParams()
    const nav=useNavigate()
    const [pwd,setPwd]=useState('')
    const pwdRef=useRef(null)
    const dispatch=useDispatch()
    /*const pwdChange=(e)=>{
        setPwd(e.target.value)
    }*/
    useEffect(()=>{
        dispatch(boardDelete(no,pwd))
    },[pwd])

    const result=useSelector((state)=>state.boards.del_result)


    const boarddel=()=>{

        if(pwd.trim()==="")
        {
            pwdRef.current.focus()
            return
        }

        if(result==="yes" && result!=="")
        {
            window.location.href="/board/list"
        }
        else if(result==="no" && result!=="")
        {
            alert("비밀번호가 틀립니다")
            pwdRef.current.value=''
            pwdRef.current.focus()
        }

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
                    <div className={"row row1"}>
                        <h2 className={"text-center h2"} style={{"marginBottom": "50px"}}>비밀번호 입력</h2>
                        <table className={"table"}>
                        <tbody>
                            <tr className={"text-center"}>
                                <td style={{"borderBottomWidth":"0"}}>
                                    <input type={"password"} className={"input-sm"}
                                                ref={pwdRef} value={pwd}
                                                onChange={(e) => setPwd(e.target.value)}
                                />
                                </td>
                            </tr>
                            </tbody>
                            <tfoot style={{"borderTop": "0"}}>
                                <tr>
                                    <td className={"text-center"} style={{"borderBottomWidth": "0","height": "110px"}}>
                                        <input type={"button"} value={"삭제"}
                                               className={"btn"} onClick={boarddel} style={{"margin-right":"10px"}}
                                        />
                                        <button className={"btn"}
                                                onClick={() => nav(-1)}
                                        >취소
                                        </button>
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

export default BoardDelete