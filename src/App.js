import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from './globalStyles';

import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import HowTo from './components/HowTo';

import { productData } from './components/Products/data'


function App() {
  return (
    <Router>
      <GlobalStyle />
       <Hero />
       <About />

       <Products heading='Select your taste' data={productData}/>
       <HowTo />
    </Router>
  );
}

export default App;
