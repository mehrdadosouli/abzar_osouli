import Search from "../search/Search";
import { theme } from '../../utils/theme';
import MoonIcon from "../../../public/photo/MoonIcon";
import SunIcon from "../../../public/photo/SunIcon";
import Basket from "../basket/Basket";

export default function HeaderTop({ setGetTheme, getTheme }) {

  return (
    <div className="grid grid-cols-5 items-center md:px-24 px-12 py-10 gap-5">
      <h1 className="md:col-span-2 lg:col-span-1 md:block hidden text-xl mt-2 text-primaryColor dark:text-white font-bold">MEHRDAD ABZAR</h1>
      <Search />
      <div className="flex md:justify-end justify-between items-center gap-2 lg:col-span-2 md:col-span-3 col-span-5">
        <div className="flex gap-2 md:justify-center items-center dark:text-white text-black hover:cursor-pointer" onClick={() => { theme(); setGetTheme(localStorage.getItem('theme')) }}>
          {
            getTheme == 'light' ? 'تم تیره' : 'تم روشن'
          }
          {
            getTheme == 'light' ? <MoonIcon /> : <SunIcon />
          }
        </div>
        <div className="flex items-center gap-5">
          <div className="flex justify-between items-center text-white gap-3 w-36 bg-primaryColor px-3 py-1 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            <span>ورود / ثبت نام</span>
          </div>
          <div className="md:block hidden"><Basket setGetTheme={setGetTheme} getTheme={getTheme} /></div>
        </div>
      </div>
    </div>
  )
}
