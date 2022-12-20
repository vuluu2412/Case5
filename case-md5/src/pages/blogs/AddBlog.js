import React, {useEffect} from 'react';
import {Field, Form, Formik} from "formik";
import {login} from "../../services/userService";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addBlogs} from "../../services/blogsService";

function AddBlog() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector(state =>{
        return state.user.currentUser;
    })
    const handleAdd = (values)=>{
        let data = {...values,idU:users.id,time:(new Date().getFullYear() + '/'+ (new Date().getMonth() + 1) + '/' + new Date().getDate())}
        dispatch(addBlogs(data))
        navigate('/home')
    }
    return (
        <div className={'row'}>
            <div className="offset-6 col-12">
                <h1 style={{textAlign: "center"}}>Add Blogs</h1>
                <Formik initialValues={{title: '', content: '', time:''}} onSubmit={(values) => {
                   handleAdd(values)
                }}>
                    <Form>
                        <div className="group">
                            <label htmlFor="exampleInputEmail1">Title</label>
                            <Field type={'text'} name={'title'} className={'form-control'}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Contents</label>
                            <Field type={'number'} name={'content'} className={'form-control'}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Status</label>
                            <Field type={'number'} name={'status'} className={'form-control'}/>
                        </div>
                        <button type="submit">Submit</button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default AddBlog;