import { addToCard, decrement, increment } from "../../redux/features/Products/productSlice";
import { useDispatch } from "react-redux";
import TrashIcon from "../../../public/photo/TrashIcon";
import PlusSvg from "../../../public/photo/PlusSvg";
import MinusSvg from "../../../public/photo/MinusSvg";
import { Link } from "react-router";
function Product({ selectOnecategory, bg = 'light' }) {
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
  return (
    <>
      {selectOnecategory?.length &&
        selectOnecategory.map((item, index) => (
          <div key={item.id} className={`keen-slider__slide w-full flex flex-col p-4 gap-4 rounded-2xl ${bg == 'light' ? "bg-box_lighten_secondry" : "bg-primaryColor"}`}>
            <Link to={`/category/${item.category}/${item.name}`}>
              <div className={`w-full h-32 flex justify-center rounded-2xl p-5 ${bg == 'light' ? "bg-box_lighten_primary" : "bg-white"}`}>
                <img className="object-contain" src={`/photo/${item.image}`} alt={item.name} />
              </div>
            </Link>
            <span className={` ${bg == 'light' ? "text-black" : "text-white"}`}>{item?.name}</span>
            <span className={`text-base ${bg == 'light' ? "text-txt_color_secondry_l" : "[#FFFFFFB8]"}`}>{item?.model}</span>
            <div className={`flex justify-between border-b-2 pb-2 ${bg == 'light' ? "text-black border-box_lighten_primary" : "text-[#FFFFFFB8] border-white"} dark:[&>*]:text-black `}>
              <span>قیمت :</span>
              <span>{item.price}</span>
            </div>
            <div className={`p-2 ${bg == 'light' ? "bg-primaryColor" : "bg-primary_glass "} rounded-lg text-white`}>
              {item.count == 0 ? <button className="w-full" onClick={() => clickHandler(item.id)}>افزودن به سبد خرید</button> :
                <div className="flex justify-between items-center">
                  <span className="cursor-pointer" onClick={() => plusHandler(item.id)}><PlusSvg /></span>
                  {
                    item.count > 1 ? <span className="cursor-pointer" onClick={() => minusHandler(item.id)}><MinusSvg /></span> : <span className="cursor-pointer" onClick={() => trashHandler(item.id)}><TrashIcon /></span>
                  }
                </div>}
            </div>
          </div>
        ))
      }
    </>
  )
}

export default Product