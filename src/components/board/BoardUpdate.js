import {Fragment, useState, useEffect, useRef} from "react";
import axios from "axios";
import {useNavigate,useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {boardUpdateData} from "../../actions/boardActions";
import {boardUpdateOk} from "../../actions/boardActions";


function BoardUpdate(){
    const {no}=useParams()
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
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(boardUpdateData(no))
    },[])

    const update_data=useSelector((state)=>state.boards.update_data)
    useEffect(()=>{
        setName(update_data.name)
        setContent(update_data.content)
        setSubject(update_data.subject)
    },[update_data])
    useEffect(() => {
        dispatch(boardUpdateOk({
            name:name,
            subject:subject,
            content:content,
            pwd:pwd,
            no:no
        }))
    }, [pwd]);
    const up_result=useSelector((state)=>state.boards.up_result)
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
    const update=()=>{
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

        if(up_result==="yes")
        {
            window.location.href="/board/detail/"+no
        }
        else if(up_result==="no")
        {
            alert("비밀번호가 틀립니다!!")
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
                    <div className={"row"}>
                        <h2 className={"text-center h2"} style={{"marginBottom":"50px"}}>수정하기</h2>
                        <table className={"table"}>
                            <tbody>
                            <tr>
                                <td width={"15%"} className={"text-center thtitle"}>이름</td>
                                <td width={"85%"}>
                                    <input type={"text"} size={"15"} className={"input-sm"}
                                           onChange={nameChange} value={name} ref={nameRef}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td width={"15%"} className={"text-center thtitle"}>제목</td>
                                <td width={"85%"}>
                                    <input type={"text"} size={"50"} className={"input-sm"}
                                           onChange={subjectChange} value={subject} ref={subjectRef}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td width={"15%"} className={"text-center thtitle"}>내용</td>
                                <td width={"85%"}>
                        <textarea rows={"10"} cols={"52"} onChange={contentChange}
                                  ref={contentRef} value={content}>{content}</textarea>
                                </td>
                            </tr>
                            <tr>
                                <td width={"15%"} className={"text-center thtitle"}>비밀번호</td>
                                <td width={"85%"}>
                                    <input type={"password"} size={"15"} className={"input-sm"}
                                           onChange={pwdChange} ref={pwdRef} value={pwd}
                                    />
                                </td>
                            </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan={"2"} className={"text-center"}>
                                        <input type={"button"} className={"btn"}
                                               value={"수정"} onClick={update}/>
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

export default BoardUpdate