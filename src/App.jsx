import AOS from 'aos';
import { useEffect } from 'react';
import { theme, loadTheme } from './utils/theme';
import { Routes } from 'react-router';
import Routers from './routes/Route.jsx';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    loadTheme()
  }, []);
  return (
    <div>
        <Routers />
    </div>
  )
}

export default App
