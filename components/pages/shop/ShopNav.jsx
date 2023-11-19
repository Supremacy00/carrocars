import React from 'react'
import Image from 'next/image';
import { Backdrop } from "@mui/material";
import { TfiClose } from 'react-icons/tfi'
import shopCategoryData from '@/components/shopData';

const ShopNav = ({isShopNav, setIsShopNav, handleCategory}) => {


  const handleClose = () => {
    setIsShopNav(false)
  }

  return (
    <Backdrop
    sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={isShopNav}
    className="z-40"
  >
    <nav
      className={`${
        isShopNav ? "w-[330px] max-w-full bg-white backdrop-blur-2xl " : " w-0"
      } fixed top-0 left-0 h-screen overflow-y-auto z-50 lg:hidden`}
    >
      <div className="mx-auto w-full px-2 pb-12">
       <div className="flex justify-center py-4">
       <div
          className="flex items-center gap-1 text-[14px] text-[#E44343] font-semibold cursor-pointer"
          onClick={handleClose}
        >
          <TfiClose />
          <p>Close</p>
        </div>
       </div>
       <div className="mx-auto max-w-[300px] border-[1px] border-gray-200 bg-white rounded-lg p-3.5 lg:w-full xl:p-8">
        <h1 className="text-[16px] text-secondary font-semibold mb-5 xxl:mb-5">
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
      <div className="mx-auto max-w-[300px] border-[1px] mt-8 border-gray-200 bg-white rounded-lg p-4 lg:w-full xl:p-8">
        <h1 className="text-[16px] text-secondary font-semibold mb-5">
          Recent Products
        </h1>
        <ul className=" grid gap-6">
        {shopCategoryData.map((category) => (
            category.interiorProducts?.slice(0, 3).map((item) => {
              return (
                <div key={item.product_ID} className="flex gap-5">
                 <div className="border-[1px] group border-gray-200 rounded-lg max-w-[80px] min-h-[90px] overflow-hidden cursor-pointer">
                 <Image
                    src={item.shopImg}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="h-full w-full transition-all delay-400 duration-700  group-hover:scale-110"
                  />
                 </div>
                 <div className="text-[13px] text-secondary ">
                 <h3 className="leading-6">
                    {item.title}
                  </h3>
                  <p className="font-semibold mt-1">{`$${item.price}`}</p>
                 </div>
                </div>
              );
            })
        ))}
        </ul>
      </div>
      </div>
    </nav>
    </Backdrop>
  )
}

export default ShopNav