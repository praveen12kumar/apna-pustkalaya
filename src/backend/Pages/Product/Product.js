import React from "react";
import {useContext, useState } from "react";
import { ProductFilter } from "./Components/ProductFilter";
import { ProductCard } from "./Components/ProductCard";
import { DataContext } from "../../Contexts/data/dataContext";


export const Product = () => {
  
  const {products} = useContext(DataContext);
  // console.log(products)
  const {filterCategory} = useContext(DataContext);
  const [productData, setProductData] = useState(products);
  
 
 


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
             
              <h1>Sorry , Products are not available for chosen category.</h1>
            
          )}
        </div>
            
        <div className="product-section">
          {/* {console.log(filterCategory)} */}
          {productData.filter((prod)=>(
              filterCategory === "All" ? true : prod.categoryName === filterCategory)).map((prod) => (
            <ProductCard prod = {prod}/>
          ))}
        </div>
      </div>
    </div>
   
  );
};
