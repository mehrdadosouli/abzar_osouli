import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addToCard, decrement, increment, selectCategory, selectCheckout, selectSumCountity } from '../../redux/features/Products/productSlice'
import TrashIcon from "../../../public/photo/TrashIcon";
import PlusSvg from "../../../public/photo/PlusSvg";
import MinusSvg from "../../../public/photo/MinusSvg";
function Basket({setGetTheme, getTheme }) {
    const dispatch = useDispatch()
    const countProducts = useSelector(selectSumCountity)
    const selectQuantity = useSelector(selectCheckout)
    const selectProducts = useSelector(selectCategory)
    const [open, setOpen] = useState(false)
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
    const shopHandler = () => {
        setOpen(!open)
    }
    return (<div className="relative w-fit z-[10000]">
        <svg onClick={shopHandler} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20 p-7 select-none dark:text-white cursor-pointer">
          <path d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
        <span className="size-4 absolute top-10 left-10 flex justify-center items-center text-base pt-1 bg-primaryColor text-white rounded-full">{countProducts == 0 ? "0" : countProducts} </span>
        <div className={`md:w-96 w-72 ${selectQuantity == 0 ? 'h-60' : 'h-80'} overflow-y-auto .scrollbar-thumb scrollbar-track scrollbar ${open ? 'visible' : 'hidden'} absolute top-18 left-0 z-[10000] rounded-xl text-black dark:bg-black dark:text-white`}>
          {selectQuantity == 0 ?
            <div className="p-2 flex justify-center items-center leading-[14rem]">
              <span>محصولی اضافه نشده است</span>
            </div>
            :
            selectProducts.map(item =>
              item.relatedProducts.map(elem => {
                if (elem.count > 0) {
                  return (
                    <div className={`flex justify-between items-center p-5 border-b-2 border-gray-300 select-none `}>
                      <img className="w-1/4 select-none" src={`photo/${elem.image}`} />
                      <div className="flex flex-col items-end gap-2">
                        <span className="select-none">{elem.name}</span>
                        <span className="select-none">
                          {elem.price.toLocaleString()} تومان
                        </span>
                        <div className="flex select-none">
                          <div className={`p-2 rounded-lg`}> {elem.count == 0 ? <button className="w-full" onClick={() => clickHandler(elem.id)}>افزودن به سبد خرید</button> : <div className="flex gap-2 justify-between items-center">
                            <span className="cursor-pointer bg-gray-200 rounded-full p-1" onClick={() => plusHandler(elem.id)}><PlusSvg /></span>
                            <span className="select-none bg-primaryColor p-1 rounded-full text-white">{elem.count}</span>
                            {
                              elem.count > 1 ?
                                <span className="cursor-pointer bg-gray-200 rounded-full p-1" onClick={() => minusHandler(elem.id)}><MinusSvg /></span> :
                                <span className="cursor-pointer bg-gray-200 rounded-full p-1" onClick={() => trashHandler(elem.id)}><TrashIcon /></span>
                            }
                          </div>}</div>
                        </div>
                      </div>
                    </div>
                  )
                }
              }
              ))}
          {
            selectQuantity > 0 && <div className="p-2 flex flex-col gap-5 justify-start items-start">
            <button>ثبت سفارش</button>
            <div className="w-full flex justify-between items-center">
              <span>مبلغ قابل پرداخت</span>
              <span>{selectQuantity.toLocaleString()} تومان</span> 
            </div>
          </div>
          }
        </div>
      </div>)
}

export default Basket