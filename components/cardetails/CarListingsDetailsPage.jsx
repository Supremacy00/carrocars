"use client";
import React, { useEffect, useState } from "react";
import { useParams} from "next/navigation";
import { featureListingsData } from "../featureListingsData";
import { newCarsData} from "../newCarsData";
import { usedCarsData } from "../usedCarsData";
import Link from "next/link";
import { AiFillClockCircle, AiFillHeart } from "react-icons/ai";
import { BsFillEyeFill, BsPrinterFill, BsFillShareFill } from "react-icons/bs";
import { ImShuffle } from "react-icons/im";
import AdminContact from "./AdminContact";
import Description from "./Description";
import Overview from "./Overview";
import Features from "./Features";
import Location from "./Location";
import Review from "./Review";

const CarListingsDetailsPage = () => {
  const [carDetailsStatus, setCarDetailsStatus] = useState("Description");
  const [carDetailsDataStatus, setCarDetailsDataStatus] = useState("FeatureListings");
  const [carDetails, setCarDetails] = useState({});

  const params = useParams();
const carid = params?.carid


  const featureListingsDataArray = featureListingsData.map(car => ({ ...car, type: 'FeatureListings' }));
  const newCarsDataArray = newCarsData.map(car => ({ ...car, type: 'NewCars' }));
  const usedCarsDataArray = usedCarsData.map(car => ({ ...car, type: 'UsedCars' }));

  const carDetailsData = {
    FeatureListings: featureListingsDataArray,
    NewCars: newCarsDataArray,
    UsedCars: usedCarsDataArray,
  };

  console.log(carDetailsData)

  useEffect(() => {
    console.log('carDetailsDataStatus:', carDetailsDataStatus);
  
    if (carid) {
      const selectedCarDetails = carDetailsData[carDetailsDataStatus];
      console.log('selectedCarDetails:', selectedCarDetails);
  
      if (Array.isArray(selectedCarDetails)) {
        const foundCar = selectedCarDetails.find((car) => {
          let correctId;
          if (carDetailsDataStatus === 'FeatureListings') {
            correctId = car.FL_;
            car.type = 'FeatureListings'
          } else if (carDetailsDataStatus === 'NewCars') {
            correctId = car.NC_;
            car.type = 'NewCars'
            console.log(correctId)
          } else if (carDetailsDataStatus === 'UsedCars') {
            correctId = car.UC_;
            car.type = 'UsedCars'
          }
          console.log(correctId)
          return correctId === parseInt(carid, 10) && car.type === carDetailsDataStatus;
          
        });
  
        if (foundCar) {
          const detailsWithExtras = { ...foundCar };
          setCarDetails(detailsWithExtras);
        } else {
          console.log(`Car with ID ${carid} not found in ${carDetailsDataStatus}`);
        }
      } else {
        console.log("selectedCarDetails is not an array:", selectedCarDetails);
      }
    }
  }, [carid, carDetailsStatus, carDetailsDataStatus]);
  
  

  if (Object.keys(carDetails).length === 0) {
    return <div>Loading...</div>;
  }

  const handleCarDetailsStatus = (status) => {
    setCarDetailsStatus(status);
  };

  

  return (
    <section className="mx-auto px-4 mb-44 md:max-w-[991px] md:px-6 xl:mt-12 xxl:max-w-[1355px]">
      <div className="mt-5">
        <p className="text-[13px] text-[#5F6973] mt-2 md:mt-0">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-1.5">/</span>
          <span>Listings</span>
          <span className="mx-1.5">/</span>
          <span className="text-blue-700">{carDetails.ucTitle}</span>
        </p>
      </div>
      <section>
        <div className="mt-4 text-[#5F6973] md:flex justify-between items-center">
          <div className="text-[13px] flex items-center gap-3.5 flex-wrap">
            <div className="rounded-full px-3.5 py-1 bg-[#EB6245] text-white font-medium">
              <h4>{carDetails.category}</h4>
            </div>
            <div className="flex items-center gap-2">
              <AiFillClockCircle className="text-[17px]" />
              <p>2 years ago</p>
            </div>
            <div className="flex items-center gap-2">
              <BsFillEyeFill className="text-[15px]" />
              <p>{carDetails.duration}</p>
            </div>
          </div>
          <div className="flex items-center flex-wrap gap-3.5 text-[13px] uppercase mt-3 md:mt-0">
            <div className="flex items-center gap-2">
              <AiFillHeart className="text-[17px]" />
              <p>Save</p>
            </div>
            <div className="flex items-center gap-2">
              <ImShuffle className="text-[15px]" />
              <p>Compare</p>
            </div>
            <div className="flex items-center gap-2">
              <BsPrinterFill className="text-[15px]" />
              <p>Print</p>
            </div>
            <div className="flex items-center gap-2">
              <BsFillShareFill className="text-[14px]" />
              <p>Share</p>
            </div>
          </div>
        </div>
        <div className="mt-6 md:flex justify-between items-center">
          <div>
            <h1 className="text-[24px] text-secondary font-semibold">
              {carDetails.flTitle}
            </h1>
            <p className="text-[13px] text-[#5F6973] mt-1 md:mt-0">
              {carDetails.address}
            </p>
          </div>
          <p className="text-[20px] text-secondary font-semibold mt-4">{`$${carDetails.flAmount}`}</p>
        </div>
      </section>
      <nav className="mt-10 lg:flex gap-5 lg:gap-7 md:max-w-[991px] xl:mt-12 xxl:max-w-[1355px]">
        <div className="  lg:w-[65%] xxl:w-3/4 transition-all duration-300 ease-in-out">
          <div>
            <div className="bg-[#EEF2F6] w-full p-1 text-[13px] font-semibold rounded-lg flex items-center sm:justify-center lg:gap-5 flex-wrap">
              <h3
                className={`${
                  carDetailsStatus === "Description"
                    ? "bg-white px-5 py-2.5 rounded-lg text-secondary"
                    : "px-5 py-2.5 rounded-lg text-secondary"
                } cursor-pointer`}
                onClick={() => handleCarDetailsStatus("Description")}
              >
                Description
              </h3>
              <h3
                className={`${
                  carDetailsStatus === "Overview"
                    ? "bg-white px-5 py-2.5 rounded-lg text-secondary"
                    : "px-5 py-2.5 rounded-lg text-secondary"
                } cursor-pointer`}
                onClick={() => handleCarDetailsStatus("Overview")}
              >
                Overview
              </h3>
              <h3
                className={`${
                  carDetailsStatus === "Features"
                    ? "bg-white px-5 py-2.5 rounded-lg text-secondary"
                    : "px-5 py-2.5 rounded-lg text-secondary"
                } cursor-pointer`}
                onClick={() => handleCarDetailsStatus("Features")}
              >
                Features
              </h3>
              <h3
                className={`${
                  carDetailsStatus === "Location"
                    ? "bg-white px-5 py-2.5 rounded-lg text-secondary"
                    : "px-5 py-2.5 rounded-lg text-secondary"
                } cursor-pointer`}
                onClick={() => handleCarDetailsStatus("Location")}
              >
                Location
              </h3>
              <h3
                className={`${
                  carDetailsStatus === "Review"
                    ? "bg-white px-5 py-2.5 rounded-lg text-secondary"
                    : "px-5 py-2.5 rounded-lg text-secondary"
                } cursor-pointer`}
                onClick={() => handleCarDetailsStatus("Review")}
              >
                Review
              </h3>
            </div>
            {carDetailsStatus === "Description" ? (
              <Description carDetails={carDetails} />
            ) : carDetailsStatus === "Overview" ? (
              <Overview carDetails={carDetails} />
            ) : carDetailsStatus === "Features" ? (
              <Features featuresData={carDetails.features} />
            ) : carDetailsStatus === "Location" ? (
              <Location carDetails={carDetails} />
            ) : (
              carDetailsStatus === "Review" && (
                <Review reviewData={carDetails.reviewData} />
              )
            )}
          </div>
        </div>
        <AdminContact />
      </nav>
    </section>
  );
};

export default CarListingsDetailsPage;
