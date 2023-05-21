import React from 'react'
import {AiOutlineHeart, AiFillStar} from "react-icons/ai";
import {FaShoppingCart} from "react-icons/fa";
export const ProductCard = ({prod, index}) => {
    const {_id, title, author, image, price, newPrice, discount,
        rating,Language,  } = prod;
  return (
    <div className='product-card' key={_id}>
      <div className="card-image"> 
          <img className='image' src={image} alt={"random"} />
      </div>
      <div className="heart">
            <AiOutlineHeart/>
      </div>
      <div className="card-details">
        <div className="title-rating">
          <h3>{title}</h3> 
        </div>
        <div className="author">
          <p>{author}</p>
          <div className="rating">
            <h4>{rating}</h4>
            <h5><AiFillStar/></h5>
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
        <button className='btn'>
          <FaShoppingCart/>Add to cart
        </button>
      </div>
    </div>
  )
}

