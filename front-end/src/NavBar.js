import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div id="navbar">
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container-fluid navbar-white">
                        <div className="container">
                            <ul className="nav navbar-nav">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/shop">Shop</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="container-fluid navbar-default">
                        <div className="container">
                            <div className="navbar-header">
                                ClassicModels Logo
                            </div>
                            <div className="nav navbar-nav pull-right">
                                <li><Link to="/login">Sign</Link> in or <Link to="/register">Create Account</Link></li>
                                <li>items in cart | (0.00)</li>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;