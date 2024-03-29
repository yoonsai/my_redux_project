import {BOARD_LIST,BOARD_PAGE,BOARD_DETAIL,BOARD_INSERT,BOARD_DELETE,BOARD_UPDATE,BOARD_UPDATE_DATA,BOARD_MAIN_LIST} from "../actions/types";

const boardState={
    board_list:[],
    board_detail:{},
    total:0,
    result:'',
    update_data:{},
    up_result:'',
    del_result:'',
    board_main_list:[]
}

export default function (state=boardState,action){
    switch (action.type)
    {
        case BOARD_LIST:
            return{
                ...state,
                board_list:action.payload
            }
        case BOARD_PAGE:
            return{
                ...state,
                total:action.payload
            }
        case BOARD_DETAIL:
            return{
                ...state,
                board_detail:action.payload
            }
        case BOARD_INSERT:
            return{
                ...state,
                result:action.payload
            }
        case BOARD_DELETE:
            return{
                ...state,
                del_result:action.payload
            }
        case BOARD_UPDATE_DATA:
            return{
                ...state,
                update_data:action.payload
            }
        case BOARD_UPDATE:
            return{
                ...state,
                up_result:action.payload
            }
        case BOARD_MAIN_LIST:
            return{
                ...state,
                board_main_list:action.payload
            }
        default:
            return state
    }
}