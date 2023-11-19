import React from "react";

const Overview = ({carDetails}) => {
  return (
    <section>
      <h1 className="text-[21px] text-secondary font-semibold mt-6">Details</h1>
      <ul className="text-[13px] mt-8 no-underline">
        <li className="flex justify-between items-center list-none">
          <li className="text-secondary font-semibold">Type:</li>
          <li className="text-[#5F6973]">{carDetails.overview.type}</li>
        </li>
        <li className="w-full h-[1px] bg-gray-200 my-2.5 list-none"/>
        <li className="flex justify-between items-center list-none">
          <li className="text-secondary font-semibold">Make:</li>
          <li className="text-[#5F6973]">{carDetails.overview.make}</li>
        </li>
        <li className="w-full h-[1px] bg-gray-200 my-2.5 list-none"/>
        <li className="flex justify-between items-center list-none">
          <li className="text-secondary font-semibold">Model:</li>
          <li className="text-[#5F6973]">{carDetails.overview.model}</li>
        </li>
        <li className="w-full h-[1px] bg-gray-200 my-2.5 list-none"/>
        <li className="flex justify-between items-center list-none">
          <li className="text-secondary font-semibold">Color:</li>
          <li className="text-[#5F6973]">{carDetails.overview.color}</li>
        </li>
        <li className="w-full h-[1px] bg-gray-200 my-2.5 list-none"/>
        <li className="flex justify-between items-center list-none">
          <li className="text-secondary font-semibold">Drive Type:</li>
          <li className="text-[#5F6973]">{carDetails.overview.driveType}</li>
        </li>
        <li className="w-full h-[1px] bg-gray-200 my-2.5 list-none"/>
        <li className="flex justify-between items-center list-none">
          <li className="text-secondary font-semibold">Transmission:</li>
          <li className="text-[#5F6973]">C{carDetails.overview.transmission}</li>
        </li>
        <li className="w-full h-[1px] bg-gray-200 my-2.5 list-none"/>
        <li className="flex justify-between items-center list-none">
          <li className="text-secondary font-semibold">Condition:</li>
          <li className="text-[#5F6973]">{carDetails.overview.condition}</li>
        </li>
        <li className="w-full h-[1px] bg-gray-200 my-2.5 list-none"/>
        <li className="flex justify-between items-center list-none">
          <li className="text-secondary font-semibold">Year:</li>
          <li className="text-[#5F6973]">{carDetails.overview.year}</li>
        </li>
        <li className="w-full h-[1px] bg-gray-200 my-2.5 list-none"/>
        <li className="flex justify-between items-center list-none">
          <li className="text-secondary font-semibold">Mileage:</li>
          <li className="text-[#5F6973]">{carDetails.overview.mileage}</li>
        </li>
        <li className="w-full h-[1px] bg-gray-200 my-2.5 list-none"/>
        <li className="flex justify-between items-center list-none">
          <li className="text-secondary font-semibold">Fuel Type:</li>
          <li className="text-[#5F6973]">{carDetails.overview.fuelType}</li>
        </li>
        <li className="w-full h-[1px] bg-gray-200 my-2.5 list-none"/>
        <li className="flex justify-between items-center list-none">
          <li className="text-secondary font-semibold">Engine Size:</li>
          <li className="text-[#5F6973]">{carDetails.overview.engineSize}</li>
        </li>
        <li className="w-full h-[1px] bg-gray-200 my-2.5 list-none"/>
        <li className="flex justify-between items-center list-none">
          <li className="text-secondary font-semibold">Door:</li>
          <li className="text-[#5F6973]">{carDetails.overview.door}</li>
        </li>
        <li className="w-full h-[1px] bg-gray-200 my-2.5 list-none"/>
        <li className="flex justify-between items-center list-none">
          <li className="text-secondary font-semibold">Cylinder:</li>
          <li className="text-[#5F6973]">{carDetails.overview.cylinder}</li>
        </li>
        <li className="w-full h-[1px] bg-gray-200 my-2.5 list-none"/>
        <li className="flex justify-between items-center list-none">
          <li className="text-secondary font-semibold">VIN:</li>
          <li className="text-[#5F6973]">{carDetails.overview.vin}</li>
        </li>
      </ul>
    </section>
  );
};

export default Overview;
