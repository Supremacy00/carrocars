'use client'
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const CategoryRating = ({ onHover, onLeave, onClick, updateSelectedRating }) => {
  const [hoveredRating, setHoveredRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);

  const handleMouseOver = (value) => {
    setHoveredRating(value);
    onHover && onHover(value);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
    onLeave && onLeave();
  };

  const handleClick = (value) => {
    setSelectedRating(value);
    onClick && onClick(value);
    updateSelectedRating && updateSelectedRating(value);
  };

  return (
    <div className="flex items-center gap-2">
      {[1, 2, 3, 4, 5].map((value) => (
        <div
          key={value}
          className={`text-[11px] star ${
            (value <= hoveredRating || value <= selectedRating) ? 'text-yellow-500' : 'text-gray-300'
          } cursor-pointer`}
          onMouseOver={() => handleMouseOver(value)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(value)}
        >
          <FaStar />
        </div>
      ))}
    </div>
  );
};

export default CategoryRating;
