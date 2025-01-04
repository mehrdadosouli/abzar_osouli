import AOS from 'aos';
import { useEffect } from 'react';
import { theme, loadTheme } from './utils/theme';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    loadTheme()
  }, []);
  return (
    <>
      <button onClick={theme}>click theme</button>
      <div data-aos="fade-up"><button className='text-red-600 dark:text-blue-900'>click to dark</button></div>
    </>
  )
}

export default App
