import React, { useEffect, useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./carousel.module.css"
import { selectSliderHomePage } from "../../redux/features/Products/productSlice"
import { useSelector } from "react-redux"

export default () => {
    const selectionSlider = useSelector(selectSliderHomePage)
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
        slides: {
            perView: 1,
        },
    })

    return (
        <>
            <div className="navigation-wrapper lg:px-20 px-10 my-10">
                <div ref={sliderRef} className="keen-slider">
                    {
                        selectionSlider.map(item => <div className="relative keen-slider__slide number-slide1" key={item.id}>

                            <div className="relative w-1/2 h-full bg-primaryColor rounded-2xl transform -translate-x-3 ">
                                <div className="absolute inset-0 bg-no-repeat blur-sm -rotate-12" style={{ backgroundPosition: '5px', backgroundSize: '4rem', backgroundImage: `url("photo/${item.image}")` }} ></div>
                                <div className="absolute inset-0 bg-no-repeat blur-[1px] rotate-12" style={{ backgroundPosition: 'right 30px top 0px ', backgroundSize: '4rem', backgroundImage: `url("photo/${item.image}")` }} ></div>
                                <img className="object-contain lg:size-full lg:mt-0 size-[25vw] lg:mr-0 mr-10 mt-20 " src={`photo/${item.image}`} alt="" />
                            </div>
                            <div className="w-1/2 h-[90%] bg-black dark:bg-white rounded-2xl border-solid border-gray-100 border-8 ">
                                <div className="w-fit h-full px-6 mx-auto my-auto flex flex-col justify-center gap-5">
                                    <span className="w-fit text-white dark:text-black lg:text-3xl text-sm">{item.name}</span>
                                    <span className="w-fit text-white dark:text-black lg:text-3xl text-sm">{item.short_description}</span>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                {/* {loaded && instanceRef.current && (
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
        )} */}
            </div>
            {loaded && instanceRef.current && (
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
            )}
        </>
    )
}
