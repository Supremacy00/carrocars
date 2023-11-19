import React from "react";
import shopData from "@/components/shopData";
import Accessories from "./shopCategories/Accessories";
import Exterior from "./shopCategories/Exterior";
import Interior from "./shopCategories/Interior";
import OilAndFilters from "./shopCategories/OilAndFilters";
import Parts from "./shopCategories/Parts";
import Sound from "./shopCategories/Sound";
import Wheels from "./shopCategories/Wheels";

const ShopMain = ({ category }) => {
  return (
    <section>
      {category === "Accessories" ? (
        <Accessories />
      ) : category === "Exterior" ? (
        <Exterior />
      ) : category === "Interior" ? (
        <Interior />
      ) : category === "Oil & Filters" ? (
        <OilAndFilters />
      ) : category === "Parts" ? (
        <Parts />
      ) : category === "Sound" ? (
        <Sound />
      ) : (
        category === "Wheels" && <Wheels />
      )}
    </section>
  );
};

export default ShopMain;
