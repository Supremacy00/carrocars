import React from "react";
import { topNavLeftData, topNavRightData } from "@/components/data";

const TopNavbar = () => {
  return (
    <div>
      <nav className="mx-auto max-w-[1220px] py-4 hidden text-[12.5px] text-secondary lg:px-8 lg:max-w-[991px]  xl:flex xl:justify-between xl:items-center xxl:max-w-[1355px]">
        <section className="flex items-center gap-5">
          {topNavLeftData.map((item) => {
            return (
              <section key={item.id} className="flex  gap-1.5">
                <div className="text-[17px]">{item.icon}</div>
                <div>{item.title}</div>
              </section>
            );
          })}
        </section>
        <section className="flex items-center gap-5">
          {topNavRightData.map((item) => {
            return (
              <section key={item.id} className={`${item.title === "|" && "-mx-2.5 text-gray-300"} flex items-center cursor-pointer`}>
                <div className="text-[17px]">{item.icon}</div>
                <button className={`${item.title === "|" && "cursor-default"}`}>{item.title}</button>
              </section>
            );
          })}
        </section>
      </nav>
      <hr className="hidden xl:block" />
    </div>
  );
};

export default TopNavbar;
