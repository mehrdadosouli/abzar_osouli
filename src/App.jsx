import AOS from 'aos';
import { useEffect, useState } from 'react';
import { loadTheme } from './utils/theme';
import Routers from './routes/Route.jsx';
import HeaderTop from './components/header/HeaderTop.jsx';
import HeaderMain from './components/header/HeaderMain.jsx';
import Footer from './components/footer/Footer.jsx';

function App() {
  const [getTheme, setGetTheme] = useState(localStorage.getItem('theme'))
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    loadTheme()
  }, []);
  return (
    <div>
      <HeaderTop getTheme={getTheme} setGetTheme={setGetTheme}/>
      <HeaderMain getTheme={getTheme} setGetTheme={setGetTheme}/>
      <Routers />
      <Footer />
    </div>
  )
}

export default App
