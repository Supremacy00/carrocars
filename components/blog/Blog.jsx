"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { blogData } from "@/components/data";
import { TfiPlus, TfiMenuAlt, TfiClose } from "react-icons/tfi";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaCommentDots } from "react-icons/fa";
import { IoCalendarNumber } from "react-icons/io5";
import SideBlog from "./SideBlog";
import SideBlogNav from "./SideBlogNav";

const Blog = () => {
  const [descriptionLimit, setDescriptionLimit] = useState(140);
  const [blogTitleLimit, setBlogTitleLimit] = useState(500);
  const [isSideBlogNav, setIsSideBlogNav] = useState(false);

  const truncateDescription = (text, limit) => {
    if (text.length > limit) {
      return text.substring(0, limit) + " " + "...";
    }
    return text;
  };

  const slicedBlogData = blogData.slice(0, 6);

  const updatedBlogData = slicedBlogData.map((blog) => {
    const truncatedDescription = truncateDescription(
      blog.description,
      descriptionLimit
    );
    const truncatedBlogTitle = truncateDescription(
      blog.blogTitle,
      blogTitleLimit
    );

    return {
      ...blog,
      description: truncatedDescription,
      blogTitle: truncatedBlogTitle,
    };
  });

  useEffect(() => {
    const updateLimits = () => {
      if (window.innerWidth < 640) {
        setDescriptionLimit(40);
        setBlogTitleLimit(40);
      } else if (window.innerWidth > 991 && window.innerWidth < 1300) {
        setDescriptionLimit(50);
        setBlogTitleLimit(50);
      } else {
        setDescriptionLimit(descriptionLimit);
        setBlogTitleLimit(blogTitleLimit);
      }
    };

    updateLimits();

    window.addEventListener("resize", updateLimits);

    return () => {
      window.removeEventListener("resize", updateLimits);
    };
  }, []);

  const handleSideBlogNav = () => {
    setIsSideBlogNav(!isSideBlogNav);
  };

  return (
    <section className="pb-12">
      <div className="relative z-40 ">
        <div
          className="relative w-full h-[130px] bg-cover bg-center md:h-[105px] xl:h-[230px]"
          style={{ backgroundImage: 'url("/assets/images/car1.jpg")' }}
        />
        <div className="absolute w-full inset-0 h-full bg-nav-bg-color bg-opacity-80 " />
        <div className=" absolute top-1/4 inset-0 px-4 text-white md:top-0 md:flex items-center justify-between mx-auto md:max-w-[991px] md:px-6 xl:px-8 xxl:max-w-[1355px]">
          <h1 className="text-[25px] font-semibold xl:text-[33px]">Blog</h1>
          <p className="text-[13px]  mt-2 md:mt-0">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-1.5">/</span>
            <span>Blog</span>
          </p>
        </div>
      </div>
      <section className="mx-auto mt-7 px-4 md:max-w-[991px] lg:flex lg:gap-8 md:px-6 xl:mt-12 xxl:max-w-[1355px] ">
        <article className="flex flex-col gap-5 lg:gap-8 lg:w-[70%] xxl:w-3/4 transition-all duration-300 ease-in-out">
          {updatedBlogData.map((item) => {
            return (
              <article
                key={item.id}
                className="flex items-center inset-0 border-[1px] group border-gray-200 rounded-lg py-3 pl-2.5"
              >
                <div className="relative cursor-pointer">
                  <div className="w-[120px] h-[70px] z-40 overflow-hidden bg-nav-bg-color bg-opacity-0 rounded-lg sm:w-[160px] sm:h-[90px] md:w-[300px] md:h-[175px] xxl:w-[400px] xxl:h-[170px] ">
                    <div
                      className=" w-full h-full bg-cover bg-no-repeat transform -z-20 transition delay-10 duration-300 group-hover:scale-110"
                      style={{ backgroundImage: `url(${item.blogImg})` }}
                    />
                  </div>
                  <div className="absolute top-0 inset-0 text-white">
                    <div
                      className={`${
                        item.category
                          ? "text-[10px] flex justify-center mt-2.5 uppercase font-semibold bg-[#D0473A] py-[5px]  w-20 mx-auto rounded-full max-w-full md:text-[11px] md:w-24 md:py-[6px] lg:mr-[72px] xl:mr-[92px] xxl:mr-[152px]"
                          : ""
                      } cursor-text`}
                    >
                      <p>{item.category}</p>
                    </div>
                  </div>
                </div>
                <div className="mx-4 flex-grow xxl:mx-8">
                  <div className="text-[#5F6973] hidden text-[13px] md:flex items-center gap-4 mb-4 lg:block lg:space-y-2 xxl:flex xxl:space-y-0 xxl:gap-6 ">
                    <div className="flex items-center gap-4 lg:justify-start xxl:gap-6">
                      <div className="flex gap-1">
                        <RiAccountCircleFill className="text-[18.5px]" />
                        <h3>Admin</h3>
                      </div>
                      <div className="flex  gap-1">
                        <FaCommentDots className="text-[16px]" />
                        <h3>{`${item.numberOfComments} ${
                          item.numberOfComments === 1 ||
                          item.numberOfComments === 0
                            ? "Comment"
                            : "Comments"
                        }`}</h3>
                      </div>
                    </div>
                    <div className="flex  gap-1">
                      <IoCalendarNumber className="text-[16px]" />
                      <h3>{item.postDate}</h3>
                    </div>
                  </div>
                  <div className="text-secondary font-semibold mb-2.5 xxl:mb-3.5">
                      <h1 className="text-[16px] xxl:text-[20px] xxl:leading-8">
                        {item.blogTitle}
                      </h1>
                  </div>
                  <div className="text-[13px] text-[#5F6973] leading-6">
                    <p>{item.description}</p>
                  </div>
                  <section className="hidden md:flex mt-5">
                    <div className="flex items-center gap-3 group cursor-pointer xl:gap-4">
                      <p className="text-[13px] text-secondary font-semibold group-hover:text-blue-700 transition-colors delay-100 duration-200 ease-in-out">
                        Read More
                      </p>
                      <div className="relative bg-[#F5C34B] w-7 h-7 rounded-full group-hover:bg-secondary transition-colors delay-100 duration-200 ease-in-out xxl:w-9 xxl:h-9">
                        <TfiPlus className="absolute inset-2 text-[13px] text-white xxl:inset-3" />
                      </div>
                    </div>
                  </section>
                </div>
              </article>
            );
          })}
        </article>
        <SideBlog />
      </section>
      <div
        className="fixed top-[28%] inset-0 z-50 lg:hidden w-9 h-10 bg-nav-bg-color bg-opacity-80 rounded-r-md cursor-pointer hover:bg-nav-bg-color transition-all duration-300 delay-100 ease-in-out"
        onClick={handleSideBlogNav}
      >
        {!isSideBlogNav ? (
          <TfiMenuAlt className="absolute inset-2.5 text-white text-[20px] -ml-1" />
        ) : (
          isSideBlogNav && (
            <TfiClose className="absolute inset-2.5 text-white text-[18px] -ml-0.5" />
          )
        )}
      </div>
      <SideBlogNav
        isSideBlogNav={isSideBlogNav}
        setIsSideBlogNav={setIsSideBlogNav}
      />
    </section>
  );
};

export default Blog;
