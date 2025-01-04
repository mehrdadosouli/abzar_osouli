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
    <div>
      <button onClick={theme}>click</button>
    </div>
  )
}

export default App
