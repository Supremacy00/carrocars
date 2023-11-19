'use client'
import React, { useState } from "react";
import Image from "next/image";
import StarRating from "./StarRating";
import RatingSection from "./RatingSection";

const Review = ({ reviewData }) => {
  

  return (
    <section>
      <h1 className="text-[18px] text-secondary font-semibold mt-6 lg:text-[21px]">
        {`${reviewData?.reviewComments.length || 0}`}{" "}
        {reviewData?.reviewComments.length <= 1 ? "Review" : "Reviews"}
      </h1>
      <div>
        <div className="mt-8">
          {reviewData?.featureReviews.map((review, index) => {
            return (
              <div key={index}>
                <div className="flex justify-between items-center text-[13px]">
                  <h3 className="text-secondary font-semibold">
                    {review.reviewName}
                  </h3>
                  <p className="text-[#5F6973]">{review.reviewRating}</p>
                </div>
                <div
                  className={`${
                    review.reviewName === "Reliability"
                      ? "hidden"
                      : "w-full h-[1px] bg-gray-200 my-2.5 list-none"
                  }`}
                />
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-5 mt-8">
          {reviewData?.reviewComments.map((comment, index) => {
            return (
              <div key={index} className="flex gap-2.5 text-[13px] text-[#5F6973]">
                <Image
                  src={comment.photo}
                  alt={comment.name}
                  width={1000}
                  height={1000}
                  className="w-[50px] h-[50px] rounded-full lg:w-[70px] lg:h-[70px]"
                />
                <div className="mt-2 w-full lg:mt-3.5">
                  <div>
                    <h3 className="text-secondary font-semibold">{comment.name}</h3>
                    <div className="flex justify-between items-center mt-1">
                      <p>{comment.date}</p>
                      <StarRating stars={comment.stars} />
                    </div>
                  </div>
                  <p className="mt-3 leading-6">{comment.comment}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <RatingSection />
    </section>
  );
};

export default Review;
