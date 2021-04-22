import React, { Component } from 'react';
import axios from 'axios'
import { Redirect,Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.scss';
const baseUrl = 'http://localhost:8080'
const loginURL = `${baseUrl}/login`


class Login extends Component {
    state = {
        isLoggedIn: false,
        isLoginError: false,
        errorMessage: ''
      }

    login = (event) =>{
        event.preventDefault();
        const { username, password } = this.loginForm;
    
        if(username.value === "" || password.value === ""){
          this.setState({
            isLoginError: true,
            errorMessage: "You must provide a username and password."
          })
          return;
        }
    
        axios.post(loginURL,{
          username: username.value,
          password: password.value
        })
        .then((response)=>{
          if(response.data.error){
            this.setState({
              isLoginError: true,
              errorMessage: response.data.error.message
            })
            return;
          } 
          console.log(response.data.token);
          sessionStorage.setItem("authToken", response.data.token)
          this.setState({
            isLoggedIn: true,
            isLoginEroor: false
          });
        })
        .catch((err)=>{
          console.log(err);
        });
      }

    renderLogin = () => {
        const { isLoginError, errorMessage } = this.state
        return (

          <div className="login">
            <header className="login__header">Login</header>
            {isLoginError && <label style={{color: 'red'}}>{errorMessage}</label>}

            <Form ref={form => (this.loginForm = form)}>
              <Form.Group>
                <Form.Label className='form-label' htmlFor="username">username: </Form.Label>
                <Form.Control type='text' name='username' placeholder="Enter user name"/>
              </Form.Group>  
              <Form.Group>
                <Form.Label className='form-label' htmlFor="password">Password: </Form.Label>
                <Form.Control type='password' name='password' placeholder="Enter Password"/>
              </Form.Group>
              <Button className='btn btn-primary' onClick={this.login}>
                Login
              </Button>
            </Form>
          <Link className="login__links" to="/register">Need to register?</Link>
          </div>
        )
      }



    render() {
        const { isLoggedIn } = this.state;
       if(!isLoggedIn) return this.renderLogin();
        return (
            <div>
                {!isLoggedIn ?<div>Try again</div>: <Redirect to="/course-picker"/>}
            </div>
        );
    }
}

export default Login;