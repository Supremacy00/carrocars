"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import SideShop from "./SideShop";
import ShopMain from "./ShopMain";
import { TfiMenuAlt, TfiClose } from "react-icons/tfi";
import ShopNav from "./ShopNav";

const Shop = () => {
  const [category, setCategory] = useState("Accessories");
  const [isShopNav, setIsShopNav] = useState(false);

  const handleCategory = (status) => {
    setCategory(status);
    setIsShopNav(false);
  };

  const handleShopNav = () => {
    setIsShopNav(!isShopNav);
  };

  return (
    <section className="bg-[#f8f8f8] pb-20">
      <div className="mx-auto px-4 md:max-w-[991px] md:px-6 xl:px-8 xxl:max-w-[1355px] ">
        <div className="pt-5 md:flex justify-between items-center">
          <h1 className="text-[25px] text-secondary font-semibold xl:text-[33px]">
            Shop
          </h1>
          <p className="text-[13px] text-[#5F6973] mt-2 md:mt-0">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-1.5">/</span>
            <span>{category}</span>
          </p>
        </div>
        <section className="lg:flex flex-row-reverse gap-8 mt-6 ">
          <div className="lg:w-[70%] xxl:w-[77%]">
            <div className="md:flex justify-between items-center">
              <div className="text-[13px] text-secondary font-medium mt-6 md:mt-0">
                <p>Showing all results</p>
              </div>
              <div className="flex justify-between items-center mt-3 md:mt-0">
                <div className="flex items-center gap-3 text-[13px] ">
                  <p className=" text-secondary font-semibold">Sort by:</p>
                  <div className="relative inline-block text-left">
                    <select
                      name=""
                      id=""
                      className="block w-full pl-3 pr-6 py-2.5 min-w-20 text-[#5F6973] outline-none border-[1px] border-gray-200 rounded-lg appearance-none"
                    >
                      <option value="" className="py-2 px-4">
                        Sort by popularity
                      </option>
                      <option value="" className="py-2 px-4">
                        Sort by average rating
                      </option>
                      <option value="" className="py-2 px-4">
                        Sort by latest
                      </option>
                      <option value="" className="py-2 px-4">
                        Sort by price: low to high
                      </option>
                      <option value="" className="py-2 px-4">
                        Sort by price: high to low
                      </option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center text-gray-400 px-2 pointer-events-none">
                      <MdKeyboardArrowDown className="text-[19px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ShopMain category={category} />
          </div>
          <SideShop handleCategory={handleCategory} />
        </section>
      </div>
      <div
        className="fixed top-1/3 right-0 z-50 lg:hidden w-9 h-10 bg-nav-bg-color bg-opacity-80 rounded-l-md cursor-pointer hover:bg-nav-bg-color transition-all duration-300 delay-100 ease-in-out"
        onClick={handleShopNav}
      >
        {!isShopNav ? (
          <TfiMenuAlt className="absolute inset-2.5 text-white text-[20px] -ml-1" />
        ) : (
          isShopNav && (
            <TfiClose className="absolute inset-2.5 text-white text-[18px] -ml-0.5" />
          )
        )}
      </div>
      <ShopNav
        isShopNav={isShopNav}
        setIsShopNav={setIsShopNav}
        handleCategory={handleCategory}
      />
    </section>
  );
};

export default Shop;
