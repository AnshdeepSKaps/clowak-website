import react from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home';
import JoinUs from './pages/joinUs';
import AboutUs from './pages/aboutUs';
import Gallery from './pages/gallery';
import ContactUs from './pages/contactUs';
import Product from './pages/product'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/joinus' element={<JoinUs />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/products' element={<Product />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
