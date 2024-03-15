import {combineReducers} from "redux";
import boardReducer from "./boardReducer";
import bookReducer from "./bookReducer";
export default combineReducers({
    boards:boardReducer,
    books:bookReducer
})