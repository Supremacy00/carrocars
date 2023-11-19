import React, { useState } from "react";
import { BsCarFrontFill } from "react-icons/bs";
import { TfiClose } from "react-icons/tfi";
import { GoPlus } from "react-icons/go";
import { Backdrop } from "@mui/material";
import {
  bottomNavbarData,
  topNavLeftData,
  topNavRightData,
} from "@/components/data";
import Link from "next/link";

const LeftBar = ({ LeftBarIsOpen, setLeftBarIsOpen }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownVisible((prevState) => !prevState);
  };
  const handleClose = () => {
    setLeftBarIsOpen(false);
  };

  const handleCloseOnClick = () => {
    setIsDropdownVisible(isDropdownVisible);
    setLeftBarIsOpen(false);
  };

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={!LeftBarIsOpen}
    >
      <div
        className={`${
          !LeftBarIsOpen ? "w-[430px] max-w-full bg-nav-bg-color" : " w-0"
        } fixed top-0 left-0 h-screen overflow-y-auto z-50 xl:hidden transition-transform -translate-x-`}
      >
        <section>
          <div className="bg-white w-full flex justify-between items-center py-4 px-4">
            <div className="flex items-center gap-2 relative text-secondary">
              <div className="bg-primary w-11 h-11 rounded-full">
                <BsCarFrontFill className="text-[21px] absolute inset-3" />
              </div>
              <h1 className="text-[25px] font-medium font-roboto">Carro</h1>
            </div>
            <div
              className="flex items-center gap-2 text-[13px] text-[#E44343] cursor-pointer"
              onClick={handleClose}
            >
              <p>Close</p>
              <TfiClose />
            </div>
          </div>
          <div className="text-white flex justify-between items-center whitespace-nowrap relative pt-10 text-[13.5px] font-roboto font-light">
            <div className="flex items-center gap-1.5 absolute left-4">
              <button className="hover:underline">Login</button>
              <div className="w-[1px] h-4 bg-gray-500" />
              <button className="hover:underline">Register</button>
            </div>
            <div className="flex items-center gap-1 border-[1px] absolute right-4 py-[10px] px-[27px] rounded-full cursor-pointer group hover:border-0 hover:rounded-none hover:px-[28px] hover:underline">
              <GoPlus className="cursor-pointer text-[13px] group-hover:bg-white group-hover:text-secondary group-hover:rounded-full" />
              <button>Add Listing?</button>
            </div>
          </div>
          <section className="pt-[65px] space-y-3.5 text-white text-[16px] font-medium">
            {bottomNavbarData.map((item) => (
              <section key={item.id}>
                <div className="flex justify-between px-4 items-center">
                  {item.route ? (
                    <Link href={item.route}>
                      <div
                        className="border-gray-50 pb-3.5 "
                        onClick={handleCloseOnClick}
                      >
                        {item.title}
                      </div>
                    </Link>
                  ) : (
                    <div className="border-gray-50 pb-3.5 ">{item.title}</div>
                  )}
                  <div
                    onClick={handleDropdownToggle}
                    className={`${
                      isDropdownVisible
                        ? "text-[25px] cursor-pointer "
                        : "text-[25px] cursor-pointer"
                    }`}
                  >
                    {item.icon}
                  </div>
                </div>
                {item.title === "Pages" && (
                  <>
                    {isDropdownVisible && (
                      <ul className="w-full px-10  mb-4 space-y-2 text-[14px]">
                        {item.pageItem.map((subItem) => (
                          <div key={subItem.id} className="">
                            <div className="w-full h-[0.5px] bg-gray-500 bg-opacity-70" />
                            {subItem.route ? (
                              <Link
                                href={subItem.route}
                                onClick={handleCloseOnClick}
                              >
                                <div className="mt-2">{subItem.title}</div>
                              </Link>
                            ) : (
                              <div className="mt-2">{subItem.title}</div>
                            )}
                          </div>
                        ))}
                      </ul>
                    )}
                  </>
                )}
                <div className="w-full h-[0.5px] bg-gray-500 bg-opacity-70" />
              </section>
            ))}
          </section>
          <section
            className={`${
              isDropdownVisible
                ? "absolute bottom-0 text-white px-4 pb-2 w-full text-[13px] leading-10"
                : "absolute bottom-10 text-white px-4 w-full text-[13px] leading-10"
            }`}
          >
            {topNavLeftData.map((item) => {
              return (
                <section key={item.id} className="flex items-center gap-2">
                  <div className="text-[17px]">{item.icon}</div>
                  <div>{item.title}</div>
                </section>
              );
            })}
            <div className="flex items-center gap-6 pt-6 text-[20px]">
              {topNavRightData.map((item) => {
                return <section key={item.id}>{item.icon}</section>;
              })}
            </div>
          </section>
        </section>
      </div>
    </Backdrop>
  );
};

export default LeftBar;
