import React from "react";
import Image from "next/image";
import Link from "next/link";
import ShopStarRating from "./ShopStarRating";
import { AiOutlineShopping } from "react-icons/ai";
import { FadeLoader } from "react-spinners";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useCombinedCart } from "@/components/CombinedCartProvider";

const CommonShop = ({ category, item }) => {
  const { handleCart, isLoading, cart } = useCombinedCart();
  return (
    <div
      key={item.product_ID}
      className="bg-white border-[1px] px-5 border-gray-200 group rounded-lg"
    >
      <div>
        <div className="mx-auto w-full h-full overflow-hidden mt-4 md:max-w-[300px] ">
          <Image
            src={item.shopImg}
            alt={item.title}
            width={1000}
            height={1000}
            className="w-full h-full transition-all delay-400 duration-700  group-hover:scale-110 cursor-pointer"
          />
        </div>
        <div className="mt-3">
          <Link
            href={`/pages/shop/product-details/${category.category}/${item.product_ID}`}
          >
            <h3 className="text-[13px] text-secondary hover:text-blue-700 font-semibold ">
              {item.title}
            </h3>
          </Link>
          <div className="flex items-center gap-2 mt-2">
            <ShopStarRating stars={item.stars} />
            <p className="text-[13px] text-[#5F6973]">{`(${item.itemInfo.comments.length})`}</p>
          </div>
        </div>
        <div className="flex justify-between items-center flex-wrap mt-3 mb-5">
          <p className="text-[13px] text-secondary font-semibold">{`$${item.price}`}</p>
          <div
            className={`${
              isLoading(item.product_ID)
                ? "border-[1px]  border-[#F5C34B] border-opacity-30"
                : !isLoading(item.product_ID) && cart(item.product_ID)
                ? "hidden"
                : "bg-[#F5C34B] border-[1px] bg-opacity-50"
            } relative w-10 h-10 rounded-full cursor-pointer transition-all delay-400 duration-700 group-hover:bg-opacity-100`}
            onClick={() => {
              handleCart(item.product_ID, category.category);
            }}
          >
            {isLoading(item.product_ID) ? (
              <span className="text-[20px] text-secondary absolute inset-[24.5px]">
                <FadeLoader
                  color="#1A3760"
                  height={4}
                  margin={-12}
                  radius={2}
                  width={2}
                />
              </span>
            ) : (
              <AiOutlineShopping className="text-[20px] text-secondary absolute inset-[9px]" />
            )}
          </div>
          <Link href="/pages/shop/cart"  className={`${
                !isLoading(item.product_ID) && cart(item.product_ID)
                  ? "block"
                  : "hidden"
              }`}
            >
            <span
              className={`${
                !isLoading(item.product_ID) && cart(item.product_ID)
                  ? "block"
                  : "hidden"
              } relative bg-[#F5C34B] w-10 h-10 rounded-full cursor-pointer transition-all delay-400 duration-700 ease-in-out group-hover:bg-opacity-100`}
            >
              <HiArrowNarrowRight className="text-[20px] text-secondary absolute inset-[10px]" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommonShop;
