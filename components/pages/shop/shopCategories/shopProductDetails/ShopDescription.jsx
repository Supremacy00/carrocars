import React from "react";

const Description = ({ product }) => {
  return (
    <section className="p-5 md:p-8">
      <div className="text-[13px] text-[#5F6973]">
        <p className="leading-6">
          {product.itemInfo.productDetails.description}
        </p>
        <h1 className="text-secondary text-[15px] font-semibold mt-5">
          Material and care
        </h1>
        <ul className="my-5 md:grid grid-cols-2 place-content-center">
          <div className="space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="min-w-[6px] h-[6px] rounded-full bg-[#696969]" />
              <li>{product.itemInfo.productDetails.materialAndCare.main}</li>
            </div>
            <div className="flex items-center gap-3.5">
              <div className="min-w-[6px] h-[6px] rounded-full bg-[#696969]" />
              <li>{product.itemInfo.productDetails.materialAndCare.type}</li>
            </div>
            <div className="flex items-center gap-3.5">
              <div className="min-w-[6px] h-[6px] rounded-full bg-[#696969]" />
              <li>{product.itemInfo.productDetails.materialAndCare.pattern}</li>
            </div>
          </div>
          <div className="space-y-4 mt-4 md:mt-0">
            <div className="flex items-center gap-3.5">
              <div className="min-w-[6px] h-[6px] rounded-full bg-[#696969]" />
              <li>{product.itemInfo.productDetails.materialAndCare.size}</li>
            </div>
            <div className="flex items-center gap-3.5">
              <div className="min-w-[6px] h-[6px] rounded-full bg-[#696969]" />
              <li>{product.itemInfo.productDetails.materialAndCare.origin}</li>
            </div>
            <div className="flex items-center gap-3.5">
              <div className="min-w-[6px] h-[6px] rounded-full bg-[#696969]" />
              <li>
                {product.itemInfo.productDetails.materialAndCare.productColor}
              </li>
            </div>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default Description;
