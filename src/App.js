import react from 'react'
import Home from './pages/home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AboutUs from './pages/aboutUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/aboutus'  element={<AboutUs />} />

      </Routes>
    </BrowserRouter >
  );
}

export default App;
