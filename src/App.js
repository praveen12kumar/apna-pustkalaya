import React from 'react';
import {Routes, Route} from "react-router-dom";
import Mockman from "mockman-js"
import {Header} from "../src/backend/Components/Header";
import {Home} from "../src/backend/Pages/Home/Home"
import { Product } from './backend/Pages/Product/Product';


// CSS
import "./backend/styles/app.scss";
import "./backend/styles/utils.scss";
import "./backend/styles/header.scss";
import "./backend/Pages/Home/home.scss";
import "./backend/Pages/Product/product.scss";
import "./backend/Pages/Product/product.scss";
import "./backend/Pages/Product/Components/productFilter.scss";
import "./backend/Pages/Product/Components/productCard.scss";



function App() {
  return (
    <div className="App">
      
      <Header/>
  
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/products" element={<Product />} />

      </Routes>

    </div>
  );
}

export default App;
