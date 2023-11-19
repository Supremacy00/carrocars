import React from 'react'
import ShopStarRating from '../../ShopStarRating';
import Image from 'next/image';
import ShopRatingSection from './ShopRatingSection';

const ShopReview = ({product}) => {
  return (
   <section className='p-5 md:p-8'>
     <h1 className="text-[18px] text-secondary font-semibold lg:text-[21px]">
        {`${product.itemInfo.comments.length || 0}`}{" "}
        {product.itemInfo.comments.length <= 1 ? "Comment" : "Comments"}
      </h1>
     <div className="flex flex-col gap-5 mt-5">
          {product.itemInfo.comments.map((comment, index) => {
            return (
              <div key={index} className="flex gap-2.5 text-[13px] text-[#5F6973]">
                <Image
                  src={comment.photo}
                  alt={comment.name}
                  width={1000}
                  height={1000}
                  className="w-[60px] h-[60px] rounded-full lg:w-[70px] lg:h-[70px]"
                />
                <div className="mt-2 w-full lg:mt-3.5">
                  <div>
                    <h3 className="text-secondary font-semibold">{comment.name}</h3>
                    <div className="flex justify-between items-center mt-1">
                      <p>{comment.date}</p>
                      <ShopStarRating stars={comment.stars} />
                    </div>
                  </div>
                  <p className="mt-4 leading-6">{comment.comment}</p>
                </div>
              </div>
            );
          })}
        </div>
        <section>
            <ShopRatingSection product={product}/>
        </section>
   </section>
  )
}

export default ShopReview