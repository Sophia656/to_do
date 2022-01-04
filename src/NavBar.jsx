import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { AuthContext } from './components/context';

const NavBar = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);
    console.log(isAuth)

    return (
        <div className='navbar'>
            <span onClick={() => setIsAuth(false)}>Exit</span>
            <div className='navbar__links'>
                <Link className='navbar__link' to='/'>ToDo</Link>
                <Link className='navbar__link' to='/trash'>Trash</Link>
            </div>
        </div>
    );
};

export default NavBar;