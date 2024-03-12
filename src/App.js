import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Header from "./components/main/Header";
import Home from "./components/main/Home";
import Footer from "./components/main/Footer";
import BoardList from "./components/board/BoardList";
function App() {
    return (
        <Provider store={store}>
            <Router>
                <Header />
                <Routes>
                    <Route path={"/"} element={<Home />}/>
                    <Route path={"/board/list"} element={<BoardList/>}/>
                </Routes>
                <Footer />
            </Router>
        </Provider>
    );
}

export default App;
