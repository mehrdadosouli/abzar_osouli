import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCategory } from "../../redux/features/Products/productSlice";
import { selectAmazingDiscount } from "../../redux/features/Products/productSlice";
import CarouselCategory from "../carouselCategory/CarouselCategory";
import CarouselOneCategory from "../carouselOneCategory/CarouselOneCategory";
import TimerCounter from "../timerCounter/TimerCounter";
import { Link } from "react-router";


export default function Category() {

  const selectCategoryItems = useSelector(selectCategory)
  const [category, setCategory] = useState('پیکور')
  const selectDiscount = useSelector(selectAmazingDiscount)
  const relatedproducts = selectCategoryItems.find(item => item.category === category)?.relatedProducts 
  const changeHandlerCategory = (cat) => {
    setCategory(cat)
  }
  return (
    <div className="flex flex-col gap-20">
      <div className="flex justify-between items-center">
        <CarouselCategory selectCategoryItems={selectCategoryItems} changeHandlerCategory={changeHandlerCategory} />
      </div>
      <div className="flex gap-5 my-10 px-24">
        <div className="relative w-1/4 bg-no-repeat bg-cover rounded-xl backdrop-brightness-0" style={{ backgroundImage: `url("photo/abzar (4).png")` }}>
          <h3 className="absolute right-0 -top-12 text-primaryColor font-bold text-3xl">تخفیف شگفت انگیز</h3>
          <img className="size-3/4 object-contain object-left-bottom mt-28 mx-auto" src={`photo/${selectDiscount[0].image}`} alt="" />
          <TimerCounter initialTime={selectDiscount[0].time} />
        </div>
        <div className="w-3/4 flex flex-col gap-5">
          <CarouselOneCategory arrow={true} slides='3' selectOnecategory={relatedproducts} />
          <div className="relative w-full h-52 flex items-center justify-between bg-[#5068E4] rounded-xl ">
            <div
              className="absolute inset-0 bg-no-repeat"
              style={{
                backgroundImage: `url("photo/${selectDiscount[1].image}")`,
                backgroundPosition: '40% 2rem',
                backgroundSize: '8rem',
                filter: 'blur(2.5px)',
              }}
            ></div>
            <div className="w-1/2 flex flex-col gap-5 mr-20 z-10">
              <span className="w-fit px-4 py-2 text-[#5068E4] md:text-lg bg-white rounded-xl">50 % تخفیف</span>
              <Link className="w-fit text-white md:text-3xl" to="/">انواع دریل های شارژی</Link>
            </div>
            <div className="w-1/2 z-10">
              <img className="w-full" src={`photo/${selectDiscount[1].image}`} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
