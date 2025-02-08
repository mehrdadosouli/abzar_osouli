import Routers from './routes/Route.jsx';
import HeaderTop from './components/header/HeaderTop.jsx';
import HeaderMain from './components/header/HeaderMain.jsx';
import Footer from './components/footer/Footer.jsx';

function App() {


  return (
    <div>
      
      <HeaderTop />
      <HeaderMain />
      <Routers />
      <Footer />
    </div>
  )
}

export default App
