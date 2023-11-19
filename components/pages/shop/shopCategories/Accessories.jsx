import React from "react";
import { shopCategoryData } from "@/components/shopData";
import CommonShop from "../CommonShop";

const Accessories = () => {
  return (
    <section className="mt-5">
      <div className="grid grid-cols-2 gap-5 lg:gap-8 lg:grid-cols-3">
        {shopCategoryData.map((category) =>
          category.accessoriesProducts?.map((item) => {
            return (
             <CommonShop category={category} item={item}/>
            );
          })
        )}
      </div>
    </section>
  );
};

export default Accessories;
