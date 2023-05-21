import React from "react";

export const ProductFilter = () => {
  return (
    <div className="filter-container">
      <div className="filter">
        <h3>Filter</h3>
      </div>
      <div className="filter-range">
        <label htmlFor=""><h4>Price</h4></label>
        <input type="range" />
      </div>
      <div className="filter-category">
        <h4>Category</h4>
        <div>
          <input type="checkbox" id="checkbox1" name="checkbox" />
          <label htmlFor="checkbox1">Fiction</label>
        </div>
        <div>
          <input type="checkbox" id="checkbox2" name="checkbox" />
          <label htmlFor="checkbox2">Non-Fiction</label>
        </div>
        <div>
          <input type="checkbox" id="checkbox3" name="checkbox" />
          <label htmlFor="checkbox3">Self Help</label>
        </div>
      </div>
      <div className="filter-rating">
        <h4>Rating</h4>
        <div>
            <input type="radio" id="radio1" name="radio" />
            <label htmlFor="radio1">1 star & above</label>
        </div>
        <div>
            <input type="radio" id="radio2" name="radio" />
            <label htmlFor="radio2">2 star & above</label>
        </div>
        <div>
            <input type="radio" id="radio3" name="radio" />
            <label htmlFor="radio3">3 star & above</label>
        </div>
        <div>
            <input type="radio" id="radio4" name="radio" />
            <label htmlFor="radio4">4 star & above</label>
        </div>
      </div>
      <div className="filter-sort">
        <h4>Price</h4>
        <div>
            <input type="radio" id="radio5" name="radio" />
            <label htmlFor="radio5">Price - Low to High</label>
        </div>
        <div>
            <input type="radio" id="radio6" name="radio" />
            <label htmlFor="radio6">Price - High to Low</label>
        </div>
      </div>
      <div className="filter-clear">
        <button className="btn" type="button">Clear</button>
      </div>
    </div>
  );
};
