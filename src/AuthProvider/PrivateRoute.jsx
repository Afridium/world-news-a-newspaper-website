import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading} = use(AuthContext);
    const location = useLocation();
    console.log(location);
    if(loading){
        return(
            <div className='w-full h-dvh'>
                <div className='w-full h-full flex justify-center items-center'>
                  <span className="loading loading-ring loading-xl"></span>   
                </div>
            </div>
        ) ;
    }
    if(user && user?.email){
        return children;
    }else{
        return <Navigate state={location.pathname} to="/auth/login"></Navigate> //state sets a state and sends it to the loginpage if clicked from readmore
    }
};

export default PrivateRoute;