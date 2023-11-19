import React from 'react'
import { HiOutlineArrowSmLeft } from "react-icons/hi";

const PrevButton = ({onClick}) => {
  return (
    <div className="absolute left-2 top-1/2  transform -translate-y-1/2 z-50 xl:-left-5">
     <div className="group">
     <button
        onClick={onClick}
        className="relative bg-white rounded-full w-10 h-10 border-[1px] border-gray-200 group-hover:bg-nav-bg-color transition-all delay-100 ease-in-out duration-200 xl:w-11 xl:h-11"
      >
        <HiOutlineArrowSmLeft className="absolute inset-2.5 text-secondary text-[20px] group-hover:text-white xl:text-[22px] transition-all delay-100 ease-in-out duration-200" />
      </button>
     </div>
    </div>
  )
}

export default PrevButton