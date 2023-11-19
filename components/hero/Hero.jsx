"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import Search from "../search/Search";
import { slideData } from "../data";
const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const previousSlide = () => {
    setCurrentImage(
      currentImage === 0 ? slideData.length - 1 : currentImage - 1
    );
  };
  const nextSlide = () => {
    setCurrentImage(
      currentImage === slideData.length - 1 ? 0 : currentImage + 1
    );
  };
  useEffect(() => {
        const interval = setInterval(() => {
          nextSlide();
        }, 3000);
        return () => clearInterval(interval);
      }, [currentImage]);

  return (
    <section>
      <div className="carousel-container mx-auto font-roboto relative max-w-[1390px] xl:px-10 lg:max-w-[1470px] 2xl:max-w-[1590px]">
      <div className="image-container relative -z-10">
        <div className="bg-nav-bg-color z- w-full h-full absolute bg-opacity-50 xl:rounded-2xl" />
        {slideData.map((item, index) => (
          <div
            key={item.id}
            style={{ display: index === currentImage ? "block " : "none" }}
          >
            <Image
              src={item.img}
              priority={true}
              alt={`Image ${index + 1}`}
              width={1000}
              height={1000}
              className="w-full object-cover h-[335px] sm:h-[450px] md:h-[520px] xl:rounded-2xl xxl:h-[700px] "
            />
            <div className="absolute top-0 text-white flex z-10 justify-center inset-0 pt-10 sm:py-24 md:flex md:justify-between md:mx-auto md:px-6 md:py-32 md:max-w-[991px] xxl:py-56 xxl:max-w-[1120px]">
              <div className="text-center md:text-start">
                <h3 className="text-[18px] font-light xl:text-[23px]">
                  {item.year}
                </h3>
                <h1 className="text-[25px] font-medium pt-1.5 md:text-[30px] md:pt-3 xl:text-4xl">
                  {item.carName}
                </h1>
                <div className="flex justify-center items-center gap-2.5 md:flex md:justify-start">
                  <div>
                    <h1 className="text-[31px] text-[#F5C34B] font-medium md:text-[40px] xl:text-[55px]">
                      {item.amount}
                    </h1>
                    <Image
                      src={item.amtImg}
                      alt="Vector Image"
                      width={1000}
                      height={1000}
                      className="-mt-1 w-full h-full xl:-m-3"
                    />
                  </div>
                  <p className="text-[13px] font-light pt-1.5 md:pt-3 xl:text-[16px]">{`/ ${item.period}`}</p>
                </div>
                <button className="bg-white text-secondary text-[13px] font-medium font-sans px-[25px] py-2.5 rounded-lg mt-6 xl:mt-9 xl:py-4 xl:px-[40px] xl:text-[14px]">
                  {item.btn}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="controls absolute top-0 inset-0 justify-between text-[25px] items-center text-white px-16 hidden xxl:flex lg:px-32 xxl:px-24">
        <button
          onClick={previousSlide}
          className="relative bg-gray-300 bg-opacity-20 rounded-full w-12 h-12 hover:bg-opacity-40 transition-all delay-100 ease-in-out duration-200"
        >
          <RiArrowLeftSLine className="absolute inset-3" />
        </button>
        <button
          onClick={nextSlide}
          className="relative bg-gray-300 bg-opacity-20 rounded-full w-12 h-12 hover:bg-opacity-40 transition-all delay-100 ease-in-out duration-200 "
        >
          <RiArrowRightSLine className="absolute inset-3" />
        </button>
      </div>
      <div className="indicators absolute inset-x-0 bottom-12 z-30 text-center text-white w-full ">
        {slideData.map((_, index) => (
          <span
            key={index}
            className={`inline-block border-2 border-white h-3 w-3 mx-1 rounded-full ${
              index === currentImage ? "bg-white" : ""
            } transition-all transform transition-widt -translate-y-2 duration-200 delay-200 ease-in-out`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </div>
    <Search />
    </section>
  );
};

export default Hero;
