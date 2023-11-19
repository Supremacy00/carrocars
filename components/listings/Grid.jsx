"use client";
import React from "react";
import { featureListingsData } from "../featureListingsData";
import Image from "next/image";
import { IoIosCamera } from "react-icons/io";
import { AiFillHeart } from "react-icons/ai";
import { ImShuffle, ImRoad } from "react-icons/im";
import { GiGasPump, GiGearStickPattern } from "react-icons/gi";


const Grid = () => {
    const slicedFeatureListingData = featureListingsData.slice(0, 12);
  return (
    <section className="mx-auto px-4 md:px-6 md:max-w-[991px] xl:mt-12 xxl:max-w-[1355px]">
    <article className='grid gap-5 md:grid-cols-2 md:gap-6 mx-auto mt-6 md:max-w-[1000px] lg:grid-cols-3 lg:gap-x-8 xxl:grid-cols-4 xxl:gap-8 xl:mt-12 xxl:max-w-[1420px]'>
        {slicedFeatureListingData.map((item) => {
          return (
            <article
              key={item.id}
              className="border-[1px] w-full group border-gray-200 rounded-lg pt-2.5 px-2.5" 
            >
              <div className="relative">
                <div className="max-w-full h-full bg-nav-bg-color bg-opacity-10 rounded-lg group-hover:bg-opacity-40 sm:h-[390px] md:h-[200px] ">
                  <Image
                    src={item.flImg}
                    alt="Feature Listing Image"
                    width={1000}
                    height={1000}
                    className="relative w-full h-full rounded-lg -z-50 hover:cursor-pointer"
                  />
                </div>
                <div className="absolute bottom-0 inset-0 px-3 text-white">
                  <div
                    className={`${
                      item.featured
                        ? "text-[11px] relative mt-2.5 uppercase font-semibold bg-[#D0473A] w-24 h-8 rounded-full"
                        : ""
                    } cursor-text`}
                  >
                    <p className="absolute inset-2 text-center">
                      {item.featured ? "Featured" : ""}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-3 left-2 right-2 text-white ">
                  <div
                    className={`${
                      item.featured
                        ? "flex items-center justify-between "
                        : "flex items-center justify-between  "
                    } invisible group-hover:visible transition-transform cursor-default  `}
                  >
                    <div className="flex items-center gap-0.5 w-full">
                      <IoIosCamera className="text-[21px] cursor-default" />
                      <p className="text-[13px] cursor-text">
                        {item.numberOfImages}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 xl:gap-4">
                      <span className="bg-[#0C1227] w-7 h-7 rounded-full relative cursor-pointer">
                        <AiFillHeart className="absolute inset-1.5 text-[16.5px]" />
                      </span>
                      <span className="bg-[#0C1227] w-7 h-7 rounded-full relative cursor-pointer">
                        <ImShuffle className="absolute inset-1.5 font-bold text-[15px]" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-3 my-5 md:my-3 w-full">
                <div className="text-secondary font-semibold mb-3">
                  <h3 className="text-[15px] mb-1">{`$${item.flAmount}`}</h3>
                  <p className="text-[13px]">{item.flTitle}</p>
                </div>
                <div className="flex items-center gap-1 text-[13px] ">
                  {item.flReviews.map((review, index) => {
                    return (
                      <article key={index} className="text-[#F5C34B]">
                        <span className="">{review.reviewIcon}</span>
                      </article>
                    );
                  })}
                  <p className="text-[#5F6973]">{`(${item.numberOfReviews} ${
                    item.numberOfReviews === 1 || item.numberOfReviews === 0
                      ? "Review"
                      : "Reviews"
                  })`}</p>
                </div>
                <div className="w-full bg-gray-200 h-[1px] mt-4 xl:mt-4" />
                <div className="flex items-center gap-3 mt-4 text-[13px] text-[#5F6973] xl:mt-4">
                  <div className="flex items-center gap-1.5">
                    <ImRoad />
                    <p>{item.mileage}</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <GiGasPump className="text-[15px]" />
                    <p>{item.fuelType}</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <GiGearStickPattern className="text-[15px]" />
                    <p>{item.transmission}</p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
    </article>
  </section>
  );
}

export default Grid