"use client";
import React, { useState } from "react";
import Link from "next/link";
import AllStatus from "./allStatus/AllStatus";
import NewCars from "./newCars/NewCars";
import UsedCars from "./usedCars/UsedCars";
import { BsPlusLg } from "react-icons/bs";

const FeaturedListings = () => {
  const [listingStatus, setListingStatus] = useState("All");

  const handleListingStatus = (status) => {
    setListingStatus(status);
  };
  return (
    <section className="mx-auto pt-12 md:max-w-[991px] xxl:max-w-[1355px] md:pt-20 xl:pt-24">
      <div className="text-center text-[25px] text-secondary font-semibold md:text-[30px] xl:text-[33px]">
        <h1>Featured Listings</h1>
      </div>
      <section className="flex justify-center  items-center mt-5 ">
        <div className="flex justify-between items-center text-[13px] relative  text-secondary font-semibold bg-[#EEF2F6] rounded-full px-1.5 ">
          <h3
            className={`${
              listingStatus === "All"
                ? "bg-white px-[30px] py-[8px] rounded-full my-1.5 "
                : "px-[30px] py-[8px] rounded-full my-1.5"
            } cursor-pointer`}
            onClick={() => handleListingStatus("All")}
          >
            All Status
          </h3>
          <h3
            className={`${
              listingStatus === "New Cars"
                ? "bg-white px-[30px] py-[8px] rounded-full my-1.5"
                : "px-[30px] py-[8px] rounded-full my-1.5"
            } cursor-pointer`}
            onClick={() => handleListingStatus("New Cars")}
          >
            New Cars
          </h3>
          <h3
            className={`${
              listingStatus === "Used Cars"
                ? "bg-white px-[30px] py-[8px] rounded-full my-1.5"
                : "px-[30px] py-[8px] rounded-full my-1.5"
            } cursor-pointer`}
            onClick={() => handleListingStatus("Used Cars")}
          >
            Used
          </h3>
        </div>
      </section>
      {listingStatus === "All" ? (
        <AllStatus />
      ) : listingStatus === "New Cars" ? (
        <NewCars />
      ) : (
        listingStatus === "Used Cars" && <UsedCars />
      )}
        <section className="flex justify-center mt-6">
          <div className="flex items-center gap-3 group">
          <p className="text-[13px] text-secondary font-semibold group-hover:text-blue-700 transition-colors delay-100 duration-200 ease-in-out">Show All Cars</p>
          <div className="relative bg-[#F5C34B] w-7 h-7 rounded-full group-hover:bg-secondary transition-colors delay-100 duration-200 ease-in-out">
            <BsPlusLg className="absolute inset-1.5 text-[16px] text-white"/>
          </div>
          </div>
        </section>
    </section>
  );
};

export default FeaturedListings;
