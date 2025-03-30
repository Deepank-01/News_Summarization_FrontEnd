import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ img_url, web_url, content ,heading,channel,date }) => {
  
  const [dateOnly, timeWithZone] = date.split("T");
  const time = timeWithZone.replace("Z", "");
// console.log(dateOnly); // Output: 2025-03-30

  return (
    <div 
    className="bg-white/30 backdrop-blur-md
                w-[80vw] md:w-[40vw] h-[28rem] m-4 p-4 pt-0
               transition-all duration-300 ease-in-out 
               md:hover:scale-105 md:hover:shadow-[0px_10px_20px_-5px_rgba(0,0,0,0.3),5px_5px_15px_rgba(0,0,0,0.15)] 
               lg:hover:scale-110 lg:hover:shadow-[0px_15px_25px_-5px_rgba(0,0,0,0.4),5px_5px_20px_rgba(0,0,0,0.2)]
               shadow-[0px_8px_15px_-5px_rgba(0,0,0,0.25),5px_5px_15px_rgba(0,0,0,0.1)]
               
               relative overflow-hidden rounded-xl"
>
      {/* Glossy Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3), transparent 70%)',
          opacity: 0.7,
        }}
      />
      <div className='bg-red-900 rounded-t-2xl text-white font-bold  text-md flex items-center justify-center'>{channel}</div>
      <figure className="rounded-b-2xl overflow-hidden h-48">
        <img
          src={img_url}
          alt="News Image"
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="p-4 flex flex-col h-[calc(100%-12rem)] relative z-10">
        <h2 className="text-lg font-bold mb-2 text-gray-800">{heading}</h2>
        <p className="text-gray-600 mb-4 line-clamp-5 overflow-hidden">{content}</p>
        <div className="mt-auto flex justify-between">
        <div className=' text-md text-gray-400 '>Created on {dateOnly}  {time}GMT</div>
          <Link
            to={`/summarize/${encodeURIComponent(web_url)}/${encodeURIComponent(img_url)}/${encodeURIComponent(heading)}`}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 md:text-xl
             text-xs"
          >
            Read
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;