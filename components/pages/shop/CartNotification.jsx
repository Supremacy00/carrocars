import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import { useCombinedCart } from '@/components/CombinedCartProvider';

const CartNotification = () => {

    const {isItemDeleted, deletedItemTitle, handleUndoDelete} = useCombinedCart();
    

  return (
    <section className='relative shadow-md mt-5'>
        <div className=' bg-nav-bg-color w-full h-[3px]'/>
        <div className='w-full bg-white py-[26px] px-5'>
       <div className='flex items-center gap-4  '>
       <FaCircleCheck className=' text-[#8fae1b] text-[14px]'/>
        <div className='flex items-center gap-1'>
        <p className='text-[13px] text-[#515151]'>{`"${isItemDeleted ? deletedItemTitle : ""}"`} removed.</p>
        {isItemDeleted && (
          <button onClick={handleUndoDelete} className='text-[13px] text-secondary hover:text-blue-700'>Undo?</button>
        )}
        </div>
       </div>
        </div>
    </section>
  )
}

export default CartNotification