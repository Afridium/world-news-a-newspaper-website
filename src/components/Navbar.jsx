import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
// import userpp from '../assets/user.png'
import { AuthContext } from '../AuthProvider/AuthContext';
import Swal from 'sweetalert2';
import { PiHandWaving } from "react-icons/pi";
const Navbar = () => {
    const { user, logOut } = use(AuthContext);
    //console.log(user);
    const handleLogOut = () => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Logged Out Successfully",
            showConfirmButton: false,
            timer: 1500
        });
        logOut();
    }
    return (
        <div className='flex items-center justify-between gap-3.5 py-3.5'>
            <div className='lg:w-[34%]'>
                {
                    user && <p className='text-accent flex'><PiHandWaving size={25} />Hello, {user.displayName || user.email}</p>
                }
            </div>
            <div className='flex gap-3.5 justify-center text-accent lg:w-[33%]'>
                <NavLink to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className='flex items-center justify-end lg:w-[33%] gap-1.5'>
                {/* <img src={userpp} alt="" /> */}
                {
                    user ? (<button onClick={handleLogOut} className='btn btn-primary px-9'>Logout</button>) : (<Link to="/auth/login" className='btn btn-primary px-9'>
                        Login
                    </Link>)
                }
            </div>
        </div>
    );
};

export default Navbar;