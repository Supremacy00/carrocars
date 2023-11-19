"use client";
import React, { useState } from "react";
import Link from "next/link";
import { pricingData } from "@/components/data";
import { IoCheckmark } from "react-icons/io5";
import { FadeLoader } from "react-spinners";
import { useCombinedCart } from "@/components/CombinedCartProvider";

const Pricing = () => {
  const {cart, isLoading, handlePricing} = useCombinedCart()
  
  return (
    <section className="bg-[#f8f8f8] pt-5 border-t-[1px] border-gray-200 xl:pt-10">
      <div className="mx-auto px-4 md:max-w-[991px] md:px-6  xxl:max-w-[1355px] xxl:px-8">
        <div className="md:flex justify-between items-center">
          <h1 className="text-[25px] text-secondary font-semibold xl:text-[33px]">
            Pricing
          </h1>
          <p className="text-[13px] text-[#5F6973] mt-2 md:mt-0">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-1.5">/</span>
            <span>Pricing</span>
          </p>
        </div>
        <div>
          <div className="mt-5 mb-8 grid grid-cols-1 place-content-center gap-5 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xxl:mt-10">
            {pricingData.map((item) => {
              return (
                <div key={item.id} className="group">
                  <div
                    className={`${
                      item.title === "Standard"
                        ? "border-blue-700"
                        : "border-gray-200 group-hover:border-blue-700 transition-colors duration-300 delay-100 ease-in-out"
                    } w-full p-5 border-[1px] rounded-lg bg-white xl:p-8 xxl:p-10`}
                  >
                    <div>
                      <div className="flex justify-between items-center flex-wrap">
                        <h1 className="text-[18px] font-semibold text-blue-700">
                          {item.title}
                        </h1>
                        <p
                          className={`${
                            item.Recommended
                              ? "text-[13px] text-[#34A853] bg-[#34A85326] px-6 py-1.5 rounded-full"
                              : ""
                          }`}
                        >{`${item.Recommended ? "Recommended" : ""}`}</p>
                      </div>
                      <h3 className="text-[22px] text-secondary font-semibold mt-1.5 xxl:text-[30px]">{`$${item.price}`}</h3>
                    </div>
                    <div className="space-y-4 mt-5 xxl:mt-10 xxl:space-y-6">
                      <div className="flex items-center gap-2.5">
                        <IoCheckmark className="text-[#202124] text-[19px]" />
                        <div className="text-[13px] text-[#5F6973]">
                          {item.listings}
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <IoCheckmark className="text-[#202124] text-[19px]" />
                        <div className="text-[13px] text-[#5F6973]">
                          {item.job}
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <IoCheckmark className="text-[#202124] text-[19px]" />
                        <div className="text-[13px] text-[#5F6973]">
                          {item.duration}
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <IoCheckmark className="text-[#202124] text-[19px]" />
                        <div className="text-[13px] text-[#5F6973]">
                          {item.support}
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="relative">
                        <div
                          className={`${
                            !isLoading(item.id) && cart(item.id)
                              ? "hidden"
                              : "relative flex justify-center text-[13px] font-semibold mt-8 xxl:mt-12"
                          } relative`}
                        >
                          <button
                            className={`${
                              !isLoading(item.id) && cart(item.id)
                                ? "hidden"
                                : isLoading(item.id)
                                ? "bg-blue-700 text-white"
                                : item.title === "Standard"
                                ? "bg-blue-700 text-white"
                                : "bg-[#1947E212] group-hover:bg-blue-700 group-hover:text-white group transition-colors duration-300 delay-100 ease-in-out"
                            } text-secondary w-full py-[11px] rounded-lg xxl:py-4`}
                            onClick={() => handlePricing(item.id, item.category)}
                          >
                            Add To Cart
                          </button>
                        </div>
                        {isLoading(item.id) && (
                          <>
                            <span className="text-[20px] text-secondary absolute inset-0 bg-white bg-opacity-80 w-full h-full" />
                           <div className="flex justify-center absolute top-[60%] left-1/2">
                           <FadeLoader
                              color="#1A3760"
                              height={4}
                              margin={-12}
                              radius={2}
                              width={2}
                              className=""
                            />
                           </div>
                          </>
                        )}
                      </div>
                     <Link href="/pages/shop/cart">
                     <div
                        className={`${
                          !isLoading(item.id) && cart(item.id)
                            ? "relative flex justify-center text-[13px] font-semibold mt-8 xxl:mt-12"
                            : "hidden"
                        }`}
                      >
                        <button
                          className={`${
                            !isLoading(item.id) && cart(item.id)
                              ? "block bg-blue-700 text-white group transition-colors duration-300 delay-100 ease-in-out"
                              : item.title === "Standard"
                              ? "bg-blue-700 text-white hidden"
                              : "hidden bg-[#1947E212] group-hover:bg-blue-700 group-hover:text-white group transition-colors duration-300 delay-100 ease-in-out"
                          } text-secondary w-full py-[11px] rounded-lg xxl:py-4`}
                        >
                          View Cart
                        </button>
                      </div>
                     </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
