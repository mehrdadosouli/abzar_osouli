import { useEffect, useState } from "react"
import ArchiveSvg from "../../../public/photo/ArchiveSvg"
import HomeSvg from "../../../public/photo/HomeSvg"
import QuestionSvg from "../../../public/photo/QuestionSvg"
import ShopSvg from "../../../public/photo/ShopSvg"
import HamburgerSvg from "../../../public/photo/HamburgerSvg"
import Menu from "../menu/Menu"
import { NavLink } from "react-router"
export default function HeaderMain() {
  const [open, setOpen] = useState(false)
  const [width, setWidth] = useState('')
  const activeLinkStyle = {
    fontWeight: 'bold',
    color: 'blue',
  };
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.addEventListener('resize', handleResize);
    }
  }, [window.innerWidth])
  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  const clickHandler = () => {
    setOpen(!open)
  }

  return (
    <div className="grid grid-cols-4 items-center px-24 py-4 my-11 bg-box_lighten_secondry sticky top-0 z-50">
      <div className="relative col-span-1">
        <Menu />
      </div>
      <ul className={`lg:w-fit w-[200px] lg:static absolute ml-20 left-0 top-1 gap-6 z-40 lg:col-span-2 col-span-1 ${open ? 'h-fit' : 'h-6 lg:h-full'} lg:bg-transparent bg-primary_lighteen transition-all
      overflow-hidden flex lg:flex-row flex-col lg:items-center [&>*]:flex lg:[&>*]:flex-row [&>*]:flex-row-reverse lg:[&>*]:gap-2 [&>*]:gap-3 lg:[&>*]:px-1 [&>*]:px-3 [&>*]:pb-3`}>
        {
          width <= '1023' && <li className="bg-transparent hover:cursor-pointer befores" onClick={clickHandler}>
            <HamburgerSvg />
          </li>
        }
        <li>
          <HomeSvg />
          <NavLink exact to='/' className="font-morabba_medium" activeStyle={activeLinkStyle}>صفحه نخست</NavLink >
        </li>
        <li>
          <ArchiveSvg />
          <NavLink to='/blog' className="font-morabba_medium">مقاله</NavLink >
        </li>
        <li>
          <ShopSvg />
          <NavLink to='shopping' className="font-morabba_medium">فروشگاه</NavLink >
        </li>
        <li>
          <QuestionSvg />
          <NavLink to='questions' className="font-morabba_medium">سوالات متداول</NavLink >
        </li>
      </ul>
      <div className="hidden col-span-1 lg:flex justify-self-end gap-2 text-white bg-black px-3 py-1 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="size-6 stroke-white">
          <path d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
        </svg>
        <span className="text-white ">همکاری در فروش</span>
      </div>
    </div>
  )
}
