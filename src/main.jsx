import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router";
import { store } from '../src/redux/app/store.js'
import { Provider } from 'react-redux'
import 'animate.css';
import Aos from 'aos';

Aos.init();
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
