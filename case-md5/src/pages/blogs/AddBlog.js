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
        // console.log(state.user.currentUser.userCurrent);
        return state.user.currentUser.userCurrent;
    })
    const handleAdd = (values)=>{
        let data = {...values,user:{_id:users._id}}
        console.log(data)
        dispatch(addBlogs(data))
        navigate('/home')
    }
    return (
        <div className={'row'}>
            <div className="offset-3 col-6">
                <h1 style={{textAlign: "center"}}>Add Laptops</h1>
                <Formik initialValues={{name: '', price: '', quantity:''}} onSubmit={(values) => {
                   handleAdd(values)
                }}>
                    <Form>
                        <div className="group">
                            <label htmlFor="exampleInputEmail1">Name Laptop</label>
                            <Field type={'text'} name={'name'} className={'form-control'}/>

                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Price</label>
                            <Field type={'number'} name={'price'} className={'form-control'}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Quantity</label>
                            <Field type={'number'} name={'quantity'} className={'form-control'}/>
                        </div>
                        <button type="submit">Submit</button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default AddBlog;