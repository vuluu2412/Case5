import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getBlogs} from "../../services/blogsService";
import {login} from "../../services/userService";


function ListBlog() {
    const dispatch = useDispatch();
    const blogs = useSelector(state => {
        console.log(state.blogs.blogs)
        return state.blogs.blogs;
    })
    const userName = useSelector(state => {
        return state.user?.currentUser?.userCurrent;
    })
    useEffect(() => {
        dispatch(getBlogs());
    }, [])
    return (
        <div className={'row'}>
            <div className="col-12" style={{textAlign: "center"}}>
                <h1>List Blog</h1>
                <table className="table table-striped">
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">UserName</th>
                    </tr>
                </table>
                {blogs.map((item, index) => {
                if (item.user.username === userName.username)
                        return (
                            <table className="table table-striped">
                                <tbody>
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.user.username}</td>
                                </tr>
                                </tbody>
                            </table>
                        )
                    else return <>
                    </>
                })
                }
            </div>
        </div>
    );
}

export default ListBlog;