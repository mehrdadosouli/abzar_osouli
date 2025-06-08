import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToCard, decrement, increment, selectAllProductsCategory } from "../../redux/features/Products/productSlice"
import PlusSvg from "../../../public/photo/PlusSvg"
import MinusSvg from "../../../public/photo/MinusSvg"
import TrashIcon from "../../../public/photo/TrashIcon"

export default function Search() {
  const allProducts = useSelector(selectAllProductsCategory)
  const [search, setSearch] = useState("")
  const [filterSearch, setFilterSearch] = useState([])
  const [showDropdown, setShowDropdown] = useState(false);
  const searchRef = useRef(null)
  const inputRef = useRef(null)
  const dispatch = useDispatch()
  const blurHandler = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target) && searchRef.current && !searchRef.current.contains(event.target)) {
      setShowDropdown(false)
      setSearch("")
    }
  }
  useEffect(() => {
    if (search.trim() === "") {
      setFilterSearch([])
    } else {
      const resFilter = allProducts.filter(item =>
        item.name.includes(search)
      )
      setFilterSearch(resFilter)
    }
  }, [search, allProducts])

  const submitHandler = (e) => {
    e.preventDefault()
  }
  useEffect(() => {
    document.addEventListener("mousedown", blurHandler);
    return () => {
      document.removeEventListener("mousedown", blurHandler);
    }
  }, [])

  return (
    <div className="w-1/3 lg:flex hidden relative">
      <form className="w-full mx-auto" onSubmit={submitHandler}>
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">جستجو</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 p-2 flex items-center ps-3 rounded-l-lg bg-primaryColor hover:cursor-pointer" type="submit">
            <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input
            type="search"
            value={search}
            ref={inputRef}
            onFocus={() => setShowDropdown(true)}
            onChange={(e) => setSearch(e.target.value)}
            id="default-search"
            className="block w-full p-3 ps-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
            placeholder="لطفا محصول مورد نظر خود را جستجو کنید"
            required
          />
        </div>
      </form>

      <div ref={searchRef} onBlur={(event) => blurHandler(event)} tabIndex={0} className={`${!search.length || !showDropdown ? "hidden" : ""} w-full min-h-40 max-h-[27rem] p-10 shadow-2xl bg-gray-100 rounded-2xl absolute top-20 z-[10000] overflow-y-auto`}>
        {!filterSearch.length ? (
          <span className="flex justify-center leading-[5rem]">سرچ پیدا نشد</span>
        ) : (
          filterSearch.map(elem => (
            <div key={elem.id} className="flex justify-between items-center p-5 border-b-2 border-gray-300 select-none">
              <img className="w-1/4 select-none" src={`photo/${elem.image}`} alt={elem.name} />
              <div className="flex flex-col items-end gap-2">
                <span className="select-none">{elem.name}</span>
                <span className="select-none">{elem.price.toLocaleString()} تومان</span>
                <div className="flex select-none">
                  <div className="p-2 rounded-lg w-full">
                    {elem.count === 0 ? (
                      <button className="w-full" onClick={() => dispatch(addToCard(elem.id))}>افزودن به سبد خرید</button>
                    ) : (
                      <div className="flex gap-2 justify-between items-center">
                        <span className="cursor-pointer bg-gray-200 rounded-full p-1" onClick={() => dispatch(increment(elem.id))}><PlusSvg /></span>
                        <span className="select-none bg-primaryColor p-1 rounded-full text-white">{elem.count}</span>
                        {elem.count > 1 ? (
                          <span className="cursor-pointer bg-gray-200 rounded-full p-1" onClick={() => dispatch(decrement(elem.id))}><MinusSvg /></span>
                        ) : (
                          <span className="cursor-pointer bg-gray-200 rounded-full p-1" onClick={() => dispatch(decrement(elem.id))}><TrashIcon /></span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
