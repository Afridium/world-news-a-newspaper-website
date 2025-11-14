import React from "react";
import { FaEye, FaShareAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
const NewsCard = ({ news }) => {

  const {
    title,
    rating,
    total_view,
    author,
    image_url,
    details,
  } = news;

  // Format date
  const formattedDate = new Date(news.author.published_date).toLocaleDateString();

  return (
    <div className="bg-base-200 shadow p-5">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4 bg-base-200 p-2">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt="author"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-base">{author.name}</h2>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>

        <button className="text-xl flex gap-2.5 items-center text-gray-500 hover:text-gray-700">
            <CiBookmark size={25} />
          <FaShareAlt />
        </button>
        
      </div>
<hr className="border-t border-accent mb-4 mx-auto"/>
      {/* Title */}
      <h1 className="text-xl font-bold mb-4 leading-snug">
        {title}
      </h1>

      {/* Thumbnail Image */}
      <img
        src={image_url}
        alt="thumbnail"
        className="w-full h-64 object-cover rounded-lg mb-4"
      />

      {/* Details */}
      <p className="text-accent leading-relaxed mb-2">
        {details.slice(0, 200)}...
      </p>

      <button className="text-[#FF8C47] font-semibold mb-4 hover:underline">Read More</button>

      {/* Footer */}
      <div className="flex items-center justify-between border-t pt-4">
        {/* Rating */}
        <div className="flex items-center gap-1 text-warning text-lg">
          {Array.from({ length: rating.number }).map((_, idx) => (
            <span key={idx}><FaStar /></span>
          ))}
          <span className="ml-2 text-accent text-sm">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-accent">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
