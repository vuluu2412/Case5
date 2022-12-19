import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import ListBlog from "./pages/blogs/ListBlog";
import AddBlog from "./pages/blogs/AddBlog";
import LoginPage from "./pages/LoginPage";
import {useSelector} from "react-redux";

function App() {
    const user = useSelector(state => {
        return state.user.currentUser;
    })
    return (
        <>
            <div className="container-fluid">
                <Routes>
                    <Route path={''} element={<LoginPage></LoginPage>}></Route>
                    <Route path={'register'} element={<Register></Register>}/>
                    {
                        user != null ?
                            <Route path={'home'} element={<Home/>}>
                                <Route path={''} element={<ListBlog/>}></Route>
                                <Route path={'add-blog'} element={<AddBlog/>}></Route>
                            </Route>
                            :
                            <Route path="*" element={<LoginPage/>}/>
                    }
                </Routes>
            </div>
        </>
    );
}

export default App;
