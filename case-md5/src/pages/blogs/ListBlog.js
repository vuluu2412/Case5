import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getBlogs} from "../../services/blogsService";
import {login} from "../../services/userService";


function ListBlog() {
    return (
        <div className={'row'}>
            <div className="col-12" style={{textAlign: "center"}}>
                <h1>List Blog</h1>
                {blogs.map((item) => (
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                    </tr>
                ))}
            </div>
        </div>
    );
}
export default ListBlog;