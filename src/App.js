// Utils
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
// Styles
import { GlobalStyle } from './globalStyles';
// Components
import Hero from './components/Hero';
import Products from './components/Products';
import Cart from './components/Cart';
// Product details (json)
import { productData } from './components/Products/data'


function App() {
// useState for adding items in the cart
 
  
  return (
    <Router>
      <GlobalStyle />
       <Hero />
       <Products data={productData} />
       <Cart />
    </Router>
  );
}

export default App;
