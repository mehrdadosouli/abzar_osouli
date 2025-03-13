import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Link, useLocation } from "react-router";
import { useEffect } from "react";

function RelatedProduct({ products }) {
    const location = useLocation();
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
            slides: { perView: 3, spacing: 5 },
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[location])

    return (
        <div className="p-5 my-10 border rounded-lg">
            <h3 className="font-bold text-orange-600 text-3xl pb-10">محصولات مرتبط</h3>
            <div ref={sliderRef} className="keen-slider">
                {
                    products.length && products.map(item => <div key={item.id} className="keen-slider__slide flex flex-col justify-center items-center gap-5 shadow">
                        <Link className="text-center" to={`/category/${item.category}/${item.name}`} >
                            <img className="size-40 object-contain" src={`/photo/${item.image}`} alt="" />
                            <span>{item?.name}</span>
                        </Link>
                    </div>)
                }
            </div>
        </div>
    )
}

export default RelatedProduct