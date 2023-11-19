"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { AiFillDollarCircle } from "react-icons/ai";
import { PiSteeringWheelFill } from "react-icons/pi";
import { SlPhone } from "react-icons/sl";

const AdminContact = () => {
  const [isphoneNumber, setIsPhoneNumber] = useState(false);

  const handlePhoneNumber = () => {
    setIsPhoneNumber(!isphoneNumber);
  };
  return (
    <section className="w-full lg:w-[35%] xxl:w-1/4 mt-16 lg:mt-0">
        <div className="">
          <div className="w-full">
            <div className="flex justify-center items-center gap-1 mt-4 text-[13px] bg-[#F5C34B] font-semibold text-secondary hover:bg-[#FCB900] border-gray-200 border-[1px] py-[14px] px-5 rounded-lg lg:mt-0 cursor-pointer transition-colors duration-300 delay-150 ease-in-out">
              <AiFillDollarCircle className="text-[22px] font-bold lg:text-lg" />
              <button>Make An 0ffer Price</button>
            </div>
          </div>
          <div className="w-full ">
            <div className="flex justify-center items-center gap-1 mt-5 text-[13px] bg-nav-bg-color font-semibold text-white hover:text-white border-gray-200 border-[1px] py-[14px] px-5 rounded-lg cursor-pointer transition-colors duration-300 delay-150 ease-in-out">
              <PiSteeringWheelFill className="text-[22px] font-bold lg:text-lg" />
              <button>Schedule Test Drive</button>
            </div>
          </div>
        </div>
        <div className="mx-auto min-w-full border-[1px] mt-8 border-gray-200 rounded-lg p-4">
            <div className="w-full flex items-start gap-3 flex-wrap overflow-hidden">
              <Image
                src="/assets/images/car1.jpg"
                alt="Admin Image"
                width={1000}
                height={1000}
                className="w-[45px] h-[45px] rounded-full"
              />
              <div>
                <h4 className="text-[16px] text-secondary font-semibold">
                  admin
                </h4>
                <div className="text-[13px] text-[#5F6973] flex items-center gap-2 mt-1 flex-wrap">
                  <SlPhone className="text-[17px]" />
                  <p className="text-[13px] whitespace-nowrap">{`+2348166836${
                    isphoneNumber ? "197" : "***"
                  }`}</p>
                  <div
                    className="bg-[#24324A] text-[12px] text-white font-semibold px-1.5 py-0.5 cursor-pointer rounded-sm"
                    onClick={handlePhoneNumber}
                  >{`${isphoneNumber ? "Hide" : "Show"}`}</div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Your Name"
                  className=" border-[1px] placeholder-[#5F6973] border-gray-200 text-[13px] px-5 rounded-lg py-3.5 mt-5 w-full bg-white outline-none"
                />
              </div>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Email"
                  className=" border-[1px] placeholder-[#5F6973] border-gray-200 text-[13px] px-5 rounded-lg py-3.5 mt-5 w-full bg-white outline-none"
                />
              </div>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Phone"
                  className=" border-[1px] placeholder-[#5F6973] border-gray-200 text-[13px] px-5 rounded-lg py-3.5 mt-5 w-full bg-white outline-none"
                />
              </div>
              <div>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Message"
                  className="border-[1px] placeholder-[#5F6973] border-gray-200 resize-none text-[13px] px-5 pt-3 rounded-lg mt-5 w-full h-[160px] bg-white outline-none"
                ></textarea>
              </div>
              <div>
                <div className="w-full">
                  <div className="flex justify-center items-center gap-1 mt-3 text-[13px] bg-[#F5C34B] font-semibold text-secondary hover:bg-[#FCB900] border-gray-200 border-[1px] py-[14px] px-5 rounded-lg cursor-pointer transition-colors duration-300 delay-150 ease-in-out">
                    <button>Send Message</button>
                  </div>
                </div>
              </div>
              <div>
                <div className="w-full text-white">
                  <div className="flex justify-center items-center gap-1 mt-3 text-[13px] bg-[#48C740] font-semibold border-gray-200 border-[1px] py-[14px] px-5 rounded-lg cursor-pointer transition-colors duration-300 delay-150 ease-in-out">
                  <AiFillDollarCircle className="text-[22px] font-bold lg:text-lg" />
                    <button>Whatsapp</button>
                  </div>
                </div>
              </div>
              <div>
                <div className="w-full text-white">
                  <div className="flex justify-center items-center gap-1 mt-3 text-[13px] bg-nav-bg-color font-semibold border-gray-200 border-[1px] py-[14px] px-5 rounded-lg  cursor-pointer transition-colors duration-300 delay-150 ease-in-out">
                    <button>Send Private Message</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </section>
  );
};

export default AdminContact;
