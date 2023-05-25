import React from "react";
import {Link} from "react-router-dom";
import { useContext } from "react";
import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { DataContext } from "../Contexts/data/dataContext";
export const Header = () => {
  let {category,sortBy, priceRange, rating,products } = useContext(DataContext);

  return (
    <div className="header">
      <div className="header-container">
      <Link to="/">
        <div className="header-logo">
          {/* <span className="logo">ApnaPustakalay</span> */}
          <div className="logo"></div>
        </div>
        </Link>
        
        <div className="search-container">
          <input
            className="input"
            type="text"
            placeholder="Search for products, brands and more"
          />
          <div className="search">
            <AiOutlineSearch />
          </div>
        </div>

        <div className="header-options">
          <button className="btn" onClick={()=> console.log("cate", category, "price", priceRange,"rating", rating , products)}   >Login </button>
          <div className="wishlist">
            <AiOutlineHeart/>
            <span className="wishlistItem">0</span>
          </div>
          <div className="cart">
            <AiOutlineShoppingCart/>
            <span className="cartItem">0</span>
          </div>
        </div>
      </div>
    </div>
  );
};
