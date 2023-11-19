import React from 'react'

const Description = ({carDetails}) => {
  
  return (
   <section>
    <h1 className='text-[21px] text-secondary font-semibold mt-6'>Description</h1>
    <div className='text-[13px] leading-6 text-[#5F6973] mt-8'>
      <p className='mb-5'>{carDetails.description}</p>
    </div>
   </section>
  )
}

export default Description