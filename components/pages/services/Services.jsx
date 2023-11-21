import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { serviceData } from "@/components/data";

const Services = () => {
  return (
    <section className="bg-[#f8f8f8] border-t-[1px] border-gray-200">
      <div className="mx-auto px-4 md:max-w-[991px] md:px-6 xl:px-8 xxl:max-w-[1355px]">
        <div className="md:flex justify-between items-center mt-5">
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
        <div className="mt-4">
          <div className="md:flex items-center gap-5 md:gap-3 xxl:gap-5">
            <div>
              <h1 className="text-lg text-secondary font-semibold mb-4 lg:text-2xl">
                Our Service Include
              </h1>
              <p className="text-[13px] text-[#5F6973] leading-6">
                Our CarSure experts inspect the car on over 500 checkpoints so
                you get complete satisfaction and peace of mind before buying.
              </p>
              <div className="md:flex items-center gap-5 mt-5 lg:mt-10 xxl:gap-16">
                <div>
                  <div className="flex items-center gap-2.5">
                    <FaCircleCheck className="text-blue-700 text-[18px]" />
                    <p className="text-[13px] text-[#5F6973]">
                      General Automotive Repair
                    </p>
                  </div>
                  <div className="flex items-center gap-2.5 mt-4 md:mt-5 lg:mt-5.5">
                    <FaCircleCheck className="text-blue-700 text-[18px]" />
                    <p className="text-[13px] text-[#5F6973]">
                      Preventative Car Maintenance
                    </p>
                  </div>
                  <div className="flex items-center gap-2.5 mt-4 md:mt-5 lg:mt-5.5">
                    <FaCircleCheck className="text-blue-700 text-[18px]" />
                    <p className="text-[13px] text-[#5F6973]">
                      Cooling System and Radiator Repair
                    </p>
                  </div>
                  <div className="flex items-center gap-2.5 mt-4 md:mt-5 lg:mt-5.5">
                    <FaCircleCheck className="text-blue-700 text-[18px]" />
                    <p className="text-[13px] text-[#5F6973]">
                      Air Conditioning and Heater Service
                    </p>
                  </div>
                  <div className="flex items-center gap-2.5 mt-4 md:mt-5 lg:mt-5.5">
                    <FaCircleCheck className="text-blue-700 text-[18px]" />
                    <p className="text-[13px] text-[#5F6973]">
                      Synthetic Motor Oil Replacement
                    </p>
                  </div>
                </div>
                <div className="pt-2 md:pt-0">
                  <div className="flex items-center gap-2.5 mt-4 md:mt-0">
                    <FaCircleCheck className="text-blue-700 text-[18px]" />
                    <p className="text-[13px] text-[#5F6973]">Brake Repair</p>
                  </div>
                  <div className="flex items-center gap-2.5 mt-4 md:mt-5 lg:mt-5.5">
                    <FaCircleCheck className="text-blue-700 text-[18px]" />
                    <p className="text-[13px] text-[#5F6973]">
                      Engine Diagnostic
                    </p>
                  </div>
                  <div className="flex items-center gap-2.5 mt-4 md:mt-5 lg:mt-5.5">
                    <FaCircleCheck className="text-blue-700 text-[18px]" />
                    <p className="text-[13px] text-[#5F6973]">
                      Belts, Hoses, Fluids
                    </p>
                  </div>
                  <div className="flex items-center gap-2.5 mt-4 md:mt-5 lg:mt-5.5">
                    <FaCircleCheck className="text-blue-700 text-[18px]" />
                    <p className="text-[13px] text-[#5F6973]">
                      Transmission Services
                    </p>
                  </div>
                  <div className="flex items-center gap-2.5 mt-4 md:mt-5 lg:mt-5.5">
                    <FaCircleCheck className="text-blue-700 text-[18px]" />
                    <p className="text-[13px] text-[#5F6973]">
                      Oil Filter Replacement
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-10 md:w-[65%] md:h-[90%] lg:w-[75%] lg:h-[100%] xxl:w-[70%] h-[70%]">
              <Image
                src="/assets/images/service1.jpg"
                alt="service logo"
                width={1000}
                height={1000}
                className="W-full rounded-md "
              />
            </div>
          </div>
        </div>
      </div>
      <section className="mx-auto px-4 mt-20 md:max-w-[991px] md:px-6 xl:px-8 xxl:max-w-[1355px]">
        <ul className="">
          {serviceData.services.map((item) => {
            return (
              <li key={item.id}>
                <div>
                  <div className="max-w-full h-[40%]">
                    <Image
                      src={item.serviceImg}
                      alt={item.title}
                      width={200}
                      height={200}
                      className="w-full"
                    />
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
};

export default Services;
