import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import GetProductLines from '../actions/GetProductLines';
import {bindActionCreators} from 'redux';

class NavBar extends Component{
    constructor(){
        super();
    }

    componentWillReceiveProps(newProps){

    }
    render(){
        if (this.props.auth.name !== undefined){
            var rightMenuBar = [
                <li className="">Welcome, {this.props.auth.name}</li>,
                <li><Link to="/cart">(0) items in your cart | ($0)</Link></li>, 
                <li><Link to="/logout"></Link></li>
            ]
        }else{
            var rightMenuBar = [
                <li><Link to="/login">Sign in</Link> or </li>
            ]
        }
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
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getProductLines: GetProductLines
    }, dispatch)
}

export default NavBar;