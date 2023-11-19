import Image from 'next/image'
import React from 'react'
import { whychooseusData } from '../data'

const WhyChooseUs = () => {
  return (
    <section className='mx-auto pt-12 lg:max-w-[991px] xxl:max-w-[1355px] md:pt-20 xl:pt-24'>
      <div className='text-center text-[25px] text-secondary font-semibold md:text-[30px] xl:text-[33px]'>
        <h1>Why Choose Us?</h1>
      </div>
      <article className='mt-7 grid gap-10 md:grid-cols-2 md:gap-x-0 lg:grid-cols-3 '>
        {whychooseusData.map((item, index) => {
          return (
            <article key={item.id} className={`${index === 2 ? "md:col-span-2 md:flex md:text-start md:gap-7 lg:col-span-1 " : ""} text-center px-6 md:flex md:text-start md:gap-7`}>
              <Image src={item.wcuImg} alt={item.wcuTitle} width={90} height={90} className='mx-auto md:mx-0 '/>
              <div>
                <h3 className='text-base font-semibold text-secondary mt-4 lg:whitespace-nowrap'>{item.wcuTitle}</h3>
                <p className='text-[13px] text-[#5f6973] leading-[26px] mt-2'>{item.wcuPara}</p>
              </div>
            </article>
          )
        })}
      </article>
    </section>
  )
}

export default WhyChooseUs