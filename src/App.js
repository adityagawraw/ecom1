
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Header from './components/Header';
import { useState,useEffect } from 'react';

function App() {

  let [products,setProducts] = useState([]);
  let [cartArr, setCartArr] = useState([]);
 
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(json=> setProducts(json))
     },[]);

 

  return (
    <BrowserRouter>
      <div>
<Header className="header"  cartArr={cartArr}/>
        <Routes>
          <Route path='/' element={<Home cartArr={cartArr} setCartArr={setCartArr}  products={products} />}></Route>
          <Route path='/cart' element={<Cart cartArr={cartArr} setCartArr={setCartArr} />}></Route>
       
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
