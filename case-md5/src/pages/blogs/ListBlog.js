import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getBlogs} from "../../services/blogsService";
import {login} from "../../services/userService";


function ListBlog() {
    const dispatch = useDispatch();
    const blogs = useSelector(state =>{
        console.log(state.blogs.blogs)
        return state.blogs.blogs;
    })
    useEffect(()=>{
        dispatch(getBlogs());
    },[])
    return (
        <div className={'row'}>
            <div className="col-12" style={{textAlign: "center"}}>
                <h1>List Blog</h1>
                {blogs.map((item,index) => (
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">{index+1}</th>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                        </tr>

                        </tbody>
                    </table>
                ))}
            </div>
        </div>
    );
}
export default ListBlog;