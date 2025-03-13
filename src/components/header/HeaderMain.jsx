import { useEffect, useState } from "react"
import ArchiveSvg from "../../../public/photo/ArchiveSvg"
import HomeSvg from "../../../public/photo/HomeSvg"
import QuestionSvg from "../../../public/photo/QuestionSvg"
import ShopSvg from "../../../public/photo/ShopSvg"
import HamburgerSvg from "../../../public/photo/HamburgerSvg"
import Basket from '../basket/Basket'
import Menu from "../menu/Menu"
import { NavLink } from "react-router"
import './headerr.css'

export default function HeaderMain({ setGetTheme, getTheme }) {
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
    if(width > '1023'){
      setOpen(false)
    }
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [window.innerWidth])
  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  const clickHandler = () => {
    setOpen(!open)
  }

  return (
    <div className="grid grid-cols-4 items-center md:px-24 md:py-3 bg-box_lighten_secondry sticky top-0 z-50 ">
      <div className="relative md:col-span-1 col-span-2">
        <Menu />
      </div>
      <div className={`absolute left-8 top-2 ${width <= '1023' ? "flex" : "hidden" }`}> 
          <li className="bg-transparent hover:cursor-pointer befores top-full bottom-full translate-y-1/2 list-none" onClick={clickHandler}>
            <HamburgerSvg />
          </li>
      </div>
      <ul className={`menu ${open ? 'open' : ''} [&>*]:flex [&>*]:flex-row-reverse [&>*]:gap-3 [&>*]:pb-4 [&>*]:justify-start`}>
        <li className="py-2">
          <HomeSvg />
          <NavLink exact to='/' className="font-morabba_medium" activeStyle={activeLinkStyle}>صفحه نخست</NavLink >
        </li>
        <li className="py-2">
          <ArchiveSvg />
          <NavLink to='/blog' className="font-morabba_medium">مقاله</NavLink >
        </li>
        <li className="py-2">
          <ShopSvg />
          <NavLink to='category' className="font-morabba_medium">فروشگاه</NavLink >
        </li>
        <li className="py-2">
          <QuestionSvg />
          <NavLink to='questions' className="font-morabba_medium">سوالات متداول</NavLink >
        </li>
      </ul>
      {
        width > '1023' ?
          <div className="col-span-3 flex justify-self-end gap-2 text-white bg-black px-3 py-1 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="size-6 stroke-white">
              <path d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
            </svg>
            <span className="text-white ">همکاری در فروش</span>
          </div>
          :
          <div className="col-span-1 justify-self-end">
            <Basket setGetTheme={setGetTheme} getTheme={getTheme} />
          </div>
      }
      <div className={`transform absolute ${open ? "w-full h-[100vh] blur-lg top-16 -z-10 bg-gray-200 opacity-50" : "hidden"} transition-all duration-300`} onClick={() => setOpen(false)}></div>  
      </div>
  )
}