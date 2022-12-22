import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteBlogs, getBlogs} from "../../services/blogsService";
import {login} from "../../services/userService";
import {getLikes} from "../../services/likeService";



function ListBlog() {
    const dispatch = useDispatch();
    const blogs = useSelector(state => {
        console.log(state.blogs.blogs)
        return state.blogs.blogs;
    })
    const likes = useSelector(state => {
        console.log('state.blogs.likes',state.likes.likes)
        return state.likes.likes;
    })
    const [like,setLike]= useState()

    useEffect(() => {
        dispatch(getBlogs());
    }, [])
    useEffect(() => {
        dispatch(getLikes());
    }, [])
    return (
        <>

            <div id="slides" className="carousel slide" data-ride="carousel">
                <ul className="carousel-indicators ">
                    <li data-target="#slides" data-slide-to="0" className="active"></li>
                    <li data-target="#slides" data-slide-to="1"></li>
                    <li data-target="#slides" data-slide-to="2"></li>
                </ul>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="">
                            <img style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                 src="https://i.vietnamdoc.net/data/image/2016/03/18/lich-su-ra-doi-ngay-26-3.jpg"></img>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://thanhnien.ntu.edu.vn/uploads/28/images/news/4951/img/tieu-chun-xep-loai-doan-vien.jpg"></img>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://file1.dangcongsan.vn/data/0/images/2022/10/18/minhchau/img-9233.jpg"></img>
                    </div>
                    <div className="carousel-caption">
                        <h1 className="display-2">Example</h1>
                        <h3>Autolayout with Boostrap</h3>
                        <button type="button" className="btn btn-outline-light btn-lg">
                            VIEW TUTORIALS
                        </button>
                        <button type="button" className="btn btn-primary btn-lg">Get Started</button>
                    </div>
                </div>
            </div>
            <br/>
            <div className="container-fluid padding">
                <div className="row text-center padding">
                    {blogs.map((item, index) => {
                        if (item.status === 1){
                            return (
                                <div className="col-xs-12 col-sm-6 col-md-4 imgCover mb-3">
                                    <img src={item.url} style={{width:300, height:300 ,objectFit:"cover"}}></img>
                                    <h3>{item.title}</h3>
                                    <p>{item.content}</p>
                                    <p>{item.time}</p>
                                    <p>{item.idU}</p>
                                    <button onClick={(values)=>{
                                        // values = {idU: itemB.idU, idP: itemB.id}
                                        // soLike = soLike + 1;
                                        // dispatch(likeBlog(values))
                                        // setLike(soLike)
                                    }}>Like</button>
                                </div>
                            )
                        } else return <></>
                    })
                    }
                </div>
            </div>
        </>
    );
}

export default ListBlog;