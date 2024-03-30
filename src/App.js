import './styles/style.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import ProductsSections from './pages/ProductsSections';
import ShoppingCart from './pages/ShoppingCart';

import React, { useState, useEffect } from 'react';


import { productsList } from './components/product lists/prouctLists'

function App() {

  const [productsListNew, setProductsListNew] = useState(productsList);
  let elem = document.querySelector('.shoppingcart');
  const logoLink = document.querySelectorAll('.nav-logo');
  let buttons = document.querySelectorAll('.buy-btn')

  for (let link of logoLink) {
    console.log(link);
    link.onclick = () => {
      elem.dataset.content = 0;
      for (let product of productsList) {
        product.inShoppingCart = false;
      }
    }

  }


  const update = () => {
    setProductsListNew(prevItems => {
      return [...prevItems];
    });
  };


  return (
    <div className="App">
      <Router>

        <NavBar nullBtn={() => update()} />

        <Routes>

          <Route path="/" element={<ProductsSections />} />
          <Route path="/ShoppingCart" element={<ShoppingCart />} />

        </Routes>

        <Footer />

      </Router>

    </div>
  );
}

export default App;
