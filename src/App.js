// import logo from './logo.svg';

import './App.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pruches from './Pruches/Pruches';
import Home from './Home/Home';
import Salse from './Salse/Salse';
import Products from './Products/Products';
import Salse2 from './Salse2/Salse2';
import ProductSalse from './ProductSalse/ProductSalse';
function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='Home' element={<Home />}/>
        <Route path='Pruches' element={<Pruches />}/>
        <Route path='Salse' element={<Salse />}/>
        <Route path='Salse2' element={<Salse2 />}/>
        <Route path='Products' element={<Products />}/>
        <Route path='ProductSalse' element={<ProductSalse />}/>
        <Route path='Home/Pruches' element={<Pruches />}/>
        <Route path='Home/Salse' element={<Salse />}/>
        <Route path='Home/Products' element={<Products />}/>
        <Route path='Home/ProductSalse' element={<ProductSalse />}/>
        <Route path='*' element={<h1>404 Not Found</h1>}/>
      </Routes>



    </>
  );
}

export default App;
