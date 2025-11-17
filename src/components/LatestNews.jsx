import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  const [latestNews, setLatestNews] = useState([]);

 useEffect(() => {
  fetch("/news.json")
    .then(res => res.json())
    .then(data => {
      const filtredNews = data.filter(result => result.others.is_today_pick == true);
            setLatestNews(filtredNews);
    })
    .catch(err => console.error(err));
}, []);

  return (
    <div className="flex items-center justify-start gap-3">
      <p className="bg-secondary text-white px-4 py-2 font-semibold">Latest</p>

      <Marquee pauseOnHover={true}>
        {latestNews.map(news => (
          <p key={news.id} className="font-semibold text-primary mr-5">
            {news.title}
          </p>
        ))}
      </Marquee>
    </div>
  );
};

export default LatestNews;
