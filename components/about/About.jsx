import React from "react";
import Link from "next/link";
import Image from "next/image";
import { aboutTeam, whychooseusData } from "../data";
import WhyChooseUs from "../whyChooseUs/WhyChooseUs";
import Testimonials from "../testimonials/Testimonials";

const About = () => {
  return (
    <section>
      <div className="relative z-30 ">
        <div
          className="relative w-full h-[130px] bg-cover bg-center md:h-[105px] xl:h-[230px]"
          style={{ backgroundImage: 'url("/assets/images/car2.jpg")' }}
        />
        <div className="absolute w-full inset-0 h-full bg-nav-bg-color bg-opacity-80 " />
        <div className=" absolute top-1/4 inset-0 px-4 text-white md:top-0 md:flex items-center justify-between mx-auto md:max-w-[991px] md:px-6 xl:px-8 xxl:max-w-[1355px]">
          <h1 className="text-[25px] font-semibold xl:text-[33px]">About</h1>
          <p className="text-[13px]  mt-2 md:mt-0">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-1.5">/</span>
            <span>About</span>
          </p>
        </div>
      </div>
      <section className="mx-auto px-4 mt-10 md:max-w-[991px] md:px-6 md:mt-16 lg:mt-20 xl:px-8 xxl:mt-24 xxl:max-w-[1355px]">
        <div className="md:flex gap-8 lg:items-center lg:mb-32 lg:gap-16 xxl:gap-40">
          <div className="relative">
            <Image
              src="/assets/images/about1.jpg"
              alt="about image"
              width={1000}
              height={1000}
              className="relative md:w-[1500px] md:h-[420px] lg:w-[1550px] lg:h-[550px] xxl:w-[1400px] xxl:h-[670px]"
            />
            <div className="hidden absolute -bottom-32 right-5 lg:inline xxl:-right-20">
              <Image
                src="/assets/images/about2.jpg"
                alt="about image"
                width={1000}
                height={1000}
                className="w-[420px]"
              />
            </div>
          </div>
          <div>
            <h1 className="text-[20px] text-secondary font-semibold mt-8 md:mt-0 md:text-[24px] lg:text-[30px]">
              Welcome To The Carro
            </h1>
            <p className="text-[13px] text-[#5F6973] leading-6 mt-4">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque
              penatibus et magnis dis parturient montes, nascetur.
            </p>
            <p className="text-[13px] text-[#5F6973] leading-6 mt-5">
              Vel illum dolore eu feugiat nulla facilisis at vero eros et accu
              qui blandit praesent luptatum zzril delenit.
            </p>
            <button className="bg-primary text-secondary text-[13px] font-semibold px-[26px] py-2.5 rounded-lg mt-5 hover:bg-nav-bg-color hover:text-white transition-colors duration-300 delay-100 ease-in-out lg:px-10 lg:py-3.5 lg:mt-10">
              Learn More
            </button>
          </div>
        </div>
        <WhyChooseUs />
        <div className="pt-24">
          <div className="text-center text-[25px] text-secondary font-semibold lg:text-[30px] xl:text-[33px]">
            <h1>Our Team</h1>
          </div>
          <section className="grid grid-cols-2 gap-3.5 mt-8 md:grid-cols-4">
            {aboutTeam.map((item, index) => {
              return (
                <div key={item.id}>
                  <div className="relative w-full h-full overflow-hidden group rounded-lg cursor-pointer z-10">
                    <div className="bg-[#0C1227] w-full bg-opacity-20 h-full absolute rounded-lg z-30" />
                    <div className="w-full h-full bg-cover bg-no-repeat transition-all delay-100 duration-500 ease-in-out group-hover:scale-110 z-20">
                      <Image
                        src={item.bbtImg}
                        alt={item.title}
                        width={1000}
                        height={1000}
                        className="w-full h-full"
                      />
                    </div>
                    <div className="absolute bottom-0 p-3.5 text-white z-40 xxl:p-8">
                      <h1 className="text-[15px] font-semibold">
                        {item.title}
                      </h1>
                      <p className="text-[13px] mt-1.5">{item.track}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
        </div>
        <Testimonials />
      </section>
    </section>
  );
};

export default About;
