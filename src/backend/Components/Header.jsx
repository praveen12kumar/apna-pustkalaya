import React from "react";
import {Link, useNavigate} from "react-router-dom";
import { useContext,  } from "react";
import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import {CgProfile} from "react-icons/cg";
import { DataContext } from "../Contexts/data/dataContext";

export const Header = () => {
  let {dataDispatch,cartLength, wishlistLength} = useContext(DataContext);
  // console.log("cartLength", cartLength);
  const navigate = useNavigate();

  const handleSearch = (value)=>{
    dataDispatch({
      type: "search",
      payload: value,
    })

    navigate('/products');
  }

  //( products.filter((prod)=> prod.title.toLowerCase().includes(value.toLowerCase())) );
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
            onChange={(e)=>handleSearch(e.target.value)}
          />
          <div className="search">
            <AiOutlineSearch />
          </div>
        </div>

        <div className="header-options">
          {/* <button className="btn" onClick={()=> navigate('/login') }>Login </button> */}
          <div className="wishlist" onClick={()=>navigate('/wishlist')}>
            <AiOutlineHeart/>
            <span className="wishlistItem">{wishlistLength}</span>
          </div>

          <div className="cart" onClick={()=> navigate('/cart')}>
            <AiOutlineShoppingCart/>
            <span className="cartItem">{cartLength}</span>
          </div>

          <div className="profile" onClick={()=> navigate('/profile')}>
            <CgProfile/>
          </div>
        </div>
      </div>
    </div>
  );
};
