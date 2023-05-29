import React from 'react';
import { useContext } from 'react';
import {  useNavigate } from 'react-router-dom';
import {AiOutlineHeart, AiFillStar} from "react-icons/ai";
import {FaShoppingCart} from "react-icons/fa";
import { DataContext } from '../../../Contexts/data/dataContext';


export const ProductCard = ({prod}) => {
  
  let {dataDispatch, cart} = useContext(DataContext);

  const navigate = useNavigate();
    const {id, title, author, image, price, newPrice, discount,
        rating,Language,  } = prod;

      const handleAddCart = (prod) => {
        dataDispatch({
          type: "Add_to_cart",
          payload: prod,
        })
      };


  return (
    <li className='product-card' key={id}>
      {/* <Link to={`/products/${_id}`}> */}
       <div className="card-image" onClick={()=> navigate(`/products/${id}`)} > 
          <img className='image' src={image} alt={"random"}  />
          
      </div>
      {/* </Link> */}
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
        <button className='btn' onClick={()=>handleAddCart(prod)}>
          <FaShoppingCart/><span>Add to cart</span>
        </button>
      </div>
    </li>
  )
}

