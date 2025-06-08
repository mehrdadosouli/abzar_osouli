import Search from "../search/Search";
import { theme } from '../../utils/theme';
import MoonIcon from "../../../public/photo/MoonIcon";
import SunIcon from "../../../public/photo/SunIcon";
import Basket from "../basket/Basket";
import { Link } from "react-router";

export default function HeaderTop({ setGetTheme, getTheme }) {

  return (
    <div className="flex justify-between items-center md:px-24 px-5 py-10 gap-5">
      <Link to="/" className="flex text-lg mt-2 text-primaryColor dark:text-white font-bold">MEHRDAD</Link>
      <Search />
      <div className="flex md:justify-end justify-between items-center gap-5">
        <div className="flex gap-2 md:justify-center items-center dark:text-white text-black hover:cursor-pointer select-none" onClick={() => { theme(); setGetTheme(localStorage.getItem('theme')) }}>
          {
            getTheme == 'light' ? 'تم تیره' : 'تم روشن'
          }
          {
            getTheme == 'light' ? <MoonIcon /> : <SunIcon />
          }
        </div>
        <div className="flex items-center gap-5">
          <Link to="/login" className="flex justify-between items-center text-white gap-3 w-36 bg-primaryColor px-3 py-1 rounded-lg hover:cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            <span>ورود / ثبت نام</span>
          </Link>
          <div className="md:block hidden"><Basket setGetTheme={setGetTheme} getTheme={getTheme} /></div>
        </div>
      </div>
    </div>
  )
}
