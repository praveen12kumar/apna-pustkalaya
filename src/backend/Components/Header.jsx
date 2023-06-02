import React from "react";
import {Link, useNavigate} from "react-router-dom";
import { useContext,  } from "react";
import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { DataContext } from "../Contexts/data/dataContext";

export const Header = () => {
  let {cartLength, wishlistLength } = useContext(DataContext);
  // console.log("cartLength", cartLength);
  const navigate = useNavigate();
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
          <button className="btn" onClick={()=> navigate('/login') }>Login </button>
          <div className="wishlist">
            <AiOutlineHeart/>
            <span className="wishlistItem">{wishlistLength}</span>
          </div>

          <div className="cart" onClick={()=> navigate('/cart')}>
            <AiOutlineShoppingCart/>
            <span className="cartItem">{cartLength}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
