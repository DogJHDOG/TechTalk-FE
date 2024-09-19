'use client'
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = ({ images }) => {
  const defaultImages = [
    'open-ai.jpg',
    'open-ai.jpg',
    'open-ai.jpg',
    // 'https://via.placeholder.com/800x400?text=Sample+Image+2',
    // 'https://via.placeholder.com/800x400?text=Sample+Image+3'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const imageList = images && images.length > 0 ? images : defaultImages;

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [imageList.length]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imageList.length) % imageList.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div className="relative w-full h-96 overflow-hidden">
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {imageList.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {imageList.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className={`absolute w-full h-full object-cover transition-all duration-500 ease-in-out ${
                isTransitioning ? 'blur-sm' : 'blur-none'
              }`}
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2p-2 rounded-full z-20"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full z-20"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
      {/* bottom shadow */}
      <div 
        className="absolute bottom-0 left-0 h-48 w-full pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))',
        }}
      ></div>
    </div>
  );
};

export default ImageCarousel;