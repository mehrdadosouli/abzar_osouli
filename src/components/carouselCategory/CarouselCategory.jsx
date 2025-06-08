import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import CategoryItems from '../category/CategoryItems'


export default function CarouselCategory ({ selectCategoryItems , changeHandlerCategory , categoryselect}) {
  

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 5,
    },
    breakpoints: {
    '(max-width: 640px)': {
      slides: { perView: 3 },
    },
    '(max-width: 1024px)': {
      slides: { perView: 4 },
    },
   },
  })

  return (
    <div ref={sliderRef} className="keen-slider">
      {
        selectCategoryItems.map(item => (
        <div onClick={()=>changeHandlerCategory(item.category)} key={item.id} className="keen-slider__slide size-full flex flex-col items-center">
          <div className="lg:size-36 md:size-28 size-20 shadow-[0px_0px_10px_5px_#0000000F] rounded-2xl overflow-hidden my-10" key={item.id}>
            <CategoryItems item={item} categoryselect={categoryselect} />
          </div>
          <div className="lg:text-2xl text-lg dark:text-white">{item.category}</div>
        </div>
        ))
      }
    </div>
  )
}
