import React from 'react';
import {Routes, Route} from "react-router-dom";
import Mockman from "mockman-js"
import {Header} from "../src/backend/Components/Header";
import {Home} from "../src/backend/Pages/Home/Home"
import { Product } from './backend/Pages/Product/Product';
import {ProductPage} from "./backend/Pages/Product/ProductPage";
import {Cart} from "./backend/Pages/Cart/Cart";
// CSS
import "./backend/styles/app.scss";
import "./backend/styles/utils.scss";
import "./backend/styles/header.scss";
import "./backend/Pages/Home/home.scss";
import "./backend/Pages/Product/product.scss";
import "./backend/Pages/Product/product.scss";
import "./backend/Pages/Product/Components/productFilter.scss";
import "./backend/Pages/Product/Components/productCard.scss";
import "./backend/Pages/Product/productPage.scss";


function App() {
  return (
    <div className="App">
      
      <Header/>
  
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:productId" element={<ProductPage />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>

    </div>
  );
}

export default App;
