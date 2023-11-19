import React from "react";
import { shopCategoryData } from "@/components/shopData";
import Image from "next/image";
import Link from "next/link";

const SideShop = ({handleCategory}) => {


  return (
    <section className="hidden lg:block lg:w-[30%] xxl:w-[23%]">
      <div className="mx-auto w-[300px] border-[1px] border-gray-200 bg-white rounded-lg px-5 lg:w-full xl:pt-7">
        <h1 className="text-[16px] text-secondary font-semibold mb-5 ">
          Categories
        </h1>
        <div>
          {shopCategoryData.map((item, index) => {
            return (
              <div
                key={index}
                className="flex justify-between items-center text-[13px] mb-5"
              >
                <h3 className="text-secondary hover:text-blue-700 cursor-pointer" onClick={() => handleCategory(item.category)}>{item.category}</h3>
                <p className="text-[#5F6973]">
                  {`(${
                    item.accessoriesProducts?.length ||
                    item.exteriorProducts?.length ||
                    item.interiorProducts?.length ||
                    item.oilAndFiltersProducts?.length ||
                    item.partsProducts?.length ||
                    item.soundProducts?.length ||
                    item.wheelsProducts?.length
                  })`}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mx-auto w-[300px] border-[1px] mt-8 border-gray-200 bg-white rounded-lg p-5 lg:w-full">
        <h1 className="text-[16px] text-secondary font-semibold mb-7">
          Recent Products
        </h1>
        <ul className="grid gap-6">
        {shopCategoryData.map((category) => (
            category.interiorProducts?.slice(0, 3).map((item) => {
              return (
                <div key={item.product_ID} className="flex gap-3">
                 <div className="border-[1px] border-gray-200 rounded-lg max-w-[80px] min-h-[90px] overflow-hidden">
                 <Image
                    src={item.shopImg}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="h-full"
                  />
                 </div>
                 <div className="text-[13px] text-secondary">
                 <Link href={`/pages/shop/product-details/${category.category}/${item.product_ID}`}>
                 <h3 className="leading-6 hover:text-blue-700 ">
                    {item.title}
                  </h3>
                  </Link>
                  <p className="font-semibold mt-1">{`$${item.price}`}</p>
                 </div>
                </div>
              );
            })
        ))}
        </ul>
      </div>
    </section>
  );
};

export default SideShop;
