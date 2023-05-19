import React from "react";
import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
export const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <span className="logo">MyKart</span>

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
          <button className="btn">Login</button>
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
