import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import SocialLinks from './SocialLinks/SocialLinks';
import Qzone from '../Qzone.jsx/Qzone';

const RightAside = () => {
    return (
        <div>
            <div className='mb-8'>
                <h3 className='font-bold mb-4 text-primary text-lg'>Login With</h3>
            <SocialLogin></SocialLogin>
            </div>
            
            <div className='mb-8'>
                <h3 className='font-bold mb-4 text-lg text-primary'>Find Us On</h3>
                <SocialLinks></SocialLinks>
            </div>
            <div className='bg-base-200 p-5'>
                <h3 className='font-semibold mb-4 text-lg text-primary'>Q Zone</h3>
                <Qzone></Qzone>
            </div>
        </div>
    );
};

export default RightAside;