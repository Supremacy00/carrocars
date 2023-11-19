import React from "react";
import { browseByTypeData } from "../data";
import Image from "next/image";

const BrowseByType = () => {
  return (
    <section className="mx-auto pt-16 md:max-w-[991px] xxl:max-w-[1355px] md:pt-20 xl:pt-24">
      <div className="text-center text-[25px] text-secondary font-semibold lg:text-[30px] xl:text-[33px]">
        <h1>Browse By Type</h1>
      </div>
      <section className="grid grid-cols-1 gap-8 px-5 mt-6 md:grid-cols-2 xxl:grid-cols-3">
        {browseByTypeData.map((item, index) => {
          return (
            <div key={item.id} className={`relative overflow-hidden w-full mx-auto h-[160px] cursor-pointer rounded-lg  group sm:h-[200px]`}>
              <div className="absolute top-0 w-full h-full bg-cover bg-no-repeat transform transition delay-10 duration-300 group-hover:scale-110" style={{ backgroundImage: `url(${item.bbtImg})` }} />
                <div className=" bg-nav-bg-color bg-opacity-40 w-full h-full absolute rounded-lg"/>
                <div className="absolute bottom-4 text-white left-5">
                  <h1 className="text-base font-semibold">{item.title}</h1>
                  <p className="text-[13px] mt-2">{`${item.numberOfListings} ${
                    item.numberOfListings === 1 || item.numberOfListings === 0
                      ? "Listing"
                      : "Listings"
                  }`}</p>
                </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default BrowseByType;
