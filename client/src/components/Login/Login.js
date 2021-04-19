import axios from 'axios'
import React,{ useState, useRef } from 'react';
import { Redirect,Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.scss';
const baseUrl = 'http://localhost:8080';
const loginURL = `${baseUrl}/login`;

const Login = () => {
    const [isLoggedIn, setLogin]= useState(false);
    const [isLoginError, setLoginError]=useState(false);
    const inputEl = useRef(null);
    // const [errorMessage, setErrorMessage]=useRef(null);

    const login = (event) =>{
        event.preventDefault();
        console.log(event);
        console.log(event.target);
        if(event.target.username.value === "" || event.target.password.value === ""){
            setLoginError(true);
            // setErrorMessage("You must provide a username and password");
            // isLoginError: true,
            // errorMessage: "You must provide a username and password."
            return;
        }
        axios.post(loginURL,{
          username: event.target.username.value,
          password: event.target.password.value
        })
        .then((response)=>{
          if(response.data.error){
            setLoginError(true);
            // setErrorMessage(response.data.error.message);
            //   isLoginError: true,
            //   errorMessage: response.data.error.message
            return;
          }
          sessionStorage.setItem("authToken", response.data.token)
          setLogin(true);
          setLoginError(false);
            // isLoggedIn: true,
            // isLoginEroor: false
        })
        .catch((err)=>{
          console.log(err);
        });
    }

    const renderLogin = () => {
       // const { isLoginError, errorMessage } = this.state
        return (

          <div className="login">
            <header className="login__header">Login</header>
            {isLoginError && <label style={{color: 'red'}}>Incorrect Login</label>}

            <form ref={inputEl}>
                <label className='form-label' htmlFor="username">Username: </label>
                <input type='text' name='username' placeholder="Enter username"/>
                <label className='form-label' htmlFor="password">Password: </label>
                <input type='password' name='password' placeholder="Enter Password"/>
               <button className='btn btn-primary' type="submit" onSubmit={event=>login(event)}>
                Login
              </button> 
            </form>
          </div>
        )
      }
      if(!isLoggedIn) return renderLogin();
    return (
        <div>
            {!isLoggedIn ?<div>Try again</div>: <Redirect to="/course-picker"/>}
        </div>
    );
};

export default Login;