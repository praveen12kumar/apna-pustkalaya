import React from "react";
import {useContext} from "react";
import { DataContext } from "../../../Contexts/data/dataContext";
export const ProductFilter = () => {
  const ratingArray = [1, 2, 3, 4];
  let {dataDispatch, category,filterCategory,sortBy, priceRange, rating,products } = useContext(DataContext);
  

  const categoryHandler = (category) =>{
    
    for( let cate in filterCategory){
      if(filterCategory[cate] === category){
        dataDispatch({
          type:"delete_filter_category",
          payload: category,
        })
      }
      else{
        dataDispatch({
          type:"add_filter_category",
          payload: category,
        })
      }
    }
  }

  
  return (
    
    <div className="filter-container">
      {console.log(filterCategory)}
      <div className="filter">
        <h3>Filter</h3>
      </div>
      <div className="price-range">
        <label htmlFor="" ><h4>Price</h4></label>
        {/* <input type="range" min={100} max={1500} onChange={(e)=> {return  priceRange=(e.target.value)}}   /> */}
        <input type="range" min={100} max={1500} onChange={(e)=> {dataDispatch({
          type:"filterPrice",
          payload: e.target.value,
        })

        }} />
      </div>
      <div className="filter-category">
        <h4>Category</h4>
        <div className="category" >
          {
            category.map(({categoryName})=>(
              <li key={categoryName}>
                <label>
                {/* <input type="checkbox" id="checkbox1" name="checkbox" value={categoryName} /> */}
                <input type="checkbox" id="checkbox1" name="checkbox" value={categoryName} onChange={()=> categoryHandler(categoryName)} />
                {categoryName}</label>
              </li>
            ))
          }
        </div>
        
      </div>
      <div className="filter-rating">
        <h4>Rating</h4>
        <div className="rating">
        {
          ratingArray.map((rate)=>{
            return(
              <li key={rate}>
                <label key={rate}>
                <input type="radio" name="rating1" value={rate}   onChange={(e)=> dataDispatch({
                  type:"filterRating",
                  payload:(e.target.value)
                })}  />
                {rate} Stars and Above
              </label>
              </li>
            )
          })
        }
        </div>
      </div>
      <div className="filter-sort">
        <h4>Price</h4>
        <div>
            <input type="radio" id="radio5" name="radio" onChange={(e)=> dataDispatch({
                  type:"filterSortBy",
                  payload:("lowToHigh")
                })}     />
            <label htmlFor="radio5">Price - Low to High</label>
        </div>
        <div>
            <input type="radio" id="radio6" name="radio" onChange={(e)=> dataDispatch({
                  type:"filterSortBy",
                  payload:("HighToLow")
                })}   />
            <label htmlFor="radio6">Price - High to Low</label>
        </div>
      </div>
      <div className="filter-clear">
        <button className="btn" type="button" onClick={(e)=> dataDispatch({
          type:"clearFilters",
          payload:"clear",
        }) }  >Clear</button>
      </div>
    </div>
  );
};
