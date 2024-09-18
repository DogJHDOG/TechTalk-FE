'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const keywords = [
  { text: "Tech", color: "#FF6B6B", main: true },
  { text: "Trends", color: "#4ECDC4" },
  { text: "Community", color: "#45B7D1" },
  { text: "Summary", color: "#F7B731" },
  { text: "Debates", color: "#6C5CE7" },
  { text: "Insights", color: "#26de81" }
];

const DynamicSloganDesign = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [size, setSize] = useState({ width: 1000, height: 600 });

  useEffect(() => {
    const updateSize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const treeLayout = () => {
    const centerY = size.height / 2;
    const techX = size.width * 0.3;
    const keywordsX = size.width * 0.7;
    const spacing = size.height / (keywords.length + 1);

    return keywords.map((keyword, index) => ({
      ...keyword,
      x: keyword.main ? techX : keywordsX,
      y: keyword.main ? centerY : (index * spacing) + spacing / 2,
      radius: keyword.main ? 70 : 50
    }));
  };

  const layoutedKeywords = treeLayout();

  const getLinePath = (start, end) => {
    const midX = (start.x + end.x) / 2;
    const controlPoint1 = { x: midX, y: start.y };
    const controlPoint2 = { x: midX, y: end.y };
    
    const angle1 = Math.atan2(controlPoint1.y - start.y, controlPoint1.x - start.x);
    const angle2 = Math.atan2(end.y - controlPoint2.y, end.x - controlPoint2.x);
    
    const startPoint = {
      x: start.x + Math.cos(angle1) * start.radius,
      y: start.y + Math.sin(angle1) * start.radius
    };
    
    const endPoint = {
      x: end.x - Math.cos(angle2) * end.radius,
      y: end.y - Math.sin(angle2) * end.radius
    };

    return `M ${startPoint.x} ${startPoint.y} C ${controlPoint1.x} ${controlPoint1.y}, ${controlPoint2.x} ${controlPoint2.y}, ${endPoint.x} ${endPoint.y}`;
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 overflow-hidden">
      <svg width="100%" height="100%" viewBox={`0 0 ${size.width} ${size.height}`}>
        {/* Lines */}
        {layoutedKeywords.slice(1).map((keyword, index) => (
          <motion.path
            key={keyword.text}
            d={getLinePath(layoutedKeywords[0], keyword)}
            stroke={keyword.color}
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: 1,
              strokeWidth: activeIndex === index + 1 || activeIndex === 0 ? 4 : 2,
              filter: activeIndex === index + 1 || activeIndex === 0 ? "drop-shadow(0 0 5px " + keyword.color + ")" : "none"
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        ))}

        {/* Keywords */}
        {layoutedKeywords.map((keyword, index) => (
          <motion.g
            key={keyword.text}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            whileHover={{ scale: 1.1 }}
          >
            <circle 
              cx={keyword.x} 
              cy={keyword.y} 
              r={keyword.radius} 
              fill={keyword.color} 
              fillOpacity={activeIndex === index ? "0.3" : "0.2"}
            />
            <text
              x={keyword.x}
              y={keyword.y}
              textAnchor="middle"
              dominantBaseline="central"
              fill={keyword.color}
              fontSize={keyword.main ? "28px" : "20px"}
              fontWeight="bold"
            >
              {keyword.text}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
};

export default DynamicSloganDesign;