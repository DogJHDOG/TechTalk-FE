'use client';
import React, { useState, useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

const Conferences = () => {
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimationControls();

  const conferences = [
    { name: "SLASH - 24", date: "June 15-17, 2024", location: "San Francisco, CA", imageURL: '/toss-slash24.jpg' },
    { name: "WOOWACON - 2023", date: "July 22-24, 2024", location: "London, UK", imageURL: '/wowacon2023.png' },
    { name: "WOOWACON - 2022", date: "August 5-7, 2024", location: "Tokyo, Japan", imageURL: '/wowacon2022.png' },
    { name: "DevCon 2024", date: "September 10-12, 2024", location: "Berlin, Germany", imageURL: '/wowacon2023.png' },
    { name: "TechSummit 2024", date: "October 18-20, 2024", location: "New York, NY", imageURL: '/telktalks-final2.png' },
  ];

  // Double the array to create a seamless loop
  const doubledConferences = [...conferences, ...conferences];

  useEffect(() => {
    controls.start({
      x: [0, -25 * conferences.length + '%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "linear",
        },
      },
    });
  }, [conferences.length, controls]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section className="py-32 bg-gradient-to-b from-gray-100 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-gray-800 text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Recent Tech Conferences
        </motion.h2>
        <div className="relative overflow-hidden">
          <motion.div 
            className="flex"
            animate={controls}
          >
            {doubledConferences.map((conf, index) => (
              <motion.div 
                key={`${conf.name}-${index}`}
                className="w-full md:w-1/4 flex-shrink-0 px-4"
                whileHover={{ scale: 1.05 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="relative">
                    <img src={conf.imageURL} alt={conf.name} className="w-full h-56 object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-lg font-semibold">View Details</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-gray-800 text-xl font-semibold mb-2">{conf.name}</h3>
                    <p className="text-gray-600 mb-2">{conf.date}</p>
                    <p className="text-gray-600 mb-4">{conf.location}</p>
                    <a href="#" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors duration-300">
                      Learn More
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
            View All Conferences
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Conferences;
