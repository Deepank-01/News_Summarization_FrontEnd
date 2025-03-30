import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import { motion, AnimatePresence } from 'framer-motion';

const Home = () => {
  const Api_key = import.meta.env.VITE_API_NEWS;
  const [cat, setcat] = useState("business");
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const options = ["business", "general", "world", "nation", "technology", "entertainment", "sports", "science", "health"];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://gnews.io/api/v4/top-headlines?category=${cat}&country=in&apikey=${Api_key}`
        );
        setdata(res?.data?.articles || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };
    fetchData();
  }, [cat, Api_key]);

  return (
    <div className='w-11/12 mx-auto mt-20 flex flex-wrap md:justify-evenly gap-2  '>
      <div className='flex flex-wrap gap-2 md:gap-4 items-center justify-evenly  border-b-2 border-gray-300 py-4 mb-4 bg-white shadow-sm rounded-lg'>
        {options.map((item) => (
          <motion.button
            key={item}
            className={`px-4 py-2 md:px-8 md:py-3 text-lg font-medium rounded-full transition-all duration-300 ${cat === item ? "bg-blue-600 text-white shadow-lg scale-105" : "bg-blue-100 text-blue-700 hover:bg-blue-200"}`}
            onClick={() => setcat(item)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </motion.button>
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
          data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Card
                content={item?.description}
                img_url={item?.image}
                web_url={item?.url}
                heading={item?.title}
                channel={item?.source?.name}
                date={item?.publishedAt}
              />
            </motion.div>
          ))
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
