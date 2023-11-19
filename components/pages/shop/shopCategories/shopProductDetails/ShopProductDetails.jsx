"use client";
import { useParams } from "next/navigation";
import { shopCategoryData } from "@/components/shopData";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ShopDescription from "./ShopDescription";
import AdditionalInfo from "./AdditionalInfo";
import ShopReview from "./ShopReview";
Link;

const ShopProductDetails = () => {
  const params = useParams();
  const shopid = params?.shopid;
  const category = decodeURIComponent(params?.category);

  const getCategoryByName = (category) => {
    return shopCategoryData.find(
      (categoryName) => categoryName.category === category
    );
  };

  const getProductById = (category, shopid) => {
    const foundCategory = getCategoryByName(category);

    if (foundCategory) {
      const productKey = getProductKey(category);
      const foundProduct = foundCategory[productKey]?.find(
        (item) => item.product_ID === shopid
      );
      return foundProduct || null;
    }

    return null;
  };

  const getProductKey = (category) => {
    // Customize this function based on your naming conventions
    if (category.toLowerCase() === "oil & filters") {
      return "oilAndFiltersProducts";
    } else {
      return `${category.toLowerCase()}Products`;
    }
  };

  const product = getProductById(category, shopid);

  if (!shopid || !category) {
    return <p>Invalid URL</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  const [shopProductDetailsSection, setShopProductDetailsSection] =
    useState("Description");
  const handleSection = (section) => {
    setShopProductDetailsSection(section);
  };

  return (
    <section className="bg-[#f8f8f8] py-7">
      <div className="mx-auto px-4 md:max-w-[991px] md:px-6 xl:px-8 xxl:max-w-[1355px]">
        <div className="pt-5 md:flex justify-between items-center">
          <h1 className="text-[25px] text-secondary font-semibold xl:text-[33px]">
            {product.title}
          </h1>
          <p className="text-[13px] text-[#5F6973] mt-2 md:mt-0">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-1.5">/</span>
            <span>{category}</span>
            <span className="mx-1.5">/</span>
            <span>{product.title}</span>
          </p>
        </div>
        <div className="mt-5 lg:grid grid-cols-2 place-items-center gap-7 xl:gap-10 xxl:place-items-start">
          <div className="w-full bg-white rounded-lg border-[1px] border-gray-200 overflow-hidden">
            <Image
              src={product.shopImg}
              alt={product.title}
              width={1000}
              height={1000}
              className="mx-auto w-[70%] h-[1000%] sm:w-[423px] sm:h-[423px] xxl:h-[450px] "
            />
          </div>
          <div className="text-[13px]">
            <div className="mt-4">
              <h1 className="text-[22px] text-secondary font-semibold xl:text-[28px]">
                {product.title}
              </h1>
              <p className="text-[13px] leading-6 text-[#5F6973] mt-3">
                {product.about}
              </p>
              <h3 className="text-[20px] text-secondary font-semibold mt-3">{`$${product.price}`}</h3>
            </div>
            <div className="flex items-center flex-wrap gap-3.5 mt-5 ">
              <h3 className="text-[#5F6973]">Quantity</h3>
              <input
                type="number"
                name=""
                id=""
                className="text-center text-[#5F6973] outline-none appearance-none border-[1px] border-gray-200 py-3 w-20 rounded-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              <button className="px-5 py-3 bg-primary text-[13px] text-secondary font-semibold rounded-lg hover:bg-nav-bg-color hover:text-white transition-colors duration-300 delay-100 ease-in-out xl:px-16 xl:py-4 xl:ml-4">
                Add To Cart
              </button>
            </div>
            <div className="text-[#5F6973] space-y-2.5 text-[13px] mt-5">
              <div className="flex items-center gap-[88px]">
                <h3 className="">SKU:</h3>
                <p>{product.sku}</p>
              </div>
              <div className="flex items-center gap-12">
                <h3>Categories:</h3>
                <p>{product.categories}</p>
              </div>
              <div className="flex items-center gap-[86px]">
                <h3>Tags:</h3>
                <p>{product.tags}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 xl:mt-20">
          <ul className="flex justify-start text-[14px] font-semibold lg:justify-center md:text-[16px]">
            <li
              className={`${
                shopProductDetailsSection === "Description"
                  ? "bg-white px-3 py-3 text-blue-700 border-t-[1px] border-x-[1px] border-gray-200 rounded-tl-lg rounded-tr-lg sm:px-4"
                  : "text-secondary px-3 py-3 border-t-[1px] border-x-[1px] border-transparent sm:px-4"
              } cursor-pointer`}
              onClick={() => handleSection("Description")}
            >
              Description
            </li>
            <li
              className={`${
                shopProductDetailsSection === "AdditionalInfo"
                  ? "bg-white px-3 py-3 text-blue-700 border-t-[1px] border-x-[1px] border-gray-200 rounded-tl-lg rounded-tr-lg sm:px-4"
                  : "text-secondary px-3 py-3 border-t-[1px] border-x-[1px] border-transparent sm:px-4"
              } cursor-pointer`}
              onClick={() => handleSection("AdditionalInfo")}
            >
              <span className="sm:hidden">Information</span>
              <span className="hidden sm:inline">Aditional Information</span>
            </li>
            <li
              className={`${
                shopProductDetailsSection === "Review"
                  ? "bg-white px-3 py-3 text-blue-700 border-t-[1px] border-x-[1px] border-gray-200 rounded-tl-lg rounded-tr-lg sm:px-4"
                  : "text-secondary px-3 py-3 border-t-[1px] border-x-[1px] border-transparent sm:px-4"
              } cursor-pointer`}
              onClick={() => handleSection("Review")}
            >
              {product.itemInfo.comments.length <= 1 ? "Review" : "Reviews"}{" "}
              {`(${product.itemInfo.comments.length || 0})`}
            </li>
          </ul>
        </div>
        <div
          className={`${
            shopProductDetailsSection === "Description"
              ? "bg-white border-[1px] border-gray-200 rounded-tr-lg rounded-bl-lg rounded-br-lg -m-[1px] lg:rounded-lg"
              : "bg-white border-[1px] border-gray-200 rounded-lg -m-[1px]"
          } w-full mx-auto lg:max-w-[800px]`}
        >
          {shopProductDetailsSection === "Description" ? (
            <ShopDescription product={product} />
          ) : shopProductDetailsSection === "AdditionalInfo" ? (
            <AdditionalInfo product={product} />
          ) : (
            shopProductDetailsSection === "Review" && (
              <ShopReview product={product} />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default ShopProductDetails;
