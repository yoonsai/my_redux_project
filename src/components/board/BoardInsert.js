import {Fragment, useState,useRef} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {boardInsert} from "../../actions/boardActions";

function BoardInsert(){
    const nav=useNavigate()
    const [name,setName]=useState('')
    const [subject,setSubject]=useState('')
    const [content,setContent]=useState('')
    const [pwd,setPwd]=useState('')
    // 태그를 제어 => focus , 비활성,활성화 => useRef
    const nameRef=useRef(null)
    const subjectRef=useRef(null)
    const contentRef=useRef(null)
    const pwdRef=useRef(null)
    const dispatch=useDispatch() // action에 등록된 함수 연결
    const nameChange=(e)=>{
        setName(e.target.value)
    }
    const subjectChange=(e)=>{
        setSubject(e.target.value)
    }
    const contentChange=(e)=>{
        setContent(e.target.value)
    }
    const pwdChange=(e)=>{
        setPwd(e.target.value)
    }
    const insert=()=>{
        if(name.trim()==="")
        {
            nameRef.current.focus()
            return
        }
        if(subject.trim()==="")
        {
            subjectRef.current.focus()
            return
        }
        if(content.trim()==="")
        {
            contentRef.current.focus()
            return
        }
        if(pwd.trim()==="")
        {
            pwdRef.current.focus()
            return
        }

        const params={
            name:name,
            subject:subject,
            content:content,
            pwd:pwd
        }
        dispatch(boardInsert(params))

    }
    const result=useSelector((state)=>state.boards.result)
    if(result==='yes')
    {
        window.location.href="/board/list"
    }
    else if(result==='no'){
        alert("게시판 추가에 실패하셨습니다")
    }

    return (
        <Fragment>
            <div className="hero overlay">

                <div className="img-bg rellax">
                    <img src="../images/hero_2.jpg" alt="Image" className="img-fluid"/>
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
                        <h2 className={"text-center h2"}>글쓰기</h2>
                        <table className={"table"}>
                            <tbody>
                            <tr>
                                <td width={"15%"} className={"text-center thtitle"}>이름</td>
                                <td width={"85%"}>
                                    <input type={"text"} size={"15"} className={"input-sm input"}
                                           onChange={nameChange} value={name} ref={nameRef}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td width={"15%"} className={"text-center thtitle"}>제목</td>
                                <td width={"85%"}>
                                    <input type={"text"} size={"50"} className={"input-sm input"}
                                           onChange={subjectChange} value={subject} ref={subjectRef}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td width={"15%"} className={"text-center thtitle"}>내용</td>
                                <td width={"85%"}>
                                    <textarea rows={"10"} cols={"52"} onChange={contentChange}
                                              ref={contentRef} className={"input"}>{content}</textarea>
                                </td>
                            </tr>
                            <tr>
                                <td width={"15%"} className={"text-center thtitle"}>비밀번호</td>
                                <td width={"85%"}>
                                    <input type={"password"} size={"15"} className={"input-sm input"}
                                           onChange={pwdChange} value={pwd} ref={pwdRef}
                                    />
                                </td>
                            </tr>

                            </tbody>
                            <tfoot>
                            <tr>
                                <td colSpan={"2"} className={"text-center"} style={{"borderBottomWidth": "0"}}>
                                    <input type={"button"} className={"btn"}
                                           value={"글쓰기"} onClick={insert} style={{"marginRight": "10px"}}/>
                                    <input type={"button"} className={"btn"}
                                           value={"취소"}
                                           onClick={() => nav(-1)}
                                    />
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

export default BoardInsert