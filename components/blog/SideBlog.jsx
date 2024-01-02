
import React from 'react'
import { blogData } from "@/components/data";
import Image from 'next/image';

const SideBlog = () => {
  
    const truncatedBlogTitle = (data, limit) => {
        const truncatedData = data.map(blog => {
            if (blog.blogTitle && blog.blogTitle.length > limit) {
            blog.blogTitle = blog.blogTitle.substring(0, limit) + '...';
          }
          return blog;
        });
        return truncatedData;
      };

  const slicedBlogData = blogData.slice(0, 3);

  const updatedBlogData = truncatedBlogTitle(slicedBlogData, 45)

  return (
    <section className='hidden lg:block lg:w-[30%] xxl:w-1/4'>
            <div className='mx-auto w-[300px] border-[1px] border-gray-200 bg-[#F9F9F9] rounded-lg p-4 lg:w-full xl:p-8'>
                <h1 className='text-[16px] text-secondary font-semibold mb-7 xxl:mb-5'>Search</h1>
                <input type="text" name="" id="" placeholder='Enter Keyword' className=' border-[1px] placeholder-[#5F6973] border-gray-200 text-[13px] px-5 rounded-lg py-4 w-full bg-white outline-none'/>
            </div>
            <div className='mx-auto w-[300px] border-[1px] mt-8 border-gray-200 bg-[#F9F9F9] rounded-lg p-4 lg:w-full xl:p-8'>
                <h1 className='text-[16px] text-secondary font-semibold mb-5'>Categories</h1>
                <ul className='text-[13px] text-secondary'>
                    <li className='mb-5 hover:text-blue-700 cursor-pointer'>Auto Detailing</li>
                    <li className='mb-5 hover:text-blue-700 cursor-pointer'>Car News</li>
                    <li className='mb-5 hover:text-blue-700 cursor-pointer'>Car Reviews</li>
                    <li className='hover:text-blue-700 cursor-pointer'>Classic Cars</li>
                </ul>
            </div>
            <div className='mx-auto w-[300px] border-[1px] mt-8 border-gray-200 bg-[#F9F9F9] rounded-lg p-4 lg:w-full xl:p-8'>
                <h1 className='text-[16px] text-secondary font-semibold mb-5'>Recent Posts</h1>
                <ul className='grid gap-6'>
                    {updatedBlogData.map((item) => {
                        return (
                          <div key={item.id} className='flex gap-3'>
                                <Image src={item.blogImg} alt={item.blogTitle} width={1000} height={100} className='w-[80px] h-[70px] rounded-lg'/>
                                <h3 className='text-[13px] text-secondary leading-6 hover:text-blue-700 cursor-pointer '>{item.blogTitle}</h3>
                          </div>  
                        )
                    })}
                </ul>
            </div>
            <div className='mx-auto w-[300px] border-[1px] mt-8 border-gray-200 bg-[#F9F9F9] rounded-lg p-4 lg:w-full xl:p-8'>
                <h1 className='text-[16px] text-secondary font-semibold mb-5'>Popular Tags</h1>
                <ul className='text-[13px] text-secondary flex items-center flex-wrap gap-2'>
                    <li className='bg-[#EEF2F6] rounded-full px-3 py-1 hover:bg-secondary hover:text-white cursor-pointer transition-all duration-300 delay-100 ease-in-out'>Diesel</li>
                    <li className='bg-[#EEF2F6] rounded-full px-3 py-1 hover:bg-secondary hover:text-white cursor-pointer transition-all duration-300 delay-100 ease-in-out'>Luxury</li>
                    <li className='bg-[#EEF2F6] rounded-full px-3 py-1 hover:bg-secondary hover:text-white cursor-pointer transition-all duration-300 delay-100 ease-in-out'>Sedan</li>
                    <li className='bg-[#EEF2F6] rounded-full px-3 py-1 hover:bg-secondary hover:text-white cursor-pointer transition-all duration-300 delay-100 ease-in-out'>Sport</li>
                    <li className='bg-[#EEF2F6] rounded-full px-3 py-1 hover:bg-secondary hover:text-white cursor-pointer transition-all duration-300 delay-100 ease-in-out'>Suv</li>
                </ul>
            </div>
    </section>
  )
}

export default SideBlog