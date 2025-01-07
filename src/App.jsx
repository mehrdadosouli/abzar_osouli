import AOS from 'aos';
import { useEffect, useState } from 'react';
import { loadTheme, theme } from './utils/theme';
import Routers from './routes/Route.jsx';
import HeaderTop from './components/header/HeaderTop.jsx';
import HeaderMain from './components/header/HeaderMain.jsx';

function App() {
  const [getTheme,setGetTheme]=useState(localStorage.getItem('theme'))
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    loadTheme()
  }, []);

  return (
    <div>
      <button onClick={()=>{theme();setGetTheme(localStorage.getItem('theme'))}}>click</button>
      <HeaderTop />
      <HeaderMain />
        <Routers />
    </div>
  )
}

export default App
