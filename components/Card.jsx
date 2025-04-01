import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ img_url, web_url, content, heading, channel, date, isSmall = false }) => {
  const [dateOnly, timeWithZone] = date?.split("T") || ["", ""];
  const time = timeWithZone?.replace("Z", "") || "";

  if (isSmall) {
    return (
      <div className="bg-white/30 backdrop-blur-md w-full h-full rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl">
        <div className='bg-red-900 text-white font-bold text-sm flex items-center justify-center py-1'>{channel}</div>
        <figure className="h-40 overflow-hidden">
          <img
            src={img_url}
            alt="News Image"
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="p-4 flex flex-col h-[calc(100%-12rem)]">
        <h2 className="text-xl font-bold mb-3 text-gray-800 line-clamp-2">{heading}</h2>
        <p className="text-gray-600 mb-4 line-clamp-4">{content}</p>
        <div className="mt-auto flex justify-between items-center">
          <div className='text-sm text-gray-500'>Created on {dateOnly} {time}GMT</div>
          <Link
            to={`/summarize/${encodeURIComponent(web_url)}/${encodeURIComponent(img_url)}/${encodeURIComponent(heading)}`}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Read
          </Link>
        </div>
      </div>
      </div>
    );
  }

  return (
    <div className="bg-white/30 backdrop-blur-md w-full h-[28rem] rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl">
      <div className='bg-red-900 text-white font-bold text-lg flex items-center justify-center py-2'>{channel}</div>
      <figure className="h-48 overflow-hidden">
        <img
          src={img_url}
          alt="News Image"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </figure>
      <div className="p-4 flex flex-col h-[calc(100%-12rem)]">
        <h2 className="text-xl font-bold mb-3 text-gray-800 line-clamp-2">{heading}</h2>
        <p className="text-gray-600 mb-4 line-clamp-4">{content}</p>
        <div className="mt-auto flex justify-between items-center">
          <div className='text-sm text-gray-500'>Created on {dateOnly} {time}GMT</div>
          <Link
            to={`/summarize/${encodeURIComponent(web_url)}/${encodeURIComponent(img_url)}/${encodeURIComponent(heading)}`}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Read
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;