'use client'
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md relative">

      {/* Overlay */}
      <div 
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`} 
        onClick={toggleMenu}
      ></div>

      {/* Sliding Menu */}
      <div 
        className={`fixed z-50 top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="px-4 py-6">
          <div className="space-y-4">
            <a href="main" className="block text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-2 py-1 rounded">Home</a>
            <a href="conferences" className="block text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-2 py-1 rounded">Conferences</a>
            <a href="trends" className="block text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-2 py-1 rounded">Trends</a>
            <a href="community" className="block text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-2 py-1 rounded">Community</a>
          </div>
          <div className="mt-6">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mt-6">
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">Sign In</button>
          </div>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <img src="/telktalks-final3.png" alt="TechTalk Central Logo" className="h-16" />
        <div className="flex-grow mx-8 hidden md:block">
          <input
            type="text"
            placeholder="Search conferences, speakers, topics..."
            className="w-full p-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <nav className="hidden md:flex items-center space-x-4">
          <a href="main" className="text-gray-600 hover:text-blue-600 transition">Home</a>
          <a href="conferences" className="text-gray-600 hover:text-blue-600 transition">Conferences</a>
          <a href="trends" className="text-gray-600 hover:text-blue-600 transition">Trends</a>
          <a href="community" className="text-gray-600 hover:text-blue-600 transition">Community</a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">Sign In</button>
        </nav>
        <button onClick={toggleMenu} className="md:hidden z-50 relative">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    
      
    </header>
  );
};

export default Header;