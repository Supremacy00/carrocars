import React from "react";
import { quickContactData, topNavRightData } from "../data";
import { BsCarFrontFill } from "react-icons/bs";

const Footer = () => {
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
    offers1,
    offerPara,
    rights,
  } = quickContactData;

  return (
    <footer className="bg-nav-bg-color">
      <div className="py-8 xxl:pt-12">
        <div className="text-white mx-auto max-w-[1220px] px-4 pb-8 md:flex justify-between items-center md:px-6 lg:max-w-[991px] xl:px-8 xxl:pb-12  xxl:max-w-[1355px]">
          <div className="flex items-center gap-2 relative text-secondary">
            <div className="bg-primary w-11 h-11 rounded-full">
              <BsCarFrontFill className="text-[21px] absolute inset-3" />
            </div>
            <h1 className="text-[25px] font-medium font-roboto text-white">
              Carro
            </h1>
          </div>
          <ul className="flex items-center gap-5 flex-wrap mt-5 text-[13px] text-white md:mt-0 xxl:gap-12 font-light">
            <li>Home</li>
            <li>Explore</li>
            <li>Listings</li>
            <li>Blog</li>
            <li>Shop</li>
            <li>About</li>
          </ul>
        </div>
        <div className="w-full bg-gray-700 h-[1px]" />
        <div className="px-4 grid mx-auto max-w-[1220px] md:grid-cols-2 content-center lg:grid-cols-3 md:px-6 lg:max-w-[991px] xl:px-8 xxl:max-w-[1355px] xxl:grid-cols-4 xxl:py-[65px] ">
          <div className="mt-8 font-light">
            <h1 className="text-[13px] uppercase font-semibold text-white">
              {header3}
            </h1>
            <div className="text-[13px] mt-1.5 leading-6 font-normal text-[#FFFFFFBF]">
              <p className="mt-5  ">{address1}</p>
              <p className="">{address2}</p>
              <p>{address3}</p>
            </div>
          </div>
          <div className="mt-7">
            <h1 className="text-[13px] uppercase font-semibold text-white">
              {header2}
            </h1>
            <h3 className="text-[18px] font-medium mt-4 text-white xxl:text-[24px] no-underline">{tele}</h3>
            <p className="text-[13px] font-normal text-[#FFFFFFBF] mt-1 no-underline">
              {email}
            </p>
          </div>
          <div className="mt-7 font-light">
            <h1 className="text-[13px] uppercase font-semibold text-white">
              {header4}
            </h1>
            <div className="text-[13px] mt-1.5 font-normal leading-6 text-[#FFFFFFBF]">
              <p className="mt-5">{weekdays1}</p>
              <p>{weekdays2}</p>
              <p>{weekdays3}</p>
            </div>
          </div>
          <div className="mt-7">
            <h1 className="text-[13px] uppercase font-semibold text-white">
              {offers1}
            </h1>
            <div className="mt-6">
              <div className="flex">
                <input
                  type="email"
                  name=""
                  id=""
                  className="w-full h-12 text-[13px] placeholder-[#5F6973] outline-none px-5 rounded-l-lg rounded-r-none xl:h-[52px]"
                  placeholder="Enter your email"
                />
                <button className="bg-[#F5C34B] w-[60px] h-12 rounded-r-lg rounded-l-none text-[13px] text-secondary font-semibold xl:h-[52px]">
                  Go
                </button>
              </div>
              <p className="text-[13.5px] text-[#FFFFFFBF] font-normal mt-3">
                {offerPara}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 px-4 mx-auto max-w-[1220px] md:flex justify-between items-center md:px-6 lg:max-w-[991px] xl:px-8 xxl:max-w-[1355px]">
          <p className="text-[13px] text-[#FFFFFFBF] font-normal">
            &copy; {rights}
          </p>
          <div className="flex items-center gap-2 mt-4 text-[#FFFFFFC4] md:mt-0">
            {topNavRightData.map((item) => {
              return (
                <button
                  key={item.id}
                  className={`${
                    item.icon
                      ? "relative bg-secondary w-[30px] h-[30px] rounded-full hover:bg-white transition-all duration-200 ease-in-out delay-200 group xxl:w-10 xxl:h-10"
                      : "hidden"
                  }`}
                >
                  <div className="text-[18px] absolute inset-1.5 cursor-pointer group-hover:text-nav-bg-color transition-all duration-200 ease-in-out delay-200 xxl:text-[20px] xxl:inset-2.5">
                    {item.icon}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
