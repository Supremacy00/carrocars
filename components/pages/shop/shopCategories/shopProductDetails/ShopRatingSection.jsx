"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import ShopCategoryRating from "./ShopCategoryRating";

const ShopRatingSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0)
  const [reviewData, setReviewData] = useState([]);
  
  const [selectedRating, setSelectedRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
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

    const starsArray = Array.from({ length: 5 }, (_, index) => {
      return index + 1 <= selectedRating? 1 : 0;
    });

    const newReview = {
      name: name,
      email: email,
      review: review,
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      stars: starsArray,
    };

    console.log("Submitted Data:", {
      name,
      email,
      review,
      rating,
      stars: starsArray,
    });

    setReviewData((prevReviewData) => [...prevReviewData, newReview]);
    setName("");
    setEmail("");
    setReview("");
    setRating(0);
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
                className="w-[60px] h-[60px] rounded-full lg:w-[70px] lg:h-[70px]"
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
                          className={`text-[12px] flex gap-2 flex-wrap ${
                            star === 1 ? "text-yellow-500" : "text-gray-200"
                          }`}
                        >
                          {star === 0.5 ? <FaStarHalfAlt /> : <FaStar />}
                        </span>
                      ))}
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
        <div>
          <h1 className="text-[18px] text-secondary font-semibold mt-5 lg:text-[21px]">
            Add a review
          </h1>
          <div className="flex items-center gap-4 mt-5">
            <h3 className="text-[13px] text-secondary">
              Your Rating
            </h3>
            <ShopCategoryRating
              onClick={(selectedRating) => handleRatingChange(selectedRating)}
              selectedRating={selectedRating}
              updateSelectedRating={(value) => setSelectedRating(value)}
            />
          </div>
        </div>
        <div className="mt-3">
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
                className=" border-[1px] placeholder-[#5F6973] border-gray-200 text-[13px] px-5 rounded-lg py-3.5 w-full bg-white outline-none"
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

export default ShopRatingSection;
