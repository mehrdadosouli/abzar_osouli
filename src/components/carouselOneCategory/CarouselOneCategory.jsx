import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";
import "./carouselOneCategory.css";
import { useKeenSlider } from "keen-slider/react";
import { addToCard, decrement, increment } from "../../redux/features/Products/productSlice";
import { useDispatch } from "react-redux";
import TrashIcon from "../../../public/photo/TrashIcon";
import PlusSvg from "../../../public/photo/PlusSvg";
import MinusSvg from "../../../public/photo/MinusSvg";


export default function CarouselOneCategory({ selectOnecategory, arrow, slides, bg }) {
  const dispatch=useDispatch()  
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    breakpoints: {
      "(max-width: 500px)": {
        slides: { perView: 1, spacing: 15 },
      },
      "(min-width: 700px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(min-width: 1000px)": {
        slides: { perView: slides, spacing: 15 },
      },
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })
  const clickHandler=(id)=>{
    dispatch(addToCard(id))  
  }
  const trashHandler=(id)=>{
    dispatch(decrement(id))  
  }
  const plusHandler=(id)=>{
    dispatch(increment(id))  
  }
  const minusHandler=(id)=>{
    dispatch(decrement(id))  
  }

  return (
    <>
      <div className="navigation-wrapper my-10 z-40">
        <div ref={sliderRef} className="keen-slider flex ">
          {selectOnecategory?.length &&
            selectOnecategory.map((item, index) => (
              <div key={item.id} className={`keen-slider__slide w-full flex flex-col p-4 gap-4 rounded-2xl ${bg == 'light' ? "bg-box_lighten_secondry" : "bg-primaryColor"}`}>
                <div className={`w-full h-32 flex justify-center rounded-2xl p-5 ${bg == 'light' ? "bg-box_lighten_primary" : "bg-white"}`}>
                  <img className="object-contain" src={`/photo/${item.image}`} alt={item.name} />
                </div>
                <span className={` ${bg == 'light' ? "text-black" : "text-white"}`}>{item?.name}</span>
                <span className={`text-base ${bg == 'light' ? "text-txt_color_secondry_l" : "[#FFFFFFB8]"}`}>{item?.model}</span>
                <div className={`flex justify-between border-b-2 pb-2 ${bg == 'light' ? "text-black border-box_lighten_primary" : "text-[#FFFFFFB8] border-white"} dark:[&>*]:text-black `}>
                  <span>قیمت :</span>
                  <span>{item.price}</span>
                </div>
                <div className={`p-2 ${bg == 'light' ? "bg-primaryColor" : "bg-primary_glass "} rounded-lg text-white`}>
                   {item.count == 0 ? <button className="w-full" onClick={()=>clickHandler(item.id)}>افزودن به سبد خرید</button> : 
                <div className="flex justify-between items-center">
                  <span className="cursor-pointer" onClick={()=>plusHandler(item.id)}><PlusSvg /></span>
                  {
                    item.count > 1 ? <span className="cursor-pointer" onClick={()=>minusHandler(item.id)}><MinusSvg /></span> : <span className="cursor-pointer" onClick={()=>trashHandler(item.id)}><TrashIcon /></span>
                  }
                </div> }</div>
              </div>
            ))
          }
        </div>

        {arrow && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {/* {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div>
      )} */}
    </>
  )
}


function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : ""
  return (
    <svg xmlns="http://www.w3.org/2000/svg" onClick={props.onClick}
      className={`size-7 arrow ${props.left ? "arrow--left" : "arrow--right"
        } ${disabled}`} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#FF5023">



      {props.left && (
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
      )}
      {!props.left && (
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
      )}
    </svg>
  )
}

