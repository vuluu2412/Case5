import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import ListBlog from "./pages/blogs/ListBlog";
import AddBlog from "./pages/blogs/AddBlog";
import LoginPage from "./pages/LoginPage";

function App() {
    return (
        <>
            <div className="container-fluid">
                <Routes>
                    <Route path={''} element={<LoginPage></LoginPage>}></Route>
                    <Route path={'register'} element={<Register></Register>}></Route>
                    <Route path={'home'} element={<Home></Home>}>
                        <Route path={''} element={<ListBlog></ListBlog>}></Route>
                        <Route path={'add-blog'} element={<AddBlog></AddBlog>}></Route>
                    </Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
