'use client';
import React, { useState, useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import ConferenceDashboard from './coferenceInteractive';
import { MilestoneIcon } from 'lucide-react';

const Conferences = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedConference, setSelectedConference] = useState(null);

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
  }, [conferences.length, controls, selectedConference]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleLearnMore = (conference) => {
    setSelectedConference(conference);
  };

  const handleCloseDashboard = () => {
    setSelectedConference(null);
  };

  const renderinit = () => {
    return (
      <div className="container mx-auto px-4">
        <div className="flex flex-row items-center gap-5 m-3">
          <MilestoneIcon/>
          <p className="text-2xl font-medium"> Recent Tech Conferences</p>
        </div>
        {/* div1 */}
        <div 
          className="relative p-4 pb-8 overflow-hidden"
          style={{
          }}
        >
          {/* Left shadow */}
          <div 
           className="absolute top-0 left-0 h-full w-32 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))',
              zIndex: 1,
            }}
          ></div>
          {/* motion div */}
          <motion.div 
            className="flex"
            animate={controls}
          >
            {doubledConferences.map((conf, index) => (
              // card
              <motion.div 
                key={`${conf.name}-${index}`}
                className="w-full md:w-1/4 flex-shrink-0 px-4"
                whileHover={{ scale: 1.05 }}
                onClick={() => handleLearnMore(conf)}
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
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          {/* Right shadow */}
          <div 
           className="absolute top-0 right-0 h-full w-32 pointer-events-none"
           style={{
              background: 'linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))',
              zIndex: 1,
            }}
          ></div>
        </div>
      </div>
    )
  }

  return (
    <section className="py-6 bg-gradient-to-b from-gray-100 to-white overflow-hidden">
      {selectedConference ? 
      <ConferenceDashboard onClose={handleCloseDashboard}/>
      : renderinit()}
    </section>
  );
}

export default Conferences;