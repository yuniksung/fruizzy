// Utils
import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
// Styles
import { GlobalStyle } from './globalStyles';
// Components
import Hero from './components/Hero';
import Products from './components/Products';
import Cart from './components/Cart';
// Product details (json)
import data from './components/Products/data'


function App() {
  const { products } = data
  const [cartItems, setCartItems] = useState([])

  // Add to cart eventlistner for 'Product.js' and 'Cart.js'
  const onAdd = (product) => {
    console.log('added');

    // exist: finds if there are any items inside of the cart. 
    const exist = cartItems.find((x) => x.id === product.id);
    
    if(exist) { //if yes, it will add the product's qty by 1
      setCartItems(
        cartItems.map((x) => 
          x.id === product.id ? {...exist, qty: exist.qty + 1} : x
        )
      );
    } else { //if not, the number of qty will remain
      setCartItems([...cartItems, {...product, qty: 1}])
    }
  }
  
  return (
    <Router>
      <GlobalStyle />
       <Hero />
       <Products products={products} onAdd={onAdd}/>
       <Cart cartItems={cartItems}/>
    </Router>
  );
}

export default App;
