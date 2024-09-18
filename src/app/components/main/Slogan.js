import React from 'react';

const Slogan = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-2">Discover Tomorrow's Technology, Today</h2>
        <p className="text-gray-600">Explore Trends, Share Insights, Drive Innovation</p>
        <button className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300">Get Started</button>
      </div>
      <div className="hidden md:block relative w-1/2 h-full">
        <div 
          className="absolute inset-0 shadow-inner"
          style={{
            clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)',
            boxShadow: 'inset 50px 20px 50px 10px rgba(255, 255, 255, 0.8)',
            overflow: 'hidden',
            zIndex: 1
          }}
        ></div>
        <img 
          src="per-2.jpg" 
          alt="AI Time Management" 
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)',
            zIndex: 0
          }}
        />
      </div>

    </div>
  );
}

export default Slogan;