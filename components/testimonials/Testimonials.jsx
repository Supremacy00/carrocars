'use client'
import React, { useState, useEffect } from "react";
import { testimonialsData } from "../data";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './testimonial.css'
import { RiDoubleQuotesR, RiDoubleQuotesL } from 'react-icons/ri'

const Testimonials = () => {
    const [cardIsActive, setCardIsActive] = useState(false);

    const [activeCardIndex, setActiveCardIndex] = useState(-1);

  const handleCardClick = (index) => {
    if (index === activeCardIndex) {
      setCardIsActive(!cardIsActive);
    } else {
      setCardIsActive(true);
      setActiveCardIndex(index);
    }
  };

  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const isLargerScreen = window.matchMedia('(min-width: 991px)').matches;
      setAutoplayEnabled(!isLargerScreen);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplay: autoplayEnabled,
    autoplaySpeed: 5000,
    customPaging: (i) => {
      const item = testimonialsData[i];
      return (
        <div
        key={i}
        className={`${
            cardIsActive && activeCardIndex === i ? 'shadow-2xl' : ''
          }  hidden w-full rounded-full border-[1px] border-gray-200  cursor-pointer bg-white shadow-lg mt-10 lg:block lg:absolute top-1/2`}
          onClick={() => handleCardClick(i)}
      >
        <div className="flex items-center w-full gap-4 p-2.5">
          <Image src={item.tdImg} alt={item.title} width={68} height={68} className="w-[69px] h-[69px] rounded-full" />
          <div className="text-start">
            <h1 className="text-base text-secondary font-semibold">{item.title}</h1>
            <p className="text-xs text-[#5F6973] mt-1.5">{item.track}</p>
          </div>
        </div>
      </div>
      );
    },
  };

  return (
    <section className="mx-auto mt-16 py-11 lg:mb-52 lg:pt-8 ">
      <div className="text-center text-[25px] text-secondary font-semibold lg:text-[30px] xl:text-[33px]">
        <h1>Testimonials</h1>
      </div>
     <div className="relative px-7">
     <Slider {...settings} className="relative mx-auto z-30 mt-6 lg:max-w-[950px] lg:mt-[50px] xxl:max-w-[1010px]">
        {testimonialsData.map((item, index) => (
          <div key={index}>
            <p className="text-center z-30 text-[14px] text-secondary leading-7 mx-auto lg:max-w-[700px] lg:h-full xl:text-base">{item.comment}</p>
            <div
              key={index}
              className="w-full rounded-full bg-white border-[1px] border-gray-200 mt-10 lg:hidden"
            >
              <div className="flex items-center gap-4 p-2.5">
                <Image src={item.tdImg} alt={item.title} width={68} height={68} className="w-16 h-16 rounded-full" />
                <div>
                  <h1 className="text-base text-secondary font-semibold">{item.title}</h1>
                  <p className="text-xs text-[#5F6973] mt-1.5">{item.track}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="absolute top-[10%] flex justify-between inset-0 text-[80px] px-4 z-20 text-gray-200 text-opacity-50 md:top-[5%] mx-auto lg:max-w-[1050px] lg:text-[100px] xxl:max-w-[1300px] xxl:text-[200px] xxl:-top-[40%]">
        <RiDoubleQuotesL />
        <RiDoubleQuotesR />
      </div>
     </div>
    </section>
  );
};

export default Testimonials;
