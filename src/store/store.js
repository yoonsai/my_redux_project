import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk"; // 미들웨어 / 비동기
import rootReducer from '../reducers/index';
import { createLogger } from 'redux-logger/src';
import axios from "axios"; // axios 모듈 전체를 가져옴

const logger = createLogger(); // logger 생성

const middleware = [thunk, logger];

// configureStore 함수를 사용하여 store 생성
const store = configureStore({
    reducer: rootReducer,
    devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});

export default store;
