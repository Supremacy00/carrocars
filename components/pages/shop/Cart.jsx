"use client";
import React, { useState } from "react";
import Link from "next/link";
import { BsTrash3 } from "react-icons/bs";
import CartNotification from "./CartNotification";
import EmptyCart from "./EmptyCart";
import Checkout from "./Checkout";
import { useCombinedCart } from "@/components/CombinedCartProvider";

const Cart = () => {
  const {
    cartItems,
    handleDelete,
    isItemDeleted,
    handleQuantityChange,
    handleUpdateCart,
  } = useCombinedCart();

  const [updatedQuantities, setUpdatedQuantities] = useState({});

  const handleUpdateClick = () => {
    // Call the handleUpdateCart function with the correct parameters
    handleUpdateCart(updatedQuantities);
    // Reset the state after updating the cart
    setUpdatedQuantities({});
  };
  return (
    <section className="bg-[#f8f8f8] py-7 ">
      <div className="mx-auto px-4 md:max-w-[991px] md:px-6 xl:xl:px-8 xxl:max-w-[1355px]">
        <div className="md:flex justify-between items-center">
          <h1 className="text-[25px] text-secondary font-semibold xl:text-[33px]">
            Cart
          </h1>
          <p className="text-[13px] text-[#5F6973] pt-2 md:pt-0">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-1.5">/</span>
            <span>Cart</span>
          </p>
        </div>
        {isItemDeleted && <CartNotification cartItems={cartItems} />}
        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="xl:flex gap-12 xl:mt-7">
            <div className="xl:w-[70%]">
              <ul className="w-full bg-white mt-7 xl:mt-0">
                {cartItems.map((cartItem) => (
                  <li key={cartItem.product_ID} className="text-[13px]">
                    <div className="flex justify-between items-center px-4 py-3">
                      <h2 className="text-[#5F6973] font-semibold">Product:</h2>
                      <Link
                        href={`/pages/shop/product-details/${cartItem.category}/${cartItem.product_ID}`}
                      >
                        <p className="text-secondary hover:text-blue-700">
                          {cartItem.title}
                        </p>
                      </Link>
                    </div>
                    <div className="w-full h-[1px] bg-gray-200" />
                    <div className="flex justify-between items-center text-[#5F6973] px-4 py-3">
                      <h2 className="font-semibold">Price:</h2>
                      <p>{`$${cartItem.price}`}</p>
                    </div>
                    <div className="w-full h-[1px] bg-gray-200" />
                    <div className="flex justify-between items-center px-4 py-2">
                      <h2 className="text-[#5F6973] font-semibold">
                        Quantity:
                      </h2>
                     {cartItem.pricing ? (
                      <p className="text-[13px] text-[#5F6973]">{cartItem.quantity}</p>
                     ) : (
                      <input
                      type="text"
                      name=""
                      id={`quantity-${cartItem.product_ID}`}
                      value={
                        updatedQuantities[cartItem.product_ID] ||
                        cartItem.quantity
                      }
                      onChange={(e) =>
                        handleQuantityChange(cartItem.product_ID, e)
                      }
                      className="text-center text-[#5F6973] outline-none border-[1px] border-gray-200 py-3.5 w-20 rounded-lg"
                    />
                     )}
                    </div>
                    <div className="w-full h-[1px] bg-gray-200" />
                    <div className="flex justify-between items-center font-semibold text-secondary px-4 py-3">
                      <h2>Total:</h2>
                      <p>{`$${
                        cartItem.price *
                        (updatedQuantities[cartItem.product_ID] !== undefined
                          ? updatedQuantities[cartItem.product_ID]
                          : cartItem.quantity)
                      }`}</p>
                    </div>
                    <div className="w-full h-[1px] bg-gray-200" />
                    <div className="flex justify-end text-[17px] text-[#5F6973] px-6 py-5">
                      <BsTrash3
                        className="cursor-pointer hover:text-red-600"
                        onClick={() => handleDelete(cartItem.product_ID)}
                      />
                    </div>
                    <div className="w-full h-[1px] bg-gray-200" />
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <div className="space-y-5 sm:flex justify-between gap-10 sm:space-y-0 ">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Coupon code"
                    className="border-[1px] border-gray-200 bg-white w-full h-[52px] px-4 text-[13px] rounded-lg outline-none sm:max-w-[200px] placeholder-[#5F6973]"
                  />
                  <div className="flex flex-row-reverse">
                    <button
                      type="text"
                      name=""
                      id=""
                      className="border-[1px] border-gray-200 bg-primary text-[13px] text-secondary font-semibold w-[210px] overflow-hidden h-[52px] rounded-lg outline-none hover:bg-nav-bg-color hover:text-white transition-colors duration-300 delay-100 ease-in-out sm:w-[350px] xl:w-[400px]"
                    >
                      Apply coupon
                    </button>
                  </div>
                </div>
                <div className="flex flex-row-reverse mt-2">
                  <button
                    className="px-8 bg-nav-bg-color text-[13px] text-white font-semibold h-[52px] rounded-lg xl:px-14"
                    onClick={handleUpdateClick}
                  >
                    Update Cart
                  </button>
                </div>
              </div>
            </div>
            <Checkout />
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
