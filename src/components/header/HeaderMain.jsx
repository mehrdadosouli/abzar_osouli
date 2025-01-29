import { useSelector } from "react-redux"
import { selectCategory } from "../../redux/features/Products/productSlice"
import Menu from "../menu/Menu"
import { Link } from "react-router"
export default function HeaderMain() {
  const selector = useSelector(selectCategory)

  return (
    <div className=" grid grid-cols-3 justify-items-end px-24 items-center my-11">
      <div className="relative size-full">
        <Menu />
      </div>
      <div className="flex gap-5 justify-self-center dark:text-white text-black">
        <Link to='/'>صفحه نخست</Link>
        <Link to='/blog'>مقاله</Link>
        <Link to='shopping'>فروشگاه</Link>
        <Link to='questions'>سوالات متداول</Link>
      </div>
      <div className="flex justify-between items-center text-white gap-3 max-w-44 bg-black dark:bg-white px-3 py-1 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="size-6 stroke-white dark:stroke-black">
          <path  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
        </svg>
        <span className="text-white dark:text-black">همکاری در فروش</span>
      </div>
    </div>
  )
}
