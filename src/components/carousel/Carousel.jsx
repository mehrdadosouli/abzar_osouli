import React, { useEffect, useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./carousel.module.css"

export default () => {
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
            perView: 2,
        },
    })
    useEffect(() => {  
        const slider = document.querySelector('.keen-slider');  
        if (slider) {  
            const currentSlideElement = slider.children[currentSlide + 1]; // Get the current slide element  
            const currentSlideElementprev = slider.children[currentSlide]; // Get the current slide element  
            if (currentSlideElement) {  
                currentSlideElement.style.padding="10px";  
                currentSlideElementprev.style.border="none";  
            }  
        }  
    }, [currentSlide]);
    return (
        <>
            <div className="navigation-wrapper">
                <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide number-slide1">1</div>
                    <div className="keen-slider__slide number-slide2">2</div>
                    <div className="keen-slider__slide number-slide3">3</div>
                    <div className="keen-slider__slide number-slide4">4</div>
                    <div className="keen-slider__slide number-slide5">5</div>
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
                        ...Array(instanceRef.current.track.details.slides.length - 1).keys(),
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
