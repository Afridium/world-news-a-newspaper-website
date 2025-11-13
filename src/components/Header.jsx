import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='flex flex-col justify-center text-center mt-12'>
            <img className='w-[70%] lg:w-[30%] mx-auto mb-5' src={logo} alt="" />
            <p className='opacity-50 text-xl mb-3'>Journalism Without Fear or Favour</p>
            <p className='font-semibold text-accent'>{format(new Date(), "EEEE,  MMMM MM,  yyyy")}</p>
        </div>
    );
};

export default Header;