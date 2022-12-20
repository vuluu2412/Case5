import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {register} from "../services/userService";

function RegisterPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleRegister = async (values) =>{
        await dispatch(register(values));
        await navigate('/')
    }
    return (
        <div className={'row'}>
            <div className="offset-3 col-6">
                <h1 style={{textAlign: "center"}}>Page Register</h1>
                <Formik initialValues={{name: '',password:''}} onSubmit={(values)=>{
                    handleRegister(values)
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
                        <button type="submit" className="">Submit</button>
                        <button type="submit" className="ml-3">
                            <Link to={'/'}>Login</Link>
                        </button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default RegisterPage;