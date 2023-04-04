import React from 'react';
import style from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <ul>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/team'}>Team</NavLink></li>
                <li><NavLink to={'/career'}>Career</NavLink></li>
                <li><NavLink to={'/portfolio'}>Portfolio</NavLink></li>
                <li><NavLink to={'/services'}>Services</NavLink></li>
            </ul>

        </header>
    );
};

export default Header;