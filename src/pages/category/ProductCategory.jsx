import { useEffect } from 'react';
import { useParams } from 'react-router'
import { selectCategory } from '../../redux/features/Products/productSlice';
import { useSelector } from 'react-redux';
import { addToCard, decrement, increment } from "../../redux/features/Products/productSlice";
import { useDispatch } from "react-redux";
import TrashIcon from "../../../public/photo/TrashIcon";
import PlusSvg from "../../../public/photo/PlusSvg";
import MinusSvg from "../../../public/photo/MinusSvg";
// keen slider
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./productCategory.css"
import ThumbnailPlugin from '../../utils/galeryProductCategory'; 
import RelatedProduct from '../../components/relatedProduct/RelatedProduct';

function ProductCategory({ bg = 'light' }) {
  const dispatch = useDispatch()
  const clickHandler = (id) => {
    dispatch(addToCard(id))
  }
  const trashHandler = (id) => {
    dispatch(decrement(id))
  }
  const plusHandler = (id) => {
    dispatch(increment(id))
  }
  const minusHandler = (id) => {
    dispatch(decrement(id))
  }
  const selectCategoryProduct = useSelector(selectCategory)
  const params = useParams()
  const { categoryName, productCategory } = params
  
  const findCategory = selectCategoryProduct.find(item => item.category === categoryName)
  const findProduct = findCategory?.relatedProducts.find(item => item.name === productCategory)
  console.log('dddd',findCategory,findProduct);
  const longArray = String(findProduct?.price).split('')
  
  useEffect(() => {
    ThumbnailPlugin()
  }, [])

  // galery product config
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  })
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
      breakpoints: {
        "(min-width: 400px)": {
          slides: { perView: 2 , spacing: 10 },
        },
        "(min-width: 1000px)": {
          slides: { perView: 3, spacing: 10 },
        },
        "(min-width: 1200px)": {
          slides: { perView: 4, spacing: 10 },
        },
      },
    },
    [ThumbnailPlugin(instanceRef)]
  )

  return (
    <div className='grid md:grid-cols-2 grid-cols-1 md:px-24 px-5 my-20 gap-10'>
      <div className='rounded-lg overflow-hidden'>
        <div ref={sliderRef} className="keen-slider">
          {findProduct?.galery.map(item=><div key={item.id} className="keen-slider__slide number-slide"><img src={`/photo/${item}`} /></div>)}
        </div>

        <div ref={thumbnailRef} className="keen-slider thumbnail">
          {findProduct?.galery.map(item=><div key={item.id} className="keen-slider__slide bg-slate-100 "><img src={`/photo/${item}`} /></div>)}
        </div>
      </div>
      <div className='flex flex-col gap-5 justify-around dark:text-white'>
        <h1 className='font-bold text-3xl'>{findProduct.name}</h1>
        <h2 className='text-2xl'>{findProduct.price} {longArray.length < 7 ? "هزار تومان" : "تومان"}</h2>
        <span className='text-xl'>{findProduct.long_description}</span>
        <span className='text-orange-400'> 1 عدد در انبار</span>
        <div className={`w-32 p-2 ${bg == 'light' ? "bg-primaryColor" : "bg-primary_glass "} rounded-lg text-white`}>
          {findProduct.count == 0 ? <button className="w-full" onClick={() => clickHandler(findProduct.id)}>افزودن به سبد خرید</button> :
            <div className="flex justify-between items-center">
              <span className="cursor-pointer" onClick={() => plusHandler(findProduct.id)}><PlusSvg /></span>
              {
                findProduct.count > 1 ? <span className="cursor-pointer" onClick={() => minusHandler(findProduct.id)}><MinusSvg /></span> : <span className="cursor-pointer" onClick={() => trashHandler(findProduct.id)}><TrashIcon /></span>
              }
            </div>}
        </div>
      </div>
      <div className='col-span-full'>
        <RelatedProduct products={findCategory?.relatedProducts}/>
      </div>
    </div>
  )
}

export default ProductCategory