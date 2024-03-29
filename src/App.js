import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Header from "./components/main/Header";
import Home from "./components/main/Home";
import Footer from "./components/main/Footer";
import BoardList from "./components/board/BoardList";
import BoardInsert from "./components/board/BoardInsert";
import BoardDetail from "./components/board/BoardDetail";
import BoardUpdate from "./components/board/BoardUpdate";
import BoardDelete from "./components/board/BoardDelete";
import {BookList} from "./components/book/BookList";
import {BookDetail} from "./components/book/BookDetail";
function App() {
    return (
        <Provider store={store}>
            <Router>
                <Header />
                <Routes>
                    <Route path={"/"} element={<Home />}/>
                    <Route path={"/board/list"} element={<BoardList/>}/>
                    <Route path={"/board/insert"} element={<BoardInsert/>}/>
                    <Route path={"/board/detail/:no"} element={<BoardDetail/>}/>
                    <Route path={"/board/update/:no"} element={<BoardUpdate/>}/>
                    <Route path={"/board/delete/:no"} element={<BoardDelete/>}/>
                    <Route path={"/book/list"} element={<BookList/>}/>
                    <Route path={"/book/detail/:no"} element={<BookDetail/>}/>
                </Routes>
                <Footer />
            </Router>
        </Provider>
    );
}

export default App;
