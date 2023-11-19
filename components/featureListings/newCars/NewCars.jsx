import React from "react";
import { newCarsData } from "@/components/newCarsData";
import Image from "next/image";
import { IoIosCamera } from "react-icons/io";
import { AiFillHeart } from "react-icons/ai";
import { ImShuffle } from "react-icons/im";
import { ImRoad } from "react-icons/im";
import { GiGasPump, GiGearStickPattern } from "react-icons/gi";
import Link from "next/link";

const NewCars = () => {
    const slicedNewCarsData = newCarsData.slice(0, 6)
    return (
        <section className="mx-auto mt-7 xl:mt-12">
          <article className="grid gap-5 mx-5 md:mx-6 md:grid-cols-2 lg:gap-6 lg:gap-x-8 xxl:gap-8 ">
            {slicedNewCarsData.map((item) => {
              return (
                <article
                  key={item.NC_}
                  className="flex items-center inset-0 border-[1px] group border-gray-200 rounded-lg py-2.5 pl-2.5 md:py-3.5 xl:py-2.5"
                >
                  <div className="relative cursor-pointer">
                    <div className="max-w-[120px] h-[100px] bg-nav-bg-color bg-opacity-10 rounded-lg group-hover:bg-opacity-40 lg:max-w-[180px] lg:h-[150px] xl:max-w-[260px] xl:h-[170px] xxl:h-[210px]">
                      <Image
                        src={item.ncImg}
                        alt="Feature Listing Image"
                        width={1000}
                        height={1000}
                        className="relative w-full h-full rounded-lg -z-50 hover:cursor-pointer"
                      />
                    </div>
                    <div className="absolute top-0 inset-0 text-white">
                      <div
                        className={`${
                          item.ncFeatured
                            ? "text-[10px] flex justify-center mt-2.5 uppercase font-semibold bg-[#D0473A] py-[5px]  w-20 mx-auto rounded-full max-w-full md:text-[11px] md:w-24 md:py-[6px] lg:mr-[72px] xl:mr-[92px] xxl:mr-[152px]"
                            : ""
                        } cursor-text`}
                      >
                        <p>{item.ncFeatured ? "Featured" : ""}</p>
                      </div>
                      <div
                        className={`${
                          item.ncFeatured
                            ? "flex items-center justify-between mt-7 px-1 lg:mt-[75px] lg:px-3 xl:mt-[95px] xxl:mt-[133px]"
                            : "flex items-center justify-between mt-[62px] px-1 lg:mt-[113px] lg:px-3 xl:mt-[133px] xxl:mt-[172px] "
                        } invisible group-hover:visible transition-transform cursor-default  `}
                      >
                        <div className="flex items-center gap-0.5">
                          <IoIosCamera className="text-[21px] cursor-default" />
                          <p className="text-[13px] cursor-text">{item.ncNumberOfImages}</p>
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
                  <div className="mx-6 flex-grow">
                    <div className="text-secondary font-semibold mb-3">
                      <h3 className="text-[15px] mb-1">{`$${item.ncAmount}`}</h3>
                      <Link href={`/listings/car-details/${item.NC_}`}><p className="text-[13px]">{item.ncTitle}</p></Link>
                    </div>
                    <div className="flex items-center gap-1 text-[13px] ">
                      {item.ncReviews.map((review, index) => {
                        return (
                          <article key={index} className="text-[#F5C34B]">
                            <span className="">{review.reviewIcon}</span>
                          </article>
                        );
                      })}
                      <p className="text-[#5F6973]">{`(${item.ncNumberOfReviews} ${
                        item.ncNumberOfReviews === 1 || item.ncNumberOfReviews === 0
                          ? "Review"
                          : "Reviews"
                      })`}</p>
                    </div>
                    <div className="hidden w-full bg-gray-200 h-[1px] lg:block md:mt-3 xl:mt-4" />
                    <div className="hidden lg:flex items-center gap-3 mt-3 text-[13px] text-[#5F6973] xl:mt-4">
                      <div className="flex items-center gap-1.5">
                        <ImRoad />
                        <p>{item.ncMileage}</p>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <GiGasPump className="text-[15px]" />
                        <p>{item.ncFuelType}</p>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <GiGearStickPattern className="text-[15px]" />
                        <p>{item.ncTransmission}</p>
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

export default NewCars