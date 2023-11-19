import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
const StarRating = ({ stars }) => {
  const renderStar = (type, key) => (
    <div
      key={key}
      className={`text-[11px] ${
        type === "full"
          ? "text-yellow-500"
          : type === "half"
          ? "text-yellow-300"
          : "text-gray-200"
      } inline-block`}
    >
      {type === "full" ? (
        <FaStar />
      ) : type === "half" ? (
        <FaStarHalfAlt />
      ) : (
        <FaStar />
      )}
    </div>
  );

  const totalStars = stars.reduce((total, star) => total + star, 0);

  const starElements = stars.map((star, index) => {
    return star === 1 ? "full" : star === 0.5 ? "half" : "gray";
  });

  const sortStars = (a, b) => {
    const order = { full: 3, half: 2, gray: 1 };
    return order[b] - order[a];
  };

  const sortedStarTypes = starElements.sort(sortStars);

  const sortedStarsArray = sortedStarTypes.map((starType, index) => {
    return renderStar(starType, index);
  });

  return (
    <section className="flex items-center gap-2 flex-wrap">
      <h1 className="flex gap-2 flex-wrap">{sortedStarsArray}</h1>
      <p className="text-[13px] text-[#5F6973]">
        {totalStars % 1 === 0 ? `${totalStars}.0` : totalStars}
      </p>
    </section>
  );
};

export default StarRating;
