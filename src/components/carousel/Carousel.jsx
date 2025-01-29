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
    useEffect(() => {
        const slider = document.querySelector('.keen-slider');
        if (slider) {
            const currentSlideElement = slider.children[currentSlide + 1]; // Get the current slide element  
            const currentSlideElementprev = slider.children[currentSlide]; // Get the current slide element  
            if (currentSlideElement) {
                currentSlideElement.style.padding = "10px";
                currentSlideElementprev.style.border = "none";
            }
        }
    }, [currentSlide]);
    return (
        <>
            <div className="navigation-wrapper px-20">
                <div ref={sliderRef} className="keen-slider">
                    {
                        selectionSlider.map(item => <div className="relative keen-slider__slide number-slide1" key={item.id}>

                            <div className="relative w-1/2 h-full bg-primaryColor rounded-2xl transform -translate-x-3 ">
                                <div className="absolute inset-0 bg-no-repeat blur-sm -rotate-12" style={{ backgroundPosition: '35px', backgroundSize: '5rem', backgroundImage: `url("photo/${item.image}")` }} ></div>
                                <div className="absolute inset-0 bg-no-repeat blur-[1px] rotate-12" style={{ backgroundPosition: 'right 50px top 20px ', backgroundSize: '5rem', backgroundImage: `url("photo/${item.image}")` }} ></div>
                                <img className="object-contain size-full" src={`photo/${item.image}`} alt="" />
                            </div>
                            <div className="w-1/2 h-[90%] bg-black dark:bg-white rounded-2xl border-solid border-gray-100 border-8 ">
                                <div className="w-fit h-full mx-auto my-auto flex flex-col justify-center gap-5">
                                    <span className="w-fit text-white dark:text-black">{item.name}</span>
                                    <span className="w-fit text-white dark:text-black">{item.short_description}</span>
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
