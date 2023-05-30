import React from "react";
import {useContext, useState } from "react";
import { ProductFilter } from "./Components/ProductFilter";
import { ProductCard } from "./Components/ProductCard";
import { DataContext } from "../../Contexts/data/dataContext";


export const Product = () => {
  
  // console.log(products)
  let {dataDispatch, category,filterCategory,sortBy, priceRange, rating,products, activeFilterCategory } = useContext(DataContext);
  
  
 
  let priceFilter = products.filter((item) => item.newPrice <= priceRange)
  let CategoryFilter = activeFilterCategory.length === 0 ? priceFilter : priceFilter.filter((item) => activeFilterCategory.includes(item.categoryName));
  let RatingFilter = rating.length === 0 ? CategoryFilter : CategoryFilter.filter((item)=> item.rating >= rating);
  let finalData = sortBy.length === 0 ? RatingFilter : sortBy === "lowToHigh" ? RatingFilter.sort(function(a, b){return a.newPrice - b.newPrice}) : RatingFilter.sort(function(a, b){return b.newPrice - a.newPrice});

  //const [filteredData, setFilteredData] = useState(RatingFilter);
  

  return (
    <div className="product-container">
       <ProductFilter/> 
       
      <div className="product-list-section">
        <div className="product-header">
          {finalData.length > 0 ? (
            <>
              <h3>Showing All Products</h3>
              <span>({finalData.length}{" "}products)</span>
            </>
          ) : (
             
              <h1>Sorry , Products are not available for chosen category.</h1>
            
          )}
        </div>
            
        <div className="product-section">
          {/* {console.log(filterCategory)} */}
          {finalData.map((prod) => (
            <ProductCard prod = {prod}/>
          ))}
        </div>
      </div>
    </div>
   
  );
};
