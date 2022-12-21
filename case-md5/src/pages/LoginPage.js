import React, {useEffect} from 'react';
import {Link, Outlet, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getBlogs} from "../services/blogsService";
import {login} from "../services/userService";
import {Field, Form, Formik} from "formik";

function LoginPage() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => {
        return state.user.currentUser
    })
    // const check = user.message;
    const handleLogin = async (values) => {
        await dispatch(login(values))
        if (values.name == user.userName) {
            navigate('/home')
        } else {
            navigate('')
        }

    }

    return (
        <div className={'row'}>
            <div className="offset-3 col-6">
                <h1 style={{textAlign: "center"}}>Page Login</h1>
                <Formik initialValues={{name: '', password: ''}} onSubmit={(values) => {
                    handleLogin(values)
                }}>
                    <Form>
                        <div className="group">
                            <label htmlFor="exampleInputEmail1">Email address/ Username</label>
                            <Field type={'text'} name={'name'} className={'form-control'}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <Field type={'text'} name={'password'} className={'form-control'}/>
                        </div>
                        <button type="submit">Submit</button>
                        <button type="submit" className="ml-3">
                            <Link to={'register'}>Register</Link>
                        </button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default LoginPage;