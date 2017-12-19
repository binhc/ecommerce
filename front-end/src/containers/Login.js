import React, {Component} from 'react';
import {Form, FormGroup, ControlLabel, FormControl, Button, Col, MenuItem} from 'react-bootstrap';
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import LoginAction from '../actions/LoginActions';

class Login extends Component{
    constructor(){
        super();
        this.state={
            error: ""
        }
       this.handleSubmit = this.handleSubmit.bind(this); 
    }
    handleSubmit(event){
        event.preventDefault();
        // console.log('handleSubmit running');
        const email = event.target[0].value;
        const password = event.target[1].value;
        const formData = {
            email:email, 
            password: password 
        }
        if (formData.email.length === 0){

        }else if(formData.password.length === 0){
            this.setState({
                error: "Password field cannot be empty"
            })
        }else{
            this.props.loginAction(formData);
        }
    }
    render() {
        return (
            <div className="register-wrapper">
                <h1 className="text-danger">{this.state.error}</h1>
                <Form horizontal>
                    <FormGroup controlId="formHorizontalName" validationState={this.state.nameError}>
                        <Col componentClass={ControlLabel} sm={2}>
                            Email
                        </Col>
                        <Col sm={10}>
                            <FormControl type="email" name="email" placeholder="Email" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalName" validationState={this.state.emailError}>
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col sm={10}>
                            <FormControl type="password" name="password" placeholder="Password" />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button bsStyle="success" bsSize="small" type="submit">
                                Login
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        auth: state.auth
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        loginAction: loginAction 
    }, dispatch); 
}

export default connect(mapStateToProps, mapDispatchToProps)(Login); 