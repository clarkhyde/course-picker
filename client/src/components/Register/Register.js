import React, { Component } from 'react';
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Register.scss';

const baseUrl = 'http://localhost:8080'
const registrationURL = `${baseUrl}/register`



class Register extends Component {
    state=({
        isRegistered: false
    })
    renderSignUp() {
        return (
          <div className='register'>
            <header className='register__header'>Register</header>
            <Form className='form' ref={form => (this.registrationForm = form)}>

            <Form.Group controlId="formBasicEmail">
                <Form.Label className="form-label"> Username:</Form.Label>
                <Form.Control type='text' name='username' placeholder="Enter Username"/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label className="form-label">Password:</Form.Label>
                <Form.Control type='password' name='password' placeholder ="Enter Password"/>
              </Form.Group>
              <Button className='btn btn-primary' onClick={this.registration}>
                Register
              </Button>
            </Form>
            <Link className="login__links" to="/login">Already Registered? Sign In</Link>
          </div>
        )
      }

    registration = (event) =>{
        event.preventDefault();
        const { username, password} = this.registrationForm;

        axios.post(registrationURL,{
            "username": username.value,
            "password": password.value,
        },{headers:{"Content-Type":"application/json"}})
        .then((response)=>{
            if(response.status === 200){
                this.setState({isRegistered: true});
            }
        })
        .catch((err)=>{
            console.log(err);
      })
  }

    render() {
        const { isRegistered } = this.state;
        if(!isRegistered) return this.renderSignUp();
        return (
            <div>
                {!isRegistered ? <div>Try again</div> : <Redirect to="/login"/>}
            </div>
        );
    }
}

export default Register;