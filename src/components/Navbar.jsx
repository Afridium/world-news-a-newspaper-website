import React from 'react';
import { NavLink } from 'react-router';
import userpp from '../assets/user.png'
const Navbar = () => {
    return (
        <div className='flex items-center justify-between gap-3.5 mb-5'>
            <div className='lg:w-[34%]'></div>
            <div className='flex gap-3.5 justify-center text-accent lg:w-[33%]'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className='flex items-center justify-end lg:w-[33%] gap-1.5'>
                <img src={userpp} alt="" />
                <button className='btn btn-primary px-9'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;