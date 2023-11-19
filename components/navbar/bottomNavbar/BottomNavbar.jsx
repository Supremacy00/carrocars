"use client";
import React, { useState, useEffect } from "react";
import { BsCarFrontFill } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import Link from "next/link";
import { bottomNavbarData } from "@/components/data";
import RightBar from "@/components/navbar/rightBar/RightBar";
import LeftBar from "../leftBar/LeftBar";

const BottomNavbar = () => {
  const [isPagesHovered, setPagesHovered] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState(null);
  const [rightBarIsOpen, setRightBarIsOpen] = useState(false);
  const [leftBarIsOpen, setLeftBarIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setPagesHovered(true);
  };

  const handleMouseLeave = () => {
    setPagesHovered(false);
  };

  const handleClick = () => {
    setPagesHovered(false);
  };
  const handleMenu = () => {
    if (window.innerWidth > 1200) {
      setRightBarIsOpen(true);
      setLeftBarIsOpen(false);
    } else if (window.innerWidth < 1200) {
      setLeftBarIsOpen(true);
      setRightBarIsOpen(false);
    }
  };

  return (
    <div>
      <nav className="mx-auto max-w-[1220px] relative flex justify-between items-center py-4 px-4 z-30 text-secondary md:px-6 lg:max-w-[991px] xl:py-7  xl:px-8 xxl:max-w-[1355px]">
        <Link href="/">
          <div className="flex items-center gap-2 relative text-secondary">
            <div className="bg-primary w-11 h-11 rounded-full">
              <BsCarFrontFill className="text-[21px] absolute inset-3" />
            </div>
            <h1 className="text-[25px] font-medium font-roboto">Carro</h1>
          </div>
        </Link>
        <section className="flex items-center gap-8 text-[13px] group">
          {bottomNavbarData.map((item) => (
            <section
              key={item.id}
              className="relative cursor-pointer hidden xl:block"
            >
              {item.title === "Pages" ? (
                <div
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className={`${
                    activeNavItem === item ? "text-hover-blue" : ""
                  } hover:text-hover-blue flex items-center gap-0.5`}
                >
                  {item.title}
                  <span className="text-[20px]">{item.icon}</span>
                </div>
              ) : item.route ? (
                <Link href={item.route}>
                  <div
                    className={`${
                      activeNavItem === item ? "text-hover-blue" : ""
                    }`}
                    onClick={handleClick}
                  >
                    {item.title}
                  </div>
                </Link>
              ) : (
                <div>{item.title}</div>
              )}
              {item.title === "Pages" && (
                <div
                  className="submenu absolute h-5 w-16"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {isPagesHovered && item.pageItem && (
                    <ul className="absolute left-0 top-full pt-5 bg-whitespace-y-5 bg-white z-50 border-[1px] w-[240px] h-[270px] rounded-xl transition-all delay-300 duration-300 ease-in-out">
                      {item.pageItem.map((subItem) => (
                        <li
                          key={subItem.id}
                          className={`mx-7 mt-3 pb-3 hover:text-hover-blue hover:font-bold ${
                            subItem.title === "FAQ"
                              ? "border-b-0"
                              : "border-b-[1px]"
                          }`}
                          onClick={handleClick}
                        >
                          {subItem.route ? (
                            <Link href={subItem.route}>{subItem.title}</Link>
                          ) : (
                            subItem.title
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </section>
          ))}
          <div className="hidden  gap-1 bg-white rounded-full border-[1px] border-secondary py-[10px] px-[27px] transition-all hover:bg-secondary hover:text-white cursor-pointer duration-300 ease-in-out delay-200 xl:flex xl:items-center">
            <GoPlus className="cursor-pointer text-[15px]" />
            <button>Add Listing</button>
          </div>
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={handleMenu}
          >
            <p className="xl:hidden">Menu</p>
            <div className="space-y-2">
              <div className="w-7 h-0.5 bg-secondary group" />
              <div className="w-5 h-0.5 bg-secondary" />
            </div>
          </div>
        </section>
      </nav>
      {rightBarIsOpen && (
        <RightBar
          setRightBarIsOpen={setRightBarIsOpen}
          rightBarIsOpen={rightBarIsOpen}
        />
      )}{" "}
      {leftBarIsOpen && (
        <LeftBar
          setLeftBarIsOpen={setLeftBarIsOpen}
          leftBarIsOpen={leftBarIsOpen}
        />
      )}
    </div>
  );
};

export default BottomNavbar;
