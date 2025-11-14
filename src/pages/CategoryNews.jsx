import React from 'react';
import { useParams } from 'react-router';

const CategoryNews = () => {
    const {id} = useParams();
    console.log(id);
    return (
        <div>
            cat news
        </div>
    );
};

export default CategoryNews;