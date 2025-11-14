import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard/NewsCard';

const CategoryNews = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [catNews, setCatNews] = useState([]);
    useEffect(() => {

        if (id == "0") {
            setCatNews(data);
        } else if (id == "1") {
            const filtredNews = data.filter(result => result.others.is_today_pick == true);
            setCatNews(filtredNews);
        } else {
            const filtredNews = data.filter(result => result.category_id == id);
            setCatNews(filtredNews);
        }

    }, [data, id])
    return (
        <div>
            <h2 className='font-bold text-accent mb-5'>Total News: <span className='text-secondary'> {catNews.length}</span></h2>
            <div className='grid grid-cols-1 gap-5 px-1.5'>
                {
                    catNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;