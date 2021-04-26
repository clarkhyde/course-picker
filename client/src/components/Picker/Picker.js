import React, {useEffect} from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

const baseUrl = 'http://localhost:8080';
const coursesURL=`${baseURL}/courses`;

const Picker = () => {

    useEffect(()=>{
        axios.get()
    },[])

    let token = sessionStorage.getItem("authToken");
    return (
        !token ? <Redirect to="/login"/> : 
        <div>
            This page will have the random course generator.
            I want it to display stats on the side.
            The last 3 courses picked.
            Have an accept/reject button. on accept confirms it goes to list(count up and last date selected). On reject spin again.
            Once Course is selected, Modal for the accept or reject.
            <Link to="/courses">Course List</Link>


        </div>
    );
};

export default Picker;