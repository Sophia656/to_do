import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='navbar__links'>
                <Link className='navbar__link' to='/'>To Do</Link>
                <Link className='navbar__link' to='/trash'>Trash</Link>
            </div>
        </div>
    );
};

export default NavBar;