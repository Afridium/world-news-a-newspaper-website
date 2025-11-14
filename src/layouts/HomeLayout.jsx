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
            <header>
                <section>
                    <Header></Header>
                    <section className='bg-base-200 mx-auto p-2.5 my-4'>
                        <LatestNews></LatestNews>
                    </section>
                    <div>
                        <Navbar></Navbar>
                    </div>
                </section>
            </header>
            <main className='grid grid-cols-12'>
                {/* Left Nav */}
                <aside className='col-span-3 '>
                    <LeftAside></LeftAside>
                </aside>

                {/* Main, changable section */}
                <section className='col-span-6 '>
                    <Outlet></Outlet>
                </section>

                {/* Right Nav */}
                <aside className='col-span-3 '>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayour;