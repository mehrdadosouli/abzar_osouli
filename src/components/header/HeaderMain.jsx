import ArchiveSvg from "../../../public/photo/ArchiveSvg"
import HomeSvg from "../../../public/photo/HomeSvg"
import QuestionSvg from "../../../public/photo/QuestionSvg"
import ShopSvg from "../../../public/photo/ShopSvg"
import Menu from "../menu/Menu"
import { NavLink  } from "react-router"
export default function HeaderMain() {
  const activeLinkStyle = {  
    fontWeight: 'bold',  
    color: 'blue',
};

  return (
    <div className="grid grid-cols-4 items-center px-24 py-4 my-11 bg-box_lighten_secondry">
        <div className="relative">
          <Menu />
        </div>
        <ul className="flex col-span-2 items-center gap-5 [&>*]:flex [&>*]:gap-2">
          <li>
            <HomeSvg />
            <NavLink exact to='/' activeStyle={activeLinkStyle}>صفحه نخست</NavLink >
          </li>
          <li>
            <ArchiveSvg />
            <NavLink  to='/blog'>مقاله</NavLink >
          </li>
          <li>
            <ShopSvg />
            <NavLink  to='shopping'>فروشگاه</NavLink >
          </li>
          <li>
            <QuestionSvg />
            <NavLink  to='questions'>سوالات متداول</NavLink >
          </li>
        </ul>
      <div className="justify-self-end flex gap-2 text-white bg-black px-3 py-1 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="size-6 stroke-white">
          <path d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
        </svg>
        <span className="text-white ">همکاری در فروش</span>
      </div>
    </div>
  )
}
