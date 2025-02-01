import React, { useState } from 'react'
import CarouselOneCategory from '../carouselOneCategory/CarouselOneCategory'
import { useSelector } from 'react-redux'
import { selectCategory } from '../../redux/features/Products/productSlice'
import { Link } from 'react-router'
import BannerNewProducts from '../bannerNewProducts/BannerNewProducts'
function NewProducts() {
    const selectCategoryItems = useSelector(selectCategory)
    console.log(selectCategoryItems);
    
  return (
    <div className='flex flex-col gap-10 px-24'>
        <div className='flex justify-between items-center text-primaryColor'>
            <Link to="/">جدیدترین محصولات</Link >
            <span>مشاهده همه</span>
        </div>
        <CarouselOneCategory bg='light' arrow={false} slides='4' selectOnecategory={selectCategoryItems} />
        <BannerNewProducts />
    </div>
  )
}

export default NewProducts