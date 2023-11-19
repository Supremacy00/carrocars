import React from "react";
import { quickContactData, topNavRightData } from "../../data";
import { TfiClose } from "react-icons/tfi";
import { Backdrop } from "@mui/material";

const RightBar = ({ rightBarIsOpen, setRightBarIsOpen }) => {
  const {
    header1,
    header2,
    header3,
    header4,
    para,
    tele,
    email,
    address1,
    address2,
    address3,
    weekdays1,
    weekdays2,
    weekdays3,
  } = quickContactData;

  const handleClose = () => {
    setRightBarIsOpen(false);
  };

  return (
    <Backdrop
    sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={rightBarIsOpen}
  >
    <div
      className={`${
        rightBarIsOpen
          ? "w-[450px] 2xl:w-[465px] bg-nav-bg-color translate-x-0 "
          : " translate-x-full"
      } hidden right-0 top-0 transition-all duration-300 transform z-50 ease-in-out overflow-hidden text-[#FFFFFFC4] h-screen xl:fixed backdrop-filter backdrop-blur-2xl xl:flex xl:items-center xl:justify-center `}
    >
      <section className={`${rightBarIsOpen && "px-16"}`}>
        <div
          className="flex justify-end item-center absolute top-10 right-10 bg-yellow-500 cursor-pointer transition-all duration-200 ease-in-out delay-200  hover:bg-primary w-11 h-11 rounded-full "
          onClick={handleClose}
        >
          <TfiClose className=" relative right-3.5 top-3.5 text-[16px] text-secondary " />
        </div>
        <div>
          <h1 className="text-[20px] font-semibold text-white">{header1}</h1>
          <p className="text-[12px] mt-3 leading-6 font-light">{para}</p>
        </div>
        <div className="mt-9">
          <h1 className="text-[13px] uppercase font-semibold text-white">
            {header2}
          </h1>
          <h3 className="text-[24px] font-medium mt-3 text-white">{tele}</h3>
          <p className="text-[12px] font-light">{email}</p>
        </div>
        <div className="mt-9 font-light">
          <h1 className="text-[13px] uppercase font-semibold text-white">
            {header3}
          </h1>
          <div className="text-[12px] mt-1.5">
            <p className="mt-5 leading-6 ">{address1}</p>
            <p>{address2}</p>
            <p>{address3}</p>
          </div>
        </div>
        <div className="mt-9 font-light">
          <h1 className="text-[13px] uppercase font-semibold text-white">
            {header4}
          </h1>
          <div className="text-[12px] mt-1.5">
            <p className="mt-5">{weekdays1}</p>
            <p>{weekdays2}</p>
            <p>{weekdays3}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-9 text-[#FFFFFFC4]">
          {topNavRightData.map((item) => {
            return (
              <button
                key={item.id}
                className={`${item.icon ? "relative bg-secondary w-10 h-10 rounded-full hover:bg-white transition-all duration-200 ease-in-out delay-200 group" : "hidden"}`}
              >
                <div className="text-[18px] absolute inset-3 cursor-pointer group-hover:text-nav-bg-color transition-all duration-200 ease-in-out delay-200">
                  {item.icon}
                </div>
              </button>
            );
          })}
        </div>
      </section>
    </div>
    </Backdrop>
  );
};

export default RightBar;
