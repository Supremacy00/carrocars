"use client";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { TfiLayoutGrid2, TfiViewListAlt } from "react-icons/tfi";
import { featureListingsData } from "../featureListingsData";
import Grid from "./Grid";
import List from "./List";
import Link from "next/link";
import Paging from "./Paging";

const Listings = () => {
  const [activeListing, setActiveListing] = useState("Grid");

  const slicedFeatureListingData = featureListingsData.slice(0, 12);

  const handleListing = (typeOfListing) => {
    setActiveListing(typeOfListing);
  };

  return (
    <section className="mx-auto py-12 md:max-w-[991px] xl:py-20 xl:px-2 xxl:max-w-[1355px] ">
      <div className="px-4 md:px-6">
        <div className="mt-5 md:flex justify-between items-center">
          <h1 className="text-[25px] text-secondary font-semibold xl:text-[33px]">
            Listings
          </h1>
          <p className="text-[13px] text-[#5F6973] mt-2 md:mt-0">
            <Link href="/" className="hover:underline">Home</Link><span className="mx-1.5">/</span>
            <span>Listings</span>
          </p>
        </div>
        <div>
          <div className="md:flex justify-between items-center mt-6 ">
            <div className="text-[13px] text-secondary mt-6 md:mt-0">
              {slicedFeatureListingData < featureListingsData ? (
                <p>
                  Showing 1 - {slicedFeatureListingData.length} of{" "}
                  {featureListingsData.length} results
                </p>
              ) : (
                <p>Showing all {featureListingsData.length} results</p>
              )}
            </div>
            <div className="flex justify-between items-center gap-3 mt-6 md:mt-0 md:justify-normal md:gap-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3 text-[13px]">
                  <p className=" text-secondary font-semibold">Sort by:</p>
                  <div className="flex items-center gap-1 border-[1px] py-2.5 px-4 rounded-lg text-[#5F6973] border-gray-200 md:px-6">
                    <p className="">Default</p>
                    <IoMdArrowDropdown className="text-lg -mr-2" />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-secondary">
                <div
                  className={`${
                    activeListing === "Grid"
                      ? "bg-gray-200 p-[11px] rounded-lg"
                      : "border-[1px] p-2.5  rounded-lg border-gray-200"
                  } cursor-pointer`}
                  onClick={() => handleListing("Grid")}
                >
                  <TfiLayoutGrid2 />
                </div>
                <div
                  className={`${
                    activeListing === "List"
                      ? "bg-gray-200 p-[11px] rounded-lg"
                      : "border-[1px] p-2.5  rounded-lg border-gray-200"
                  } cursor-pointer`}
                  onClick={() => handleListing("List")}
                >
                  <TfiViewListAlt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {activeListing === "Grid" ? (
        <Grid />
      ) : (
        activeListing === "List" && (
          <List />
        )
      )}
      <div className="flex justify-center mt-10">
        <Paging />
      </div>
    </section>
  );
};

export default Listings;
