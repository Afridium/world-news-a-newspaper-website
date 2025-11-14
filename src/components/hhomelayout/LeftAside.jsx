import React, { Suspense } from 'react';
import Categories from '../categories/categories';



const LeftAside = () => {

    return (
        <div>
            <Suspense fallback={<p>Loading Categories....</p>}>
               <Categories></Categories> 
            </Suspense>
            
        </div>
    );
};

export default LeftAside;