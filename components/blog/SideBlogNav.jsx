"use client";
import React, { useState } from "react";
import { blogData } from "@/components/data";
import Image from "next/image";
import { TfiClose } from "react-icons/tfi";
import { Backdrop } from "@mui/material";


const SideBlogNav = ({ isSideBlogNav, setIsSideBlogNav }) => {
  
    const truncatedBlogTitle = (data, limit) => {
        const truncatedData = data.map((blog) => {
          if (blog.BlogTitle && !blog.BlogTitle.includes("...") && blog.BlogTitle.length > limit) {
            blog.BlogTitle = blog.BlogTitle.substring(0, limit) + "...";
          }
          return blog;
        });
        return truncatedData;
      };

  const slicedBlogData = blogData.slice(0, 3);

  const updatedBlogData = truncatedBlogTitle(slicedBlogData, 45)

  const handleClose = () => {
    setIsSideBlogNav(false)
  }

  return (
    <Backdrop
    sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={isSideBlogNav}
    className="z-40"
  >
    <nav
      className={`${
        isSideBlogNav ? "w-[330px] max-w-full bg-white backdrop-blur-2xl " : " w-0"
      } fixed top-0 right-0 h-screen overflow-y-auto z-50 lg:hidden transition-transform -translate-x-`}
    >
      <div className="mx-auto w-full px-2 pb-12">
       <div className="flex justify-center py-4">
       <div
          className="flex items-center gap-1 text-[14px] text-[#E44343] font-semibold cursor-pointer"
          onClick={handleClose}
        >
          <TfiClose />
          <p>Close</p>
        </div>
       </div>
        <div className="mx-auto max-w-[285px] border-[1px] border-gray-200 bg-[#F9F9F9] rounded-lg p-4 lg:w-full xl:p-8">
          <h1 className="text-[15px] text-secondary font-semibold mb-5">
            Search
          </h1>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Keyword"
            className=" border-[1px] placeholder-[#5F6973] border-gray-200 text-[13px] px-5 rounded-lg py-4 w-full bg-white outline-none"
          />
        </div>
        <div className="mx-auto max-w-[285px] border-[1px] mt-8 border-gray-200 bg-[#F9F9F9] rounded-lg p-4 lg:w-full xl:p-8">
          <h1 className="text-[16px] text-secondary font-semibold mb-5">
            Categories
          </h1>
          <ul className="text-[13px] text-secondary">
            <li className="mb-5">Auto Detailing</li>
            <li className="mb-5">Car News</li>
            <li className="mb-5">Car Reviews</li>
            <li>Classic Cars</li>
          </ul>
        </div>
        <div className="mx-auto max-w-[285px] border-[1px] mt-8 border-gray-200 bg-[#F9F9F9] rounded-lg p-4 lg:w-full xl:p-8">
          <h1 className="text-[16px] text-secondary font-semibold mb-5">
            Recent Posts
          </h1>
          <ul className="grid gap-6">
            {updatedBlogData.map((item) => {
              return (
                <div key={item.id} className="flex gap-3">
                  <Image
                    src={item.blogImg}
                    alt={item.blogTitle}
                    width={1000}
                    height={100}
                    className="w-[80px] h-[70px] rounded-lg"
                  />
                  <h3 className="text-[13px] text-secondary leading-6 ">
                    {item.blogTitle}
                  </h3>
                </div>
              );
            })}
          </ul>
        </div>
        <div className="mx-auto max-w-[285px] border-[1px] mt-8 border-gray-200 bg-[#F9F9F9] rounded-lg p-4 lg:w-full xl:p-8">
          <h1 className="text-[16px] text-secondary font-semibold mb-5">
            Popular Tags
          </h1>
          <ul className="text-[13px] text-secondary flex items-center flex-wrap gap-2">
            <li className="bg-[#EEF2F6] rounded-full px-3 py-1 hover:bg-secondary hover:text-white cursor-pointer transition-all duration-300 delay-100 ease-in-out">
              Diesel
            </li>
            <li className="bg-[#EEF2F6] rounded-full px-3 py-1 hover:bg-secondary hover:text-white cursor-pointer transition-all duration-300 delay-100 ease-in-out">
              Luxury
            </li>
            <li className="bg-[#EEF2F6] rounded-full px-3 py-1 hover:bg-secondary hover:text-white cursor-pointer transition-all duration-300 delay-100 ease-in-out">
              Sedan
            </li>
            <li className="bg-[#EEF2F6] rounded-full px-3 py-1 hover:bg-secondary hover:text-white cursor-pointer transition-all duration-300 delay-100 ease-in-out">
              Sport
            </li>
            <li className="bg-[#EEF2F6] rounded-full px-3 py-1 hover:bg-secondary hover:text-white cursor-pointer transition-all duration-300 delay-100 ease-in-out">
              Suv
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </Backdrop>
  );
};

export default SideBlogNav;
