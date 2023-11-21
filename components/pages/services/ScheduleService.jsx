import React from "react";

const ScheduleService = () => {
  return (
    <section className="mx-auto px-4 md:max-w-[991px] md:px-6 xl:px-8 xxl:max-w-[1355px]">
      <div className="md:flex gap-8 py-16">
        <div className="border-[1px] border-gray-200 rounded-lg bg-white p-10 md:w-[60%] lg:w-[70%]  xxl:p-14">
          <form>
            <h1 className="text-base text-secondary font-semibold ">
              Schedule Service
            </h1>
            <div className="mt-5">
              <div className="md:flex gap-8">
                <div className="w-full">
                  <label
                    htmlFor="Price"
                    className="text-secondary text-[13px] font-semibold"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="Price"
                    id=""
                    className="w-full py-3.5 px-5 text-[13px] text-[#5F6973] border-[1px] border-gray-200 rounded-lg outline-none focus:border-gray-400 mt-1.5"
                  />
                </div>
                <div className="mt-5 w-full md:mt-0">
                  <label
                    htmlFor="Price"
                    className="text-secondary text-[13px] font-semibold"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="Price"
                    id=""
                    className="w-full py-3.5 px-5 text-[13px] text-[#5F6973] border-[1px] border-gray-200 rounded-lg outline-none focus:border-gray-400 mt-1.5"
                  />
                </div>
              </div>
              <div className="md:flex gap-8">
                <div className="mt-5 w-full">
                  <label
                    htmlFor="Rate"
                    className="text-secondary text-[13px] font-semibold"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    name="Rate"
                    id=""
                    className="w-full py-3.5 px-5 text-[13px] text-[#5F6973] border-[1px] border-gray-200 rounded-lg outline-none focus:border-gray-400  mt-1.5"
                  />
                </div>
                <div className="mt-5 w-full">
                  <label
                    htmlFor="LoanTermYear"
                    className="text-secondary text-[13px] font-semibold"
                  >
                    Make/Model
                  </label>
                  <input
                    type="text"
                    name="LoanTermYear"
                    id=""
                    className="w-full py-3.5 px-5 text-[13px] text-[#5F6973] border-[1px] border-gray-200 rounded-lg outline-none focus:border-gray-400  mt-1.5"
                  />
                </div>
              </div>
             <div className="md:flex gap-8">
             <div className="mt-5 w-full">
                <label
                  htmlFor="Downpayment"
                  className="text-secondary text-[13px] font-semibold"
                >
                  Mileage (optional)
                </label>
                <input
                  type="text"
                  name="DownPayment"
                  id=""
                  className="w-full py-3.5 px-5 text-[13px] text-[#5F6973] border-[1px] border-gray-200 rounded-lg outline-none focus:border-gray-400 mt-1.5"
                />
              </div>
              <div className="mt-5 w-full">
                <label
                  htmlFor="Downpayment"
                  className="text-secondary text-[13px] font-semibold"
                >
                  Best Time
                </label>
                <input
                  type="text"
                  name="DownPayment"
                  id=""
                  className="w-full py-3.5 px-5 text-[13px] text-[#5F6973] border-[1px] border-gray-200 rounded-lg outline-none focus:border-gray-400 mt-1.5"
                />
              </div>
             </div>
              <button
                type="submit"
                className="text-[13px] text-secondary font-semibold bg-primary py-3.5 px-8 rounded-lg mt-5"
              >
                Request Service
              </button>
            </div>
          </form>
        </div>
        <section className="md:w-[40%] lg:w-[30%] mt-7 md:mt-0 ">
          <div className="px-5 py-6 border-[1px] bg-white border-gray-200 rounded-lg xxl:px-10 xxl:py-9">
            <h1 className="text-base text-secondary font-semibold mb-6">Opening Hours</h1>
            <div className="text-[13px] flex justify-between items-center">
                <h1 className="text-secondary font-semibold">Monday</h1>
                <p className="text-[#5F6973]">8:00 - 18:00</p>
            </div>
            <div className="w-full h-[1px] bg-gray-200 my-2.5"/>
            <div className="text-[13px] flex justify-between items-center">
                <h1 className="text-secondary font-semibold">Tuesday</h1>
                <p className="text-[#5F6973]">8:00 - 18:00</p>
            </div>
            <div className="w-full h-[1px] bg-gray-200 my-2.5"/>
            <div className="text-[13px] flex justify-between items-center">
                <h1 className="text-secondary font-semibold">Wednesday</h1>
                <p className="text-[#5F6973]">8:00 - 18:00</p>
            </div>
            <div className="w-full h-[1px] bg-gray-200 my-2.5"/>
            <div className="text-[13px] flex justify-between items-center">
                <h1 className="text-secondary font-semibold">Thursday</h1>
                <p className="text-[#5F6973]">8:00 - 18:00</p>
            </div>
            <div className="w-full h-[1px] bg-gray-200 my-2.5"/>
            <div className="text-[13px] flex justify-between items-center">
                <h1 className="text-secondary font-semibold">Friday</h1>
                <p className="text-[#5F6973]">8:00 - 18:00</p>
            </div>
            <div className="w-full h-[1px] bg-gray-200 my-2.5"/>
            <div className="text-[13px] flex justify-between items-center">
                <h1 className="text-secondary font-semibold">Saturday</h1>
                <p className="text-[#5F6973]">7:00 - 12:00</p>
            </div>
            <div className="w-full h-[1px] bg-gray-200 my-2.5"/>
            <div className="text-[13px] flex justify-between items-center">
                <h1 className="text-secondary font-semibold">Sunday</h1>
                <p className="text-[#5F6973]">Close</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ScheduleService;
