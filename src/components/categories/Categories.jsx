import React, { use } from 'react';
import { NavLink } from 'react-router';
const CategoriesPromise = fetch('/categories.json').then(res => res.json());
const Categories = () => {
    const allcategories = use(CategoriesPromise);
    return (
        <div>
            <h2 className='font-bold mb-5'>All Categories ({allcategories.length})</h2>
            <div className='grid grid-cols-1'>
                {
                    allcategories.map(category => <NavLink to={`/catnews/${category.id}`} className={"btn bg-base-100 border-0 hover:bg-base-200 justify-start text-left text-accent"} key={category.id}>{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;