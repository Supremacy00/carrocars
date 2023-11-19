"use client";
import React, { useState, useEffect } from "react";
import CategoryRating from "./CategoryRating";
import Image from "next/image";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const RatingSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");
  const [reviewData, setReviewData] = useState([]);
  const [totalAverageRating, setTotalAverageRating] = useState(0);
  const [ratings, setRatings] = useState({
    comfort: 0,
    interiorDesign: 0,
    performance: 0,
    valueForMoney: 0,
    exteriorStyling: 0,
    reliability: 0,
  });
  const [selectedRating, setSelectedRating] = useState(0);

  const handleRatingChange = (category, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [category]: rating,
    }));
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    console.log(name);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };
  const handleReviewChange = (e) => {
    setReview(e.target.value);
    console.log(review);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const averageRating =
      Object.values(ratings).reduce((total, rating) => total + rating, 0) / 6;

    setTotalAverageRating((prevTotal) => prevTotal + averageRating);

    const starsArray = Object.values(ratings).map((rating) => {
      if (rating >= 3) {
        return 1;
      } else if (rating > 0) {
        return 0.5;
      } else {
        return 0;
      }
    });

    const sortedStarsArray = starsArray.sort((a, b) => b - a);

    const limitedStarsArray = sortedStarsArray.slice(0, 5);
    const totalRating = limitedStarsArray.reduce(
      (total, star) => total + star,
      0
    );

    const roundedTotalRating = Math.round(totalRating * 10) / 10;

    const newReview = {
      name: name,
      email: email,
      review: review,
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      stars: limitedStarsArray,
      totalRating: roundedTotalRating,
    };

    setReviewData((prevReviewData) => [...prevReviewData, newReview]);
    setName("");
    setEmail("");
    setReview("");
    setRatings({
      comfort: 0,
      interiorDesign: 0,
      performance: 0,
      valueForMoney: 0,
      exteriorStyling: 0,
      reliability: 0,
    });
    setSelectedRating(0);
  };

  useEffect(() => {
    const savedData = localStorage.getItem("reviewData");
    const savedTimestamp = localStorage.getItem("reviewDataTimestamp");

    if (savedData && savedTimestamp) {
      const expirationTime = 24 * 60 * 60 * 1000;
      const currentTime = new Date().getTime();

      if (currentTime - parseInt(savedTimestamp, 10) < expirationTime) {
        setReviewData(JSON.parse(savedData));
      } else {
        localStorage.removeItem("reviewData");
        localStorage.removeItem("reviewDataTimestamp");
      }
    }
  }, []);

  useEffect(() => {
    const currentTime = new Date().getTime();
    localStorage.setItem("reviewData", JSON.stringify(reviewData));
    localStorage.setItem("reviewDataTimestamp", currentTime.toString());
  }, [reviewData]);

  return (
    <section>
      <div className="flex flex-col gap-5 mt-5 mb-12">
        {reviewData.map((comment, index) => {
          return (
            <div
              key={index}
              className="flex gap-2.5 text-[13px] text-[#5F6973]"
            >
              <Image
                src="/assets/icons/blankprofilelogo.webp"
                alt={comment.name}
                width={1000}
                height={1000}
                className="w-[50px] h-[50px] rounded-full lg:w-[70px] lg:h-[70px]"
              />
              <div className="mt-2 w-full">
                <div>
                  <h3 className="text-secondary font-semibold">
                    {comment.name}
                  </h3>
                  <div className="flex justify-between items-center mt-1">
                    <p>{comment.date}</p>
                    <div className="flex items-center gap-2 flex-wrap text-[13px]">
                      {comment.stars.map((star, starIndex) => (
                        <span
                          key={starIndex}
                          className={`text-[11px] flex gap-2 flex-wrap ${
                            star === 1
                              ? "text-yellow-500"
                              : star === 0.5
                              ? "text-yellow-300"
                              : "text-gray-200"
                          }`}
                        >
                          {star === 0.5 ? <FaStarHalfAlt /> : <FaStar />}
                        </span>
                      ))}
                      <p className="text-[13px] text-[#5F6973]">
                        {comment.totalRating % 1 === 0
                          ? `${comment.totalRating}.0`
                          : comment.totalRating}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="mt-3 leading-6">{comment.review}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <h1 className="text-[18px] text-secondary font-semibold mt-5 lg:text-[21px]">
          Add a review
        </h1>
        <div className="mt-5">
          <div className="grid grid-cols-3 mb-5">
            <h3 className="text-[13px] text-secondary font-semibold">Comfort:</h3>
            <CategoryRating
              currentRating={ratings.comfort}
              onClick={(rating) => handleRatingChange("comfort", rating)}
              updateSelectedRating={(value) => setSelectedRating(value)}
            />
          </div>

          <div className="grid grid-cols-3 mb-5">
            <h3 className="text-[13px] text-secondary font-semibold">Interior Design:</h3>
            <CategoryRating
              currentRating={ratings.interiorDesign}
              onClick={(rating) => handleRatingChange("interiorDesign", rating)}
              updateSelectedRating={(value) => setSelectedRating(value)}
            />
          </div>
          <div className="grid grid-cols-3 mb-5">
            <h3 className="text-[13px] text-secondary font-semibold">Performance:</h3>
            <CategoryRating
              currentRating={ratings.performance}
              onClick={(rating) => handleRatingChange("performance", rating)}
              updateSelectedRating={(value) => setSelectedRating(value)}
            />
          </div>
          <div className="grid grid-cols-3 mb-5">
            <h3 className="text-[13px] text-secondary font-semibold">Value for the money:</h3>
            <CategoryRating
              currentRating={ratings.valueForMoney}
              onClick={(rating) => handleRatingChange("valueForMoney", rating)}
              updateSelectedRating={(value) => setSelectedRating(value)}
            />
          </div>

          <div className="grid grid-cols-3 mb-5">
            <h3 className="text-[13px] text-secondary font-semibold">Exterior styling:</h3>
            <CategoryRating
              currentRating={ratings.exteriorStyling}
              onClick={(rating) =>
                handleRatingChange("exteriorStyling", rating)
              }
              updateSelectedRating={(value) => setSelectedRating(value)}
            />
          </div>
          <div className="grid grid-cols-3 mb-5">
            <h3 className="text-[13px] text-secondary font-semibold">Reliability:</h3>
            <CategoryRating
              currentRating={ratings.reliability}
              onClick={(rating) => handleRatingChange("reliability", rating)}
              updateSelectedRating={(value) => setSelectedRating(value)}
            />
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="email"
                id=""
                required
                value={name}
                onChange={handleNameChange}
                placeholder="Name"
                className=" border-[1px] placeholder-[#5F6973] border-gray-200 text-[13px] px-5 rounded-lg py-3.5 mt-5 w-full bg-white outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                name="email"
                id=""
                required
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
                className=" border-[1px] placeholder-[#5F6973] border-gray-200 text-[13px] px-5 rounded-lg py-3.5 mt-5 w-full bg-white outline-none"
              />
            </div>
            <div>
              <textarea
                name="review"
                id=""
                cols="30"
                rows="10"
                required
                value={review}
                onChange={handleReviewChange}
                placeholder="Review"
                className="border-[1px] placeholder-[#5F6973] resize-none border-gray-200 text-[13px] px-5 pt-3 rounded-lg mt-5 w-full h-[120px] bg-white outline-none"
              ></textarea>
            </div>
            <div className="max-w-[150px]">
              <div className="flex justify-center items-center gap-1 mt-3 text-[13px] bg-[#F5C34B] font-semibold text-secondary hover:bg-[#FCB900] border-gray-200 border-[1px] py-[14px] px-5 rounded-lg cursor-pointer transition-colors duration-300 delay-150 ease-in-out">
                <button>Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RatingSection;
