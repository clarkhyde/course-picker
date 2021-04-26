import React, {useEffect, useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from'uuid';
import CourseResultModal from '../CourseResultModal/CourseResultModal.js';
import useModal from '../../customHooks/useModal';

const baseURL = 'http://localhost:8080';
const coursesURL=`${baseURL}/courses`;

const Picker = () => {
    const [data, setCourses] = useState([]);
    const {isShowing, toggle} = useModal();

    useEffect(()=>{
        const token = sessionStorage.getItem("authToken");
        axios.get(coursesURL,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then((response)=>{
            console.log(response.data);
            setCourses(response.data);
        })
    },[])


    let token = sessionStorage.getItem("authToken");
    return (
        !token ? <Redirect to="/login"/> : !data ? <div>loading...</div> :
        <div>
            This page will have the random course generator.
            I want it to display stats on the side.
            The last 3 courses picked.
            Once Course is selected, Modal for the accept or reject.
            <Link to="/courses">Course List</Link>
            <button onClick={toggle}>Pick a Random Course</button>
            <ul>
                {data.map(item=>(
                    <li key={uuidv4()}>{item.course}</li>
                ))}
            </ul>
            <CourseResultModal
                isShowing={isShowing}
                hide={toggle}
                courses = {data.map(item=>item.course)}
            />
        </div>
    );
};

export default Picker;