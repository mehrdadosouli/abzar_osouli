import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./carouselOneCategory.css"
import img1 from '../../assets/photo/'
export default function CarouselOneCategory({ selectOnecategory }) {
  const names = selectOnecategory?.relatedProducts
  console.log(names);

  // names.length=selectOnecategory?.relatedProducts?.length
  const slidesPerView = 1
  const numberSlides = slidesPerView + 1
  const [slidesDetails, setSlidesDetails] = React.useState(null)
  const [sliderRefImageProduct, instanceRefImageProduct] = useKeenSlider({
    renderMode: "performance",
    mode: "free-snap",
    rtl: true,
    drag: true,
    initial: 0,

    breakpoints: {
      "(min-width: 425px)": {
        loop: true,
        slides: { perView: 1, spacing: 10 },
      },
      // "(min-width: 640px)": {
      //   loop: true,
      //   slides: { perView: 4.2, spacing: 10 },
      // },
      // "(min-width: 768px)": {
      //   loop: true,
      //   slides: { perView: 6.2, spacing: 10 },
      // },
      // "(min-width: 1024px)": {
      //   loop: true,
      //   slides: { perView: 2.5, spacing: 10 },
      // },
    },
  });
  // const [sliderRef] = useKeenSlider({
  //   initial: 0,
  //   loop: {
  //     min: 0,
  //     max: names?.length - 1,
  //   },
  //   range: {
  //     align: true,
  //     min: 0,
  //     max: names?.length - 1,
  //   },
  //   mode: "free-snap",
  //   detailsChanged: (s) => {
  //     setSlidesDetails(s.track.details.slides)
  //   },
  //   slides: {
  //     number: 2,
  //     perView: 1,
  //   },
  // })

  return (
    <div ref={sliderRefImageProduct} className="keen-slider">
      {names?.map((item, index) => (
        <section key={index} className="keen-slider__slide">
          <img
            src={item.image ? `../../assets/photo/${item.categoryIcon}` : 'fallback-image-url.jpg'}
            alt={item.image}
            className="bg-bgLightColor dark:bg-bgDarkColor/50 rounded-xl object-contain"
          />
        </section>
      ))}

      {!names?.length === 0 && (
        <h2 className="w-full text-slate-800 text-base text-center font-bold capitalize">
          products is not found!
        </h2>
      )}
    </div>
  )
}
