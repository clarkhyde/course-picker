import React from 'react';
import { Link } from 'react-router-dom';


const LogoutButton =()=> {

const loggerOuter = (event)=>{
    sessionStorage.clear();
}

    return (
            <Link to="/" onClick={(event)=>{loggerOuter(event)}}>Logout</Link>
    );

};

export default LogoutButton;