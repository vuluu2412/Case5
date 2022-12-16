import React from 'react';
import {Link} from "react-router-dom";

function Register() {
    return (
        <div className={'row'}>
            <div className="offset-3 col-6">
                <h1 style={{textAlign:"center"}}>Page Register</h1>
                <form>
                    <div className="group">
                        <label htmlFor="exampleInputEmail1">Email address/ Username</label>
                        <input type={'text'} name={'username'} className={'form-control'}/>

                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type={'text'} name={'password'} className={'form-control'}/>
                    </div>
                    <button type="submit" className="">Submit</button>
                    <button type="submit" className="ml-3" >
                        <Link  to={'/'}>Login</Link>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register;