import { useState } from "react";
import "keen-slider/keen-slider.min.css";
import "./carouselOneCategory.css";
import { useKeenSlider } from "keen-slider/react";
import Product from "../Product/Product";

export default function CarouselOneCategory({ selectOnecategory, arrow, slides, bg }) {

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

  
  return (
    <>
      <div className="navigation-wrapper my-10 z-40">
        <div ref={sliderRef} className="keen-slider">
          <Product selectOnecategory={selectOnecategory} bg='light' />
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

