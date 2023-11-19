import React from "react";

const Features = ({ featuresData }) => {
  return (
    <section>
      <h1 className="text-[21px] text-secondary font-semibold mt-6">
        Features
      </h1>
      <div>
        <div className="mt-8 lg:grid grid-cols-3 whitespace-nowrap">
          <h1 className="text-[14px] text-secondary font-semibold">Convenience</h1>
          <div className="text-[13px] space-y-3 text-secondary  mt-2 lg:mt-0">
            {featuresData.convenience && featuresData.convenience.length > 0 ? (
              featuresData.convenience.map((feature, index) => (
               <div key={index} className="flex items-center gap-2.5">
                <div className="min-w-[5px] h-[5px] rounded-full bg-slate-400"></div>
                 <p className="">{feature}</p>
               </div>
              ))
            ) : (
              <p>No convenience features available.</p>
            )}
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-200 my-5 xl:my-8"/>
        <div className="lg:grid grid-cols-3 whitespace-nowrap">
          <h1 className="text-[14px] text-secondary font-semibold">Entertainment</h1>
          <div className="text-[13px] space-y-3 text-secondary mt-2 lg:mt-0">
            {featuresData.entertainment && featuresData.entertainment.length > 0 ? (
              featuresData.entertainment.map((feature, index) => (
               <div key={index} className="flex items-center gap-2.5">
                <div className="min-w-[5px] h-[5px] rounded-full bg-slate-400"></div>
                 <p>{feature}</p>
               </div>
              ))
            ) : (
              <p>No convenience features available.</p>
            )}
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-200 my-5"/>
        <div className="lg:grid grid-cols-3 whitespace-nowrap">
          <h1 className="text-[14px] text-secondary font-semibold">Safety</h1>
          <div className="text-[13px] space-y-3 text-secondary mt-2 lg:mt-0">
            {featuresData.safety && featuresData.safety.length > 0 ? (
              featuresData.safety.map((feature, index) => (
               <div key={index} className="flex items-center gap-2.5">
                <div className="min-w-[5px] h-[5px] rounded-full bg-slate-400 "></div>
                 <p>{feature}</p>
               </div>
              ))
            ) : (
              <p>No convenience features available.</p>
            )}
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-200 my-5"/>
        <div className="lg:grid grid-cols-3 whitespace-nowrap">
          <h1 className="text-[14px] text-secondary font-semibold">Interior</h1>
          <div className="text-[13px] space-y-3 text-secondary mt-2 lg:mt-0">
            {featuresData.interior && featuresData.interior.length > 0 ? (
              featuresData.interior.map((feature, index) => (
               <div key={index} className="flex items-center gap-2.5">
                <div className="min-w-[5px] h-[5px] rounded-full bg-slate-400"></div>
                 <p>{feature}</p>
               </div>
              ))
            ) : (
              <p>No convenience features available.</p>
            )}
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-200 my-5"/>
        <div className="lg:grid grid-cols-3 whitespace-nowrap">
          <h1 className="text-[14px] text-secondary font-semibold">Exterior</h1>
          <div className="text-[13px] space-y-3 text-secondary mt-2 lg:mt-0">
            {featuresData.exterior && featuresData.exterior.length > 0 ? (
              featuresData.exterior.map((feature, index) => (
               <div key={index} className="flex items-center gap-2.5">
                <div className="min-w-[5px] h-[5px] rounded-full bg-slate-400"></div>
                 <p>{feature}</p>
               </div>
              ))
            ) : (
              <p>No convenience features available.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
