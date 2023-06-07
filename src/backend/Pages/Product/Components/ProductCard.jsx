import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { DataContext } from "../../../Contexts/data/dataContext";
import { ToastHandler } from "../../../utils/utils";
import { AuthContext } from "../../../Contexts/AuthContext/AuthContext";

export const ProductCard = ({ prod }) => {
  let result = {};
  let result1 = {};
  
  let { dataDispatch, cart, wishlist } = useContext(DataContext);
  const {isLogIn} = useContext(AuthContext);
  const navigate = useNavigate();

  const isInCart = cart.some((item) => item._id === prod._id);
  const { _id, title, author, image, price, newPrice, discount, rating, Language } = prod;

  const handleAddCart = async (prod) => {
   if(isLogIn){ try {
      const prod1 = {
        product: prod,
      };
      const encodedToken = localStorage.getItem("encodedToken");
      const response = await fetch(`/api/user/cart`, {
        method: "POST",
        headers: {
          authorization: encodedToken,
        },
        body: JSON.stringify(prod1),
      });
      // saving the encodedToken in the localStorage
      result = await response.json();
      dataDispatch({
        type: "handleCart",
        payload: result.cart,
      });
    } catch (error) {
      console.log(error);
    }}
    else{
      navigate('../login')
    }
  };

  const isInWishlist = wishlist.some((item) => item._id === prod._id);

  const handleWishlist = async (prod) => {
    if(isLogIn){try {
      const encodedToken = localStorage.getItem("encodedToken");
      const response = await fetch(
        isInWishlist ? `/api/user/wishlist/${prod._id}` : `/api/user/wishlist`,
        {
          method: isInWishlist ? "DELETE" : "POST",
          headers: {
            authorization: encodedToken,
          },
          body: isInWishlist ? "" : JSON.stringify({ product: prod }),
        }
      );
      // saving the encodedToken in the localStorage
      result1 = await response.json();

      dataDispatch({
        type: "handleWishlist",
        payload: result1.wishlist,
      });
      console.log("wishlist", wishlist, "productid", prod._id);
    } catch (error) {
      console.log(error);
    }}
    else{
      navigate('../login')
    }
  };

  return (
    <li className="product-card" key={_id}>
      {/* <Link to={`/products/${_id}`}> */}
      <div className="card-image" onClick={() => navigate(`/products/${_id}`)}>
        <img className="image" src={image} alt={"random"} />
      </div>
      {/* </Link> */}
      <div className="heart">
      {
          isInWishlist ? <button className="remove-heart" onClick={() => handleWishlist(prod)}> <AiFillHeart /> </button>
          : <button className="add-heart" onClick={() => handleWishlist(prod)}> <AiFillHeart /> </button>
      }
      </div>
      <div className="card-details">
        <div className="title-rating">
          <h3>{title}</h3>
        </div>
        <div className="author">
          <p>{author}</p>
          <div className="rating">
            <h4>{rating}</h4>
            <h5>
              <AiFillStar />
            </h5>
          </div>
        </div>
        <div className="language">
          <p>Language: {Language}</p>
        </div>
        <div className="price-details">
          <div className="cprice">
            <h4>₹{newPrice} </h4>
          </div>
          <div className="oprice">
            <h4>₹{price}</h4>
          </div>
          <div className="discount">
            <h4>({discount}% OFF)</h4>
          </div>
        </div>
      </div>
      <div className="button">
        {isInCart ? (
          <button className="btn" style={{}} onClick={() => navigate("/cart")}>
            <FaShoppingCart />
            <span> Go to Cart </span>
          </button>
        ) : (
          <button
            className="btn"
            style={{}}
            onClick={() => handleAddCart(prod)}
          >
            <FaShoppingCart />
            <span> Add to Cart</span>
          </button>
        )}
      </div>
    </li>
  );
};
