// Desc: Slogan component for the main page
//       This component is responsible for displaying the slogan of the page
//       It will be used in the main page of the application
//       It will be composed with other components to form the main page
// Usage: <Slogan />

import React from 'react';

const Slogan = () =>{
    
    return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-2">Discover Tomorrow’s Technology, Today</h2>
        <p className="text-gray-600">Explore Trends, Share Insights, Drive Innovation</p>
        <button className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300">Get Started</button>
      </div>
      <div className="hidden md:block">
        {/* <img src="/api/placeholder/300/300" alt="AI Time Management" className="rounded-full" /> */}
      </div>
    </div>
  );
}

export default Slogan;
  