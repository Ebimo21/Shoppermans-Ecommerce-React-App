import React from 'react';
import './styles/App.css'
import NavBar from './components/Navbar';
import { Routes, Route} from "react-router-dom"
import Home from './components/home';
import Cart from './components/cart';
import Checkout from './components/Checkout';
import Payment from './components/Payment';

function App() {
  return (
    <div className="App">
      <NavBar style={{position:"absolute", top:0, alignSelf:'stretch', flex: 1, right:0, left:0 }}/>
  
      
        <Routes>
            <Route path = "/" element={<Home />} />
            <Route path = "/cart" element={<Cart />} />
            <Route path = "/checkout" element={<Checkout />} />
            <Route path ="/payment" element = {<Payment />} />
          
        </Routes>
  
      
      
        
    </div>
  );
}

export default App;