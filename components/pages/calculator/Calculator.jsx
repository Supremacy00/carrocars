"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

const Calculator = () => {
  const [price, setPrice] = useState("");
  const [rate, setRate] = useState("");
  const [loanTermYear, setLoanTermYear] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleRateChange = (e) => {
    setRate(e.target.value);
  };
  const handleLoanTermYear = (e) => {
    setLoanTermYear(e.target.value);
  };
  const handleDownPayment = (e) => {
    setDownPayment(e.target.value);
  };

  const calculateMonthlyPayment = (e) => {
    e.preventDefault();
    const loanAmount = price - downPayment;
    const monthlyInterestRate = rate / 100 / 12;
    const numberOfPayments = loanTermYear * 12;

    const monthlyPayment =
      (loanAmount *
        (monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    setMonthlyPayment(monthlyPayment.toFixed(2));
    setPrice("");
    setRate("");
    setLoanTermYear("");
    setDownPayment("");
  };
  return (
    <section className="bg-[#f8f8f8] pb-20 xxl:pb-32">
      <div className="mx-auto px-4 md:max-w-[991px] md:px-6 xl:px-8 xxl:max-w-[1355px]">
        <div className="md:flex justify-between items-center md:pt-5 xxl:pt-12">
          <h1 className="text-[25px] text-secondary font-semibold xl:text-[33px]">
            Calculator
          </h1>
          <p className="text-[13px] text-[#5F6973] pt-2 md:pt-0">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-1.5">/</span>
            <span>Calculator</span>
          </p>
        </div>
        <div className="md:flex gap-8 mt-5 md:mt-6 xl:mt-10 xxl:gap-40 xxl:mt-12">
          <div className="w-full border-[1px]  border-gray-200 rounded-lg bg-white px-5 xl:p-10 xxl:p-14">
            <form onSubmit={calculateMonthlyPayment}>
              <h1 className="text-base text-secondary font-semibold mt-5">
                Financing Calculator
              </h1>
              <div className="mt-5">
                <div>
                  <label
                    htmlFor="Price"
                    className="text-secondary text-[13px] font-semibold"
                  >
                    Price $
                  </label>
                  <input
                    type="text"
                    name="Price"
                    id=""
                    value={price}
                    onChange={handlePriceChange}
                    className="w-full py-3.5 px-5 text-[13px] text-[#5F6973] border-[1px] border-gray-200 rounded-lg outline-none focus:border-gray-400 mt-1.5"
                  />
                </div>
                <div className="md:flex gap-8">
                  <div className="mt-4 w-full">
                    <label
                      htmlFor="Rate"
                      className="text-secondary text-[13px] font-semibold"
                    >
                      Rate %
                    </label>
                    <input
                      type="text"
                      name="Rate"
                      id=""
                      value={rate}
                      onChange={handleRateChange}
                      className="w-full py-3.5 px-5 text-[13px] text-[#5F6973] border-[1px] border-gray-200 rounded-lg outline-none focus:border-gray-400  mt-1.5"
                    />
                  </div>
                  <div className="mt-4 w-full">
                    <label
                      htmlFor="LoanTermYear"
                      className="text-secondary text-[13px] font-semibold"
                    >
                      Loan Term Year
                    </label>
                    <input
                      type="text"
                      name="LoanTermYear"
                      id=""
                      value={loanTermYear}
                      onChange={handleLoanTermYear}
                      className="w-full py-3.5 px-5 text-[13px] text-[#5F6973] border-[1px] border-gray-200 rounded-lg outline-none focus:border-gray-400  mt-1.5"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="Downpayment"
                    className="text-secondary text-[13px] font-semibold"
                  >
                    Down Payment $
                  </label>
                  <input
                    type="text"
                    name="DownPayment"
                    id=""
                    value={downPayment}
                    onChange={handleDownPayment}
                    className="w-full py-3.5 px-5 text-[13px] text-[#5F6973] border-[1px] border-gray-200 rounded-lg outline-none focus:border-gray-400 mt-1.5"
                  />
                </div>
                <button
                  type="submit"
                  className="text-[13px] text-secondary font-semibold bg-primary py-3.5 px-8 rounded-lg my-5"
                >
                  Calculate
                </button>
              </div>
            </form>
            {monthlyPayment !== null && (
              <div className="text-center mt-2 mb-1 text-[#E44343] text-base font-semibold xxl:mb-0">
                <p>{`Monthly Payment: $${monthlyPayment}`}</p>
              </div>
            )}
          </div>
          <div className="mt-5 md:mt-0">
            <Image
              src="/assets/images/24/7.jpeg"
              alt="24/7"
              width={1000}
              height={1000}
              className="w-[250px] h-[330px] md:w-[400px] md:h-[280px] rounded-lg xl:w-[430px] xl:h-[320px] xxl:w-[550px] xxl:h-[380px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
