import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router';

const Home = () => {
  const Api_key = import.meta.env.VITE_API_NEWS;
  const [cat, setcat] = useState("business");
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const options = ["business", "general", "world", "nation", "technology", "entertainment", "sports", "science", "health"];
  const descriptions = {
    business: "Get the latest insights and analysis on market trends, financial news, and economic updates.",
    general: "Stay informed with breaking news and the latest updates from around the world.",
    world: "Explore international news, global events, and impactful stories from around the globe.",
    nation: "Dive into the latest political and societal developments in your country.",
    technology: "Discover cutting-edge innovations, tech news, and digital trends.",
    entertainment: "Catch up on movies, shows, celebrity gossip, and entertainment news.",
    sports: "Follow live scores, match highlights, and sports news from all around.",
    science: "Uncover the wonders of science, research, and technological advancements.",
    health: "Get tips, advice, and the latest health and wellness updates."
  };
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://gnews.io/api/v4/top-headlines?category=${cat}&country=in&apikey=${Api_key}`
        );
        setdata(res?.data?.articles || []);
        console.log(res?.data?.articles)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };
    fetchData();
  }, [cat, Api_key]);

  // Featured card will be the first item, right cards the next 3, and remaining cards the rest
  const featuredCard = data[0];
  const rightCards = data.slice(1, 3);
  const remainingCards = data.slice(3);

  return (
    <div className='w-11/12 mx-auto mt-20'>
      <div className='w-full flex overflow-x-auto md:justify-center gap-4 py-4 mb-4 border-b-2 border-gray-300'>
        {options.map((item) => (
          <span
            key={item}
            className={`cursor-pointer px-2 md:px-4 py-1 text-base md:text-lg font-medium border-b-2 transition-all duration-300 ${cat === item ? "text-blue-600 border-blue-600" : "text-gray-600 border-transparent hover:text-blue-600"}`}
            onClick={() => setcat(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </span>
        ))}
      </div>
       
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loading"
            className="flex mx-auto items-center justify-center h-[70vh] mt-10 text-6xl font-extrabold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Loading news...
          </motion.div>
        ) : (
          <>
            <div className='mb-8'>
              <h1 className='text-3xl md:text-4xl font-bold mb-2'>{cat.charAt(0).toUpperCase() + cat.slice(1)}</h1>
              <p className='text-lg text-gray-600'>{descriptions[cat]}</p>
            </div>
            
            {/* Main content area */}
            {data.length > 0 && (
              <>
                {/* Featured section - only for md screens and larger */}
                <div className='md:flex hidden gap-6 mb-8'>
                  {/* Featured card (left) */}
                  {featuredCard && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className='flex-1'
                    >
                      <div className="bg-white/30 backdrop-blur-md w-full h-[120vh] rounded-xl overflow-hidden shadow-xl transform transition hover:scale-100 ">

                        <div className='bg-red-900 rounded-t-xl text-white font-bold text-lg flex items-center justify-center py-2'>
                          {featuredCard?.source?.name}
                        </div>
                        <figure className="h-1/2 overflow-hidden">
                          <img
                            src={featuredCard?.image}
                            alt="Featured News"
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </figure>
                        <div className="p-6 h-1/3 flex flex-col">
                          <Link
                           to={`/summarize/${encodeURIComponent(featuredCard?.url)}/${encodeURIComponent(featuredCard?.image)}/${encodeURIComponent(featuredCard?.title)}`}
                          className="text-2xl font-bold mb-3 text-gray-800 line-clamp-2 hover:cursor-pointer "
                          >
                            {featuredCard?.title}
                          </Link>
                          <p className="text-gray-600 mb-4 line-clamp-2 overflow-hidden">
                            {featuredCard?.description}
                          </p>
                          <div className="mt-auto flex justify-between items-center">
                            <div className='text-sm text-gray-500'>
                              {featuredCard?.publishedAt.split("T")[0]}
                            </div>
                            <Link
                              to={`/summarize/${encodeURIComponent(featuredCard?.url)}/${encodeURIComponent(featuredCard?.image)}/${encodeURIComponent(featuredCard?.title)}`}
                              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                            >
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  {/* Right cards (3 vertical) */}
                  <div className='w-1/3 flex flex-col gap-2'>
                    {rightCards.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className='h-full'
                      >
                        <Card
                          content={item?.description}
                          img_url={item?.image}
                          web_url={item?.url}
                          heading={item?.title}
                          channel={item?.source?.name}
                          date={item?.publishedAt}
                          isSmall={true}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Mobile layout - single column */}
                <div className='md:hidden space-y-6 mb-8'>
                  {data.slice(0, 4).map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className='w-full'
                    >
                      <div className="bg-white/30 backdrop-blur-md w-full rounded-xl overflow-hidden shadow-lg">
                        <div className='bg-red-900 text-white font-bold text-sm flex items-center justify-center py-1'>{item?.source?.name}</div>
                        <figure className="h-40 overflow-hidden">
                          <img
                            src={item?.image}
                            alt="News Image"
                            className="w-full h-full object-cover"
                          />
                        </figure>
                        <div className="p-4 flex flex-col">
                          <h2 className="text-lg font-bold mb-2 text-gray-800 line-clamp-2">{item?.title}</h2>
                          <p className="text-gray-600 mb-3 line-clamp-3 text-sm">{item?.description}</p>
                          <div className="mt-auto flex justify-between items-center">
                            <div className='text-xs text-gray-500'>{item?.publishedAt.split("T")[0]}</div>
                            <Link
                              to={`/summarize/${encodeURIComponent(item?.url)}/${encodeURIComponent(item?.image)}/${encodeURIComponent(item?.title)}`}
                              className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 transition"
                            >
                              Read
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Remaining cards (horizontal scroll for all screens) */}
                {remainingCards.length > 0 && (
                  <div className='mt-8'>
                    <h2 className='text-2xl font-bold mb-4'>More News</h2>
                    <div className='flex overflow-x-auto pb-4 gap-4 scrollbar-hide'>
                      {remainingCards.map((item, index) => (
                        <motion.div
                          key={index + 4} // Start from index 4
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className='flex-shrink-0'
                          style={{ width: '300px' }}
                        >
                          <Card
                            content={item?.description}
                            img_url={item?.image}
                            web_url={item?.url}
                            heading={item?.title}
                            channel={item?.source?.name}
                            date={item?.publishedAt}
                            isSmall={true}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;