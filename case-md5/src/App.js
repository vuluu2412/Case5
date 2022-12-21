import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import RegisterPage from "./pages/RegisterPage";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import ListBlog from "./pages/blogs/ListBlog";
import AddBlog from "./pages/blogs/AddBlog";
import LoginPage from "./pages/LoginPage";
import {useSelector} from "react-redux";
import MyBlogs from "./pages/blogs/my-blogs";
import './components/demoBootstrap.css'
function App() {
    const user = useSelector(state => {
        return state.user.currentUser;
    })
    return (
        <>
            <div className="container-fluid">
                <Routes>
                    <Route path={''} element={<LoginPage></LoginPage>}></Route>
                    <Route path={'register'} element={<RegisterPage></RegisterPage>}/>
                    {
                        user != null ?
                            <Route path={'home'} element={<Home/>}>
                                <Route path={''} element={<ListBlog/>}></Route>
                                <Route path={'add-blog'} element={<AddBlog/>}></Route>
                                <Route path={'my-blogs'} element={<MyBlogs></MyBlogs>}></Route>
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
