import React, { useContext } from 'react';
import { AuthContext } from './context';
import s from './Login.module.css';

const Login = () => {

    const {setIsAuth} = useContext(AuthContext);

    const login = (e) => {
        e.preventDefault();
        setIsAuth(true);
    }

    return (
        <div className={s.login__wrapper}>
            <h1 style={{fontSize: '5rem'}}>ToDo</h1>
            <form onSubmit={login} className={s.login__form}>
                <h2 className={s.login__form_h2}>Log in to ToDo</h2>
                <input type="text" placeholder='User name' />
                <input type="password" placeholder='Password' />
                <button>Log in</button>
                <button>Create New Account</button>
            </form>
        </div>
    );
};

export default Login;