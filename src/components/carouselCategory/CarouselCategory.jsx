
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "../carousel/carousel.css"
import CategoryItems from '../category/CategoryItems'


export default ({ selectCategoryItems , changeHandlerCategory}) => {
  

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 5,
    },
  })

  return (
    <div ref={sliderRef} className="keen-slider">
      {
        selectCategoryItems.map(item => (
        <div onClick={()=>changeHandlerCategory(item.category)} key={item.id} className="keen-slider__slide size-full flex flex-col items-center">
          <div className="size-36 shadow-[0px_0px_10px_5px_#0000000F] rounded-2xl overflow-hidden my-10" key={item.id}>
            <CategoryItems item={item} />
          </div>
          <div>{item.category}</div>
        </div>
        ))
      }
    </div>
  )
}