import AOS from 'aos';
import { useEffect } from 'react';
import { theme } from './utils/theme';

function App() {
  useEffect(() => {  
    AOS.init();
  }, []);
  useEffect(() => {  
    if (localStorage.getItem('theme') == null) {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }else{
      document.documentElement.classList.add(localStorage.getItem('theme'));
    }
  }, []);
  return (
    <>
    <button onClick={theme}>click theme</button>
      <div data-aos="fade-up"><button className='text-red-600 dark:text-blue-900'>click to dark</button></div> 
    </>
  )
}

export default App
