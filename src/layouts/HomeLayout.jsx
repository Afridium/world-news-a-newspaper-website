import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';

const HomeLayour = () => {
    return (
        <div className='poppins'>
            <header>

            </header>
            <main>
                {/* Left Nav */}
                <section>
                    <Header></Header>
                    <section className='bg-base-200 w-[90%] lg:w-[70%] mx-auto p-2.5 my-4'>
                        <LatestNews></LatestNews>
                    </section>
                    <div className='w-[80%] mx-auto'>
                        <Navbar></Navbar>
                    </div>
                    
                </section>

                {/* Main, changable section */}
                <section>
                    <Outlet></Outlet>
                </section>

                {/* Right Nav */}
                <section>
                    
                </section>
            </main>
        </div>
    );
};

export default HomeLayour;