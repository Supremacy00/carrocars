import Link from "next/link";
import React from "react";
Link

const Services = () => {
  return (
    <section className="bg-[#f8f8f8] border-t-[1px] border-gray-200">
      <div className="mx-auto px-4 md:max-w-[991px] md:px-6 xl:px-8 xxl:max-w-[1355px]">
        <div className="md:flex justify-between items-center">
          <h1 className="text-[25px] text-secondary font-semibold xl:text-[33px]">
            Service
          </h1>
          <p className="text-[13px] text-[#5F6973] pt-2 md:pt-0">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-1.5">/</span>
            <span>Service</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
