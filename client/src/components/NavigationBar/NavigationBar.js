import LogoutButton from '../Logout/LogoutButton.js';
import { NavLink } from 'react-router-dom';
import './NavigationBar.scss';

import React from 'react';

const NavigationBar = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/courses">Courses</NavLink>
            <NavLink to="/picker">Pick a Course</NavLink>
            <LogoutButton/>
        </div>
    );
};

export default NavigationBar;