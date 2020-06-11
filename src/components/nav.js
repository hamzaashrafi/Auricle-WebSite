import React from 'react'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

function Nav() {
    return (

        <header className="header header_style1">
            <div className="container">
                <div className="row">
                    <div className="col-md-9 col-lg-10">
                        <div className="logo"><Link to="/"><img src="./assets/images/logo.png" alt="#" /></Link></div>
                        <div className="main_menu float-right">
                            <div className="menu">
                                <ul className="clearfix">
                                    <li className="active"><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/service">Service</Link></li>
                                    <li><Link to="/screenshots">Screenshots</Link></li>
                                    <li><Link to="/pricing">Pricing</Link></li>
                                    <li><Link to="/team">Team</Link></li>
                                    <li><Link to="/contact  ">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-2">
                        <div className="right_bt"><a className="bt_main" href="index.html">Get Support</a> </div>
                    </div>
                </div>
            </div>
        </header>

    );
}

export default Nav
