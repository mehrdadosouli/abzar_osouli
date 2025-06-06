import { useState } from "react";
import ArchiveSvg from "../../../public/photo/ArchiveSvg";
import HomeSvg from "../../../public/photo/HomeSvg";
import QuestionSvg from "../../../public/photo/QuestionSvg";
import ShopSvg from "../../../public/photo/ShopSvg";
import HamburgerSvg from "../../../public/photo/HamburgerSvg";
import Basket from '../basket/Basket';
import Menu from "../menu/Menu";
import { NavLink } from "react-router";
import './headerr.css';

export default function HeaderMain({ setGetTheme, getTheme }) {
  const [open, setOpen] = useState(false);
  const activeLinkStyle = {
    fontWeight: 'bold',
    color: 'blue',
  };

  const clickHandler = () => {
    setOpen(!open);
  }

  return (
    <div className="flex justify-between items-center md:px-24 px-12 bg-box_lighten_secondry sticky top-0 z-50 py-5">
        <Menu />
      {/* Navigation desktop */}
      <ul className="hidden lg:flex gap-3">
        <li className="flex items-center gap-3">
          <HomeSvg />
          <NavLink exact to='/' className="font-morabba_medium" activeStyle={activeLinkStyle}>صفحه نخست</NavLink>
        </li>
        <li className="flex items-center gap-3">
          <ArchiveSvg />
          <NavLink to='/blog' className="font-morabba_medium">مقاله</NavLink>
        </li>
        <li className="flex items-center gap-3">
          <ShopSvg />
          <NavLink to='category' className="font-morabba_medium">فروشگاه</NavLink>
        </li>
        <li className="flex items-center gap-3">
          <QuestionSvg />
          <NavLink to='questions' className="font-morabba_medium">سوالات متداول</NavLink>
        </li>
      </ul>

      {/* Navigation mobile */}
      <ul className={`
        md:hidden flex flex-col fixed top-0 left-0 h-full w-2/3 bg-slate-100 p-10 gap-5
        transform transition-transform duration-300 z-50
        ${open ? "translate-x-0" : "-translate-x-full"}
        [&>*]:flex [&>*]:gap-3 [&>*]:justify-start
      `}>
        <li className="flex items-center gap-3">
          <HomeSvg />
          <NavLink exact to='/' className="font-morabba_medium" activeStyle={activeLinkStyle} onClick={() => setOpen(false)}>صفحه نخست</NavLink>
        </li>
        <li className="flex items-center gap-3">
          <ArchiveSvg />
          <NavLink to='/blog' className="font-morabba_medium" onClick={() => setOpen(false)}>مقاله</NavLink>
        </li>
        <li className="flex items-center gap-3">
          <ShopSvg />
          <NavLink to='category' className="font-morabba_medium" onClick={() => setOpen(false)}>فروشگاه</NavLink>
        </li>
        <li className="flex items-center gap-3">
          <QuestionSvg />
          <NavLink to='questions' className="font-morabba_medium" onClick={() => setOpen(false)}>سوالات متداول</NavLink>
        </li>
      </ul>

      {/* همکاری در فروش دسکتاپ */}
      <div className="hidden lg:flex justify-self-end gap-2 text-white bg-black px-3 lg:py-1 rounded-lg items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-6 h-6 stroke-white">
          <path d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
        </svg>
        <span>همکاری در فروش</span>
      </div>

      {/* موبایل: سبد خرید و دکمه منو */}
      <div className="flex items-center gap-4 lg:hidden">
        <div className="md:hidden flex">
          <Basket setGetTheme={setGetTheme} getTheme={getTheme} />
        </div>
        <button className="bg-transparent p-1" onClick={clickHandler} aria-label="Toggle Menu">
          <HamburgerSvg />
        </button>
      </div>

      {/* بک‌دراپ وقتی منو باز است */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        />
      )}

    </div>
  );
}
