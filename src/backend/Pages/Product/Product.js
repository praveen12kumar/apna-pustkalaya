import React from "react";
import { useState, useEffect } from "react";
import { ProductFilter } from "./Components/ProductFilter";
import { ProductCard } from "./Components/ProductCard";
export const Product = () => {
const [productData, setProdcuctData] = useState([]);

  const getData = async () => {
    try {
      fetch("/api/products")
        .then((response) => response.json())
        .then((data) => setProdcuctData(data.products));
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  console.log(productData);
  return (
    <div className="product-container">
       <ProductFilter/> 
       
      <div className="product-list-section">
        <div className="product-header">
          {productData.length > 0 ? (
            <>
              <h3>Showing All Products</h3>
              <span>({productData.length}{" "}products)</span>
            </>
          ) : (
            productData.length > 0 && (
              <h1>Sorry , Products are not available for chosen category.</h1>
            )
          )}
        </div>

        <div className="product-section">
          {productData.map((prod, index) => (
            <ProductCard prod = {prod} index= {index}/>
          ))}
        </div>
      </div>
    </div>
  );
};
