import Image from "next/image";
import React from "react";

const DreamCar = () => {
  return (
    <section className="relative max-w-[1390px] h-[430px] rounded-2xl overflow-hidden mt-24 mx-auto xl:mx-10 xxl:mx-auto xl:h-[500px] 2xl:max-w-[1590px]">
      <div
        className="absolute w-full h-full -z-50 bg-cover bg-center"
        style={{ backgroundImage: 'url("/assets/images/car1.jpg")' }}
      />
      <div className="z-50 absolute flex justify-center items-center inset-0 px-4 md:py-7 ">
        <div className="space-y-4 w-full md:space-y-0 md:flex justify-between items-center gap-7 md:max-w-[960px] md:gap-40 xxl:max-w-[1320px] xxl:gap-[300px]">
          <div className="bg-[#F5C34BDE] w-full h-full py-5 px-5 rounded-lg lg:flex items-center gap-5 md:py-10 md:px-10">
            <Image
              src="/assets/icons/dream-car-icon.svg"
              alt="Find Your Dream Car"
              width={50}
              height={50}
              className="mx-auto lg:mx-0"
            />
            <div className="text-center w-full h-full mt-3 lg:text-start">
              <h1 className="text-secondary text-[18px] font-semibold lg:text-[20px] xxl:text-[24px]">
                Find Your Dream Car ?
              </h1>
              <p className="text-[13px] leading-6 text-[#5F6973] mt-3">
                Search Your Car In Our Inventory And Request A Quote On The
                Vehicle Of Your Choosing.
              </p>
            </div>
          </div>
          <div className="bg-[#1947E2E0] w-full py-5 px-5 rounded-lg lg:flex items-center gap-5 md:py-10 md:px-10">
            <Image
              src="/assets/icons/dream-car-icon2.svg"
              alt="Submit Your Listing Easier"
              width={50}
              height={50}
              className="mx-auto lg:mx-0"
            />
            <div className="text-white text-center w-full h-full mt-3 lg:text-start">
              <h1 className="text-[18px] font-semibold lg:text-[20px] xxl:text-[24px]">
                Easy Listing Submission
              </h1>
              <p className="text-[13px] leading-6 mt-3">
                Request Search Your Car In Our Inventory And A Quote On The
                Vehicle Of Your Choosing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DreamCar;
