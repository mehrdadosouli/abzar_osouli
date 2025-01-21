import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCategory } from "../../redux/features/Products/productSlice";
import CarouselCategory from "../carouselCategory/CarouselCategory";
import CarouselOneCategory from "../carouselOneCategory/CarouselOneCategory";


export default function Category() {
  const selectCategoryItems = useSelector(selectCategory)
  const [category , setCategory]=useState('پیکور')
  const selectOnecategory = selectCategoryItems.find(item=> item.category === category )
  
  const changeHandlerCategory=(cat)=>{    
    setCategory(cat)
  }
  return (
    <div>
      <div className="flex justify-between items-center">
        <CarouselCategory selectCategoryItems={selectCategoryItems} changeHandlerCategory={changeHandlerCategory} />
      </div>
      <div className="my-20 px-24">
        <CarouselOneCategory selectOnecategory={selectOnecategory}/>
      </div>
    </div>
  )
}
