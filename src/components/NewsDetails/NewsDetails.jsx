import React from 'react';
import { useLoaderData, useParams, Link } from 'react-router';
import RightAside from '../hhomelayout/RightAside';
import Navbar from '../Navbar';
import { FaLongArrowAltLeft } from "react-icons/fa";
const NewsDetails = () => {
    const { id } = useParams();
    console.log(id);
    const news = useLoaderData();

    const filteredNews = news.find(singlenews => singlenews.id == id);

    return (
        <div className='w-[70%] mx-auto'>
            <div className='mb-6'>
                <Navbar></Navbar>
            </div>
            <div className='grid grid-cols-12 gap-6'>

                <div className='col-span-9'>
                    <img src={filteredNews.image_url} className='w-full mb-3.5' alt="" />
                    <h2 className='font-bold text-3xl mb-2.5'>{filteredNews.title}</h2>
                    <div className='flex gap-3.5 justify-start items-center mb-3.5'>
                        <img src={filteredNews.author.img} className='w-8 rounded-4xl' alt="" />
                        <p className='text-accent'>{filteredNews.author.name}</p>
                    </div>
                    <p className='mb-6'>{filteredNews.details}</p>
                    <Link to="/" className='btn text-white bg-secondary'>Return to all Categories <FaLongArrowAltLeft />
                    </Link>
                </div>
                <div className='col-span-3'>
                    <RightAside></RightAside>
                </div>

            </div>

        </div>

    );
};

export default NewsDetails;