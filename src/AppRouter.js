import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from './components/context';
import Login from './components/Login';
import { privateRoutes, publicRoutes } from './router/router';

const AppRouter = () => {

    const {isAuth} = useContext(AuthContext);
    console.log('isAuth', isAuth)

    return (
        isAuth
        ?
        <Routes>
            {privateRoutes.map(route =>
                <Route 
                    element={route.element} 
                    path={route.path} 
                    exact={route.exact} 
                    key={route.path}
                />
            )}
        </Routes>
        :
        <Routes>
            {publicRoutes.map(route =>
                <Route 
                    element={route.element} 
                    path={route.path} 
                    exact={route.exact} 
                    key={route.path}
                />
            )}
            <Route path='/*' element={<Login />} />
      </Routes>
    );
};

export default AppRouter;