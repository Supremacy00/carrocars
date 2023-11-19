"use client";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { CgSearch } from "react-icons/cg";

const Search = () => {
  const [selected, setSelected] = useState("All");
  const [bordeActive, setBorderActive] = useState(false);

  const handleClick = (status) => {
    setSelected(status);
  };

  return (
    <section className="-mt-[45px] md:-mt-[45px] mx-auto z-50 lg:max-w-[940px] lg:-mt-[80px] xxl:max-w-[1100px] ">
      <div className="flex justify-center mx-auto inset-0">
        <div className="z-40">
          <div className="flex items-center gap-2 z-50  text-secondary text-[13px] font-medium">
            <div
              className={`${
                selected === "All" ? "bg-white" : "bg-[#F5C34B]"
              } cursor-pointer py-[8px] px-[27px] rounded-t-lg md:py-[10px] md:px-[35px]  `}
              onClick={() => handleClick("All")}
            >
              All Status
            </div>
            <div
              className={`${
                selected === "New" ? "bg-white" : "bg-[#F5C34B]"
              } cursor-pointer py-[8px] px-[27px] rounded-t-lg md:py-[10px] md:px-[35px]  `}
              onClick={() => handleClick("New")}
            >
              New
            </div>
            <div
              className={`${
                selected === "Used" ? "bg-white" : "bg-[#F5C34B]"
              } cursor-pointer py-[8px] px-[27px] rounded-t-lg md:py-[10px] md:px-[35px]  `}
              onClick={() => handleClick("Used")}
            >
              Used
            </div>
          </div>
        </div>
      </div>
      <section className="mx-auto py-10 px-5 z-50 bg-white -mt-[0.5px] border-gray-50 rounded-lg shadow-md md:max-w-[950px] lg:flex lg:justify-center lg:items-center lg:gap-5 lg:py-8 xxl:max-w-[1070px]">
        <div className="w-full lg:max-w-[200px] xxl:max-w-[220px]">
          <h3 className="text-[13px] text-secondary font-semibold">Make</h3>
          <div className="flex justify-between items-center mt-4 bg-white border-gray-200 border-[1px] py-[14px] px-5 rounded-lg">
            <p className="text-[13px] text-[#5F6973]">Select Makes</p>
            <IoMdArrowDropdown className="-mr-2 text-lg text-[#5F6973]" />
          </div>
        </div>
        <div className="pt-4 w-full lg:pt-0 lg:max-w-[200px] xxl:max-w-[220px]">
          <h3 className="text-[13px] text-secondary font-semibold">Models</h3>
          <div
            className={`${
              bordeActive ? "border-gray-500" : "border-gray-200"
            } flex justify-between items-center mt-4 bg-white border-[1px] py-[14px] px-5 rounded-lg`}
            onClick={() => setBorderActive(!bordeActive)}
          >
            <p className="text-[13px] text-[#5F6973]">Select Models</p>
            <IoMdArrowDropdown className="-mr-2 text-lg text-[#5F6973]" />
          </div>
        </div>
        <div className="pt-4 w-full lg:pt-0">
          <h3 className="text-[13px] text-secondary font-semibold">Price</h3>
          <div className="flex gap-5">
            <input
              type="number"
              placeholder="Min Price"
              className="flex justify-between items-center mt-4 w-full text-[13px] placeholder-[#5F6973] bg-white border-gray-200 border-[1px] py-[14px] px-5 rounded-lg focus:border-[1px] focus:border-gray-200 focus:ring-gray-200 "
            />
            <input
              type="number"
              placeholder="Max Price"
              className="flex justify-between items-center mt-4 w-full text-[13px] placeholder-[#5F6973] bg-white border-gray-200 border-[1px] py-[14px] px-5 rounded-lg"
            />
          </div>
        </div>
        <div className="w-full lg:mt-9 lg:max-w-[140px] xxl:max-w-[165px]">
          <div className="flex justify-center items-center gap-1 mt-4 text-[13px] bg-[#F5C34B] font-semibold text-secondary hover:bg-nav-bg-color hover:text-white border-gray-200 border-[1px] py-[14px] px-5 rounded-lg lg:mt-0 cursor-pointer transition-colors duration-300 delay-150 ease-in-out">
            <CgSearch className="text-[22px] font-bold lg:text-lg" />
            <button>Search</button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Search;
