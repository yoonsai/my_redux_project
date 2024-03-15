import {BOOK_LIST,BOOK_DETAIL,BOOK_MAIN_LIST} from "../actions/types";

const bookState={
    book_list:{},
    book_detail:{},
    book_main_list:[]
}

export default function (state=bookState,action){
    switch (action.type)
    {
        case BOOK_LIST:
            return{
                ...state,
                book_list:action.payload
            }
        case BOOK_DETAIL:
            return{
                ...state,
                book_detail:action.payload
            }
        case BOOK_MAIN_LIST:
            return{
                ...state,
                book_main_list:action.payload
            }
        default:
            return state
    }
}