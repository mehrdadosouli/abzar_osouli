import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCategory } from "../../redux/features/Products/productSlice";
import { selectAmazingDiscount } from "../../redux/features/Products/productSlice";
import CarouselCategory from "../carouselCategory/CarouselCategory";
import CarouselOneCategory from "../carouselOneCategory/CarouselOneCategory";
import TimerCounter from "../timerCounter/TimerCounter";


export default function Category() {

  const selectCategoryItems = useSelector(selectCategory)
  const [category, setCategory] = useState('پیکور')
  const selectDiscount = useSelector(selectAmazingDiscount)
  const selectOnecategory = selectCategoryItems.find(item => item.category === category)

  const changeHandlerCategory = (cat) => {
    setCategory(cat)
  }
  return (
    <div>
      <div className="flex justify-between items-center">
        <CarouselCategory selectCategoryItems={selectCategoryItems} changeHandlerCategory={changeHandlerCategory} />
      </div>
      <div className="flex gap-5 my-28 px-24">
        <div className="relative w-1/4 bg-no-repeat bg-cover rounded-2xl backdrop-brightness-0" style={{ backgroundImage: `url("photo/abzar (4).png")` }}>
          <h3 className="absolute right-0 -top-12 text-primaryColor font-bold text-3xl">تخفیف شگفت انگیز</h3>
          <img className="size-3/4 object-contain" src={`photo/${selectDiscount[0].image}`} alt="" />
          <TimerCounter initialTime={selectDiscount[0].time} />
        </div>
        <div className="w-3/4">
          <CarouselOneCategory selectOnecategory={selectOnecategory} />
        </div>
      </div>
    </div >
  )
}
