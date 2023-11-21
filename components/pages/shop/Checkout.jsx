import { lastIndexOf } from "lodash";
import React, { useState } from "react";
import { FaTruck } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { useCombinedCart } from "@/components/CombinedCartProvider";

const Checkout = () => {
  const [isAddress, setIsAddress] = useState(false);
  const [countries, setCountries] = useState("United States of America");
  const [isArrow, setIsArrow] = useState(false);
  const {cartItems} = useCombinedCart();

  const importantCountries = [
    "United States of America",
    "China",
    "India",
    "Russia",
    "United Kingdom",
    "Germany",
    "France",
    "Japan",
    "Brazil",
    "Canada",
    "Australia",
    "South Korea",
    "Saudi Arabia",
    "South Africa",
    "Mexico",
    "Nigeria",
    "Turkey",
    "Indonesia",
    "United Arab Emirates",
    "Singapore",
  ];
  const handleAddress = () => {
    setIsAddress((prevIsAddress) => !prevIsAddress);
  };
  const handleCountry = (item) => {
    setCountries(item);
    setIsArrow(false);
  };
  const handleArrow = () => {
    setIsArrow((prevArrow) => !prevArrow);
  };

  return (
    <section className="mt-12 xl:w-[30%] xl:mt-0">
      <div className="w-full border-[1px] bg-white rounded-lg px-5">
        <h1 className="text-[18px] text-secondary font-semibold mt-5">
          Cart Total
        </h1>
        <div className="flex justify-between items-center mt-5 text-[13px] font-semibold text-[#5F6973]">
          <h3>Subtotal</h3>
          <p className="text-secondary font-normal">426</p>
        </div>
        <div className="w-full h-[1px] bg-gray-200 my-3" />
       <section>
       <div className="flex justify-between flex-wrap text-[13px] mb-2">
          <h3 className="text-[13px] font-semibold text-[#5F6973]">Shipping</h3>
          <div className="flex items-center gap-2">
            <input type="radio" name="" id="" />
            <h3 className="font-medium text-[#5F6973]">Flat rate</h3>
          </div>
        </div>
        <div className="flex justify-end items-center gap-2 text-[13px] mb-2">
          <input type="radio" name="" id="" />
          <h3 className="font-medium text-[#5F6973]">Free shipping</h3>
        </div>
        <div className="flex justify-end items-center gap-2 text-[13px] mb-2">
          <input type="radio" name="" id="" />
          <h3 className="font-medium text-[#5F6973]">Local pickup</h3>
        </div>
        <div className="text-[13px] text-secondary flex justify-end">
          <p>Shipping to CA.</p>
        </div>
        <div className="flex justify-end items-center  mt-2  text-[13px] text-secondary">
          <div
            className="flex items-center group gap-2 cursor-pointer transition-colors duration-300 delay-600 ease-in-out"
            onClick={handleAddress}
          >
            <p className="group-hover:text-blue-700">Change address</p>
            <FaTruck className="text-[16px] group-hover:text-blue-700" />
          </div>
        </div>
        <div
          className={`${
            !isAddress ? "hidden" : "block"
          } mt-3 text-[#5F6973] font-normal`}
        >
          <div
            className="flex justify-end gap-1 px-3 text-[#5F6973] w-full border-[1px] border-gray-200 py-3.5 rounded-lg cursor-pointer"
            onClick={handleArrow}
          >
            <p className="text-[13px]">{countries}</p>
            <IoMdArrowDropdown
              className={`${isArrow ? "rotate-180" : " rotate-0"} text-[20px]`}
            />
          </div>
          <div
            className={`${
              !isArrow
                ? "bg-white border-b-[1px] px-5 pt-11 border-x-[1px] border-gray-200 rounded-lg hidden"
                : "bg-white border-b-[1px] px-5 pt-11 border-x-[1px] border-gray-200 rounded-lg block"
            }`}
          >
            <div className="w-full h-[1px] bg-gray-200 " />
            <div className="w-full h-[300px] overflow-x-hidden pt-3 pb-5">
              {importantCountries.map((item, index) => (
                <div key={index}>
                  <h3
                    className="text-[13px] text-[#5F6973] cursor-pointer hover:text-secondary hover:font-semibold"
                    onClick={() => handleCountry(item)}
                  >
                    {item}
                  </h3>
                  <div
                    className={`${
                      index === 19
                        ? "hidden"
                        : "w-full h-[1px] bg-gray-200 my-[10px]"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <input
              type="text"
              name=""
              id=""
              placeholder="State / Country"
              className="w-full border-[1px] border-gray-200 py-3 rounded-lg text-[13px] placeholder-[#5F6973] px-4 outline-none"
            />
          </div>
          <div className="mt-4">
            <input
              type="text"
              name=""
              id=""
              placeholder="Town / City"
              className="w-full border-[1px] border-gray-200 py-3 rounded-lg text-[13px] placeholder-[#5F6973] px-4 outline-none"
            />
          </div>
          <div className="mt-4">
            <input
              type="text"
              name=""
              id=""
              placeholder="Postcode / ZIP"
              className="w-full border-[1px] border-gray-200 py-3 rounded-lg text-[13px] placeholder-[#5F6973] px-4 outline-none"
            />
          </div>
          <div className="flex flex-row-reverse mt-4">
            <button
              className="px-10 py-4 bg-primary text-[13px] text-secondary font-semibold rounded-lg hover:bg-nav-bg-color hover:text-white transition-colors duration-300 delay-100 ease-in-out"
            >
              Update
            </button>
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-200 my-4" />
       </section>
        <div>
          <div className="flex justify-between items-center mt-2 text-[13px] font-semibold text-[#5F6973]">
            <h3>Total</h3>
            <p className="text-secondary">426</p>
          </div>
          <div className="flex justify-center">
            <button className="w-full bg-primary text-[13px] font-semibold text-secondary py-4 rounded-lg my-7 hover:bg-nav-bg-color hover:text-white transition-colors duration-300 delay-100 ease-in-out sm:w-[400px] xxl:w-full">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
