import React from 'react';
import Marquee from "react-fast-marquee";
const LatestNews = () => {
    return (
        <div className='flex items-center justify-start gap-3'>
            <p className='bg-secondary text-white px-4 py-2 font-semibold'>Latest</p>
            <Marquee pauseOnHover={true}>
                <p className='font-semibold text-primary mr-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, neque!</p>
                <p className='font-semibold text-primary mr-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, neque!</p>
                <p className='font-semibold text-primary  mr-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, neque!</p>
            </Marquee>
            
        </div>
    );
};

export default LatestNews;