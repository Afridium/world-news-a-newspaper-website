import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/hhomelayout/LeftAside';
import RightAside from '../components/hhomelayout/RightAside';

const HomeLayour = () => {
    return (
        <div className='poppins w-[90%] lg:w-[80%] mx-auto'>
            
                    <Header></Header>
                    <section className='bg-base-200 mx-auto p-2.5 my-4'>
                        <LatestNews></LatestNews>
                    </section>
                    <div  className='top-0 h-fit sticky bg-white'>
                        <Navbar></Navbar>
                    </div>
                
            <main className='grid grid-cols-12 gap-3'>
                {/* Left Nav */}
                <aside className='col-span-3 top-25 h-fit sticky'>
                    <LeftAside></LeftAside>
                </aside>

                {/* Main, changable section */}
                <section className='col-span-6'>
                    <Outlet></Outlet>
                </section>

                {/* Right Nav */}
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayour;