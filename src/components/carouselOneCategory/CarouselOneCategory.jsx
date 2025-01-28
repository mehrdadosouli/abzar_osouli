import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";
import "./carouselOneCategory.css";
import { useKeenSlider } from "keen-slider/react";

export default function CarouselOneCategory({ selectOnecategory }) {
  const names = selectOnecategory?.relatedProducts;
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    breakpoints: {
      "(max-width: 400px)": {
        slides: { perView: 1, spacing: 15 },
      },
      "(min-width: 700px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 15 },
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


  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider flex">
          {names?.length &&
            names.map((item, index) => (
              <div key={item.id} className="keen-slider__slide w-full flex flex-col p-4 gap-2 bg-primaryColor rounded-2xl">
                <div className="w-full flex justify-center rounded-2xl p-5 bg-white">
                  <img className="w-20 bg-white object-cover" src={`/photo/${item.image}`} alt={item.name} />
                </div>
                <span className="text-white">{item?.name}</span>
                <span className="text-[#FFFFFFB8]">{item?.model}</span>
                <div className="flex justify-between border-b-2 border-white pb-2 [&>*]:text-white dark:[&>*]:text-black">
                  <span>قیمت :</span>
                  <span>{item.price}</span>
                </div>
                <button className="bg-primary_glass rounded-lg text-white">افزودن به سبد خرید</button>
              </div>
            ))
          }
        </div>

        {loaded && instanceRef.current && (
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

