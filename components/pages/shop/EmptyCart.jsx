import Link from "next/link";
import React from "react";
import { HiShoppingCart } from "react-icons/hi2";

const EmptyCart = () => {
  return (
    <section className="my-5">
      <div className="w-full py-4 px-5 bg-nav-bg-color rounded-lg flex items-center gap-3 text-white ">
        <HiShoppingCart className="text-[18px]" />
        <p className="text-[13px] font-semibold">
          Your cart is currenly empty.
        </p>
      </div>
      <Link href="/pages/shop">
        <button className="mt-6 text-[13px] text-secondary font-semibold bg-primary py-3 px-5 rounded-lg">
          Return To Shop
        </button>
      </Link>
    </section>
  );
};

export default EmptyCart;
