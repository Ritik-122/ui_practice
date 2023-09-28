
import './App.css'; 
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/About';
import ContactUs from './pages/ContactUs';
function App() {
  return (
    <>
    <BrowserRouter>
     <Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<ContactUs/>}/>
     
</Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
