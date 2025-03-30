// src/components/LoadingAnimation.jsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const loadingSteps = ["Analyzing Content...", "Summarizing Content...", "Loading..."];

const LoadingAnimation = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % loadingSteps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-[50vh] mt-24 w-full">
      <div className="flex gap-2 mb-4">
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            className="w-6 h-6 rounded-full bg-blue-500"
            animate={{ y: [-10, 10, -10] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.p
          key={currentStep}
          className="md:text-4xl text-xl font-semibold text-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          {loadingSteps[currentStep]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export default LoadingAnimation;
