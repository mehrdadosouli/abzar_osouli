import AOS from 'aos';
import { useEffect } from 'react';
import { loadTheme } from './utils/theme';
import Routers from './routes/Route.jsx';
import HeaderTop from './components/header/HeaderTop.jsx';
import HeaderMain from './components/header/HeaderMain.jsx';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    loadTheme()
  }, []);
  return (
    <div>
      <HeaderTop />
      <HeaderMain />
        <Routers />
    </div>
  )
}

export default App
