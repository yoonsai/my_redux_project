import {BOARD_LIST, BOARD_PAGE, BOARD_DETAIL,BOARD_INSERT,BOARD_UPDATE,BOARD_UPDATE_DATA,BOARD_DELETE,BOARD_MAIN_LIST} from "../actions/types";
import axios from "axios";

export const fetchBoardList=(page)=>dispatch=>{
    axios.get('http://localhost/board/list_react',{
        params:{
            page:page
        }
    }).then(response=>dispatch({
        type:BOARD_LIST,
        payload:response.data
    }))
}

export const fetchBoardTotal=()=>dispatch=>{
    axios.get('http://localhost/board/total_react').then(response=>dispatch({
        type:BOARD_PAGE,
        payload:response.data
    }))
}
export const fetchBoardDetail=(no)=>dispatch=>{
    axios.get('http://localhost/board/detail_react',{
        params:{
            no:no
        }
    }).then(response=>dispatch({
        type:BOARD_DETAIL,
        payload:response.data
    }))
}

export const boardInsert=(insertData)=>dispatch=>{
    axios.post('http://localhost/board/insert_react',null,{
        params:insertData
    }).then(response=>dispatch({
        type:BOARD_INSERT,
        payload:response.data
    }))

}
export const boardDelete=(no,pwd)=>dispatch=>{
    axios.post('http://localhost/board/delete_react',null,{
        params:{
            no:no,
            pwd:pwd
        }
    }).then(response=>{
        const action={
            type:BOARD_DELETE,
            payload:response.data
        }
        dispatch(action)
    })

}

export const boardUpdateData=(no)=>dispatch=>{
    axios.get('http://localhost/board/update_react',{
        params:{
            no:no
        }
    }).then(response=>dispatch({
        type:BOARD_UPDATE_DATA,
        payload:response.data
    }))

}

export const boardUpdateOk=(updateData)=>dispatch=>{
    axios.post('http://localhost/board/update_ok_react',null,{
        params:updateData
    }).then(response=>dispatch({
        type:BOARD_UPDATE,
        payload:response.data
    }))

}

export const boardMainList=()=>dispatch=>{
    axios.get('http://localhost/board/main_react').then(response=>dispatch({
        type:BOARD_MAIN_LIST,
        payload:response.data
    }))
}