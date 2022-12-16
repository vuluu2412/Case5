import React from 'react';
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div className="row">
            <div className='col-12'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to={'/home'}>Logo</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to={'add-blog'}>Add new blog <span
                                    className="sr-only">(current)</span></Link>
                            </li>
                        </ul>
                        <div>
                            <div className="nav-item dropdown mr-5">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                                   aria-expanded="false">
                                    Username
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#"> Edit Profile</a>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to={'/'}>Logout</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;