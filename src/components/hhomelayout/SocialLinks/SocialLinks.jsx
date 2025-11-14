import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
const SocialLinks = () => {
    return (
        <div>
            <div className="join join-vertical w-full">
                <button className="btn bg-base-100 join-item hover:bg-base-200"><FaFacebook />Facebook</button>
                <button className="btn bg-base-100 join-item hover:bg-base-200"><RiTwitterXLine />X.com</button>
                <button className="btn bg-base-100 join-item hover:bg-base-200"><FaInstagram />Instagram</button>
            </div>
        </div>
    );
};

export default SocialLinks;