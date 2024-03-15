import {BOOK_LIST, BOOK_MAIN_LIST, BOOK_DETAIL} from "./types";
import axios from "axios";

export const fetchBookList=(page,title)=>dispatch=>{
    axios.get('http://localhost/book/list_react',{
        params:{
            page:page,
            title:title
        }
    }).then(response=>dispatch({
        type:BOOK_LIST,
        payload:response.data
    }))
}

export const fetchBookDetail=(no)=>dispatch=>{
    axios.get('http://localhost/book/detail_react',{
        params:{
            no:no
        }
    }).then(response=>dispatch({
        type:BOOK_DETAIL,
        payload:response.data
    }))
}

export const BookMainList=()=>dispatch=>{
    axios.get('http://localhost/book/main_react').then(response=>dispatch({
        type:BOOK_MAIN_LIST,
        payload:response.data
    }))
}