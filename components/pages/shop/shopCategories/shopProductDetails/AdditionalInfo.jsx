import React from 'react'

const AdditionalInfo = ({product}) => {
  return (
   <section className='p-5 md:p-8'>
    <h1 className='text-[15px] text-secondary font-semibold'>Additional Information</h1>
    <ul className='text-[13px] my-5'>
        <div className='grid grid-cols-3 gap-10 md:grid-cols-4'>
            <li className='text-secondary'>Weight</li>
            <li className='text-[#5F6973]'>{product.itemInfo.productDetails.additionalDetails.weight}</li>
        </div>
        <div className='mt-5 grid grid-cols-3 gap-10 md:grid-cols-4'>
            <li className='text-secondary'>Dimensions</li>
            <div className='flex items-center gap-2 text-[#5F6973]'>
                <li>{product.itemInfo.productDetails.additionalDetails.dimensions.length}</li>
                <span>x</span>
                <li>{product.itemInfo.productDetails.additionalDetails.dimensions.width}</li>
                <span>x</span>
                <li>{product.itemInfo.productDetails.additionalDetails.dimensions.height}</li>
            </div>
        </div>
    </ul>
   </section>
  )
}

export default AdditionalInfo