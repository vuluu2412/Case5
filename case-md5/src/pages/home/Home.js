import React from 'react';
import Navbar from "../../components/Navbar";
import {Outlet} from "react-router-dom";

function Home() {
    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <Navbar></Navbar>
                </div>
                <div className={'row'} style={{textAlign : "center"}}>
                    <div className="col-12">
                        <Outlet></Outlet>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;