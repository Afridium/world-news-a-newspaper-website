import React from 'react';
import Navbar from '../components/Navbar';
import LoginPage from '../pages/LoginPage';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='w-full h-lvh  bg-base-200'>
            <div className='w-[70%] mx-auto'>
            <Navbar></Navbar>
        </div>
        <div>
            <Outlet></Outlet>
        </div>
        </div>
        
    );
};

export default AuthLayout;