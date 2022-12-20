import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteBlogs, getBlogs} from "../../services/blogsService";



function MyBlogs() {
    const dispatch = useDispatch();
    const blogs = useSelector(state => {
        console.log(state.blogs.blogs)
        return state.blogs.blogs;
    })
    const userName = useSelector(state => {
        console.log(state.user)
        return state.user.currentUser;
    })
    useEffect(() => {
        dispatch(getBlogs());
    }, [])
    return (
        <div className={'row'}>
            <div className="col-12" style={{textAlign: "center"}}>
                <h1>My Blog</h1>
                <table className="table table-striped">
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Title</th>
                        <th scope="col">Content</th>
                        <th scope="col">Time</th>
                        <th scope="col">IdUser</th>
                    </tr>

                    {blogs.map((item, index) => {
                        if (item.idU===userName.id){
                        return (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{item.title}</td>
                                <td>{item.content}</td>
                                <td>{item.time}</td>
                                <td>{item.idU}</td>
                                <button>Edit</button>
                                <button onClick={() => {
                                    dispatch(deleteBlogs(item.id))
                                }}>Delete
                                </button>
                            </tr>
                        )}
                    })
                    }</table>
            </div>
        </div>
    );
}

export default MyBlogs;