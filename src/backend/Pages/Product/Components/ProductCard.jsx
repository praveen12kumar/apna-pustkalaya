import React from 'react';
import { useContext, useState  } from 'react';
import {  useNavigate } from 'react-router-dom';
import {AiOutlineHeart, AiFillStar} from "react-icons/ai";
import {FaShoppingCart} from "react-icons/fa";
import { DataContext } from '../../../Contexts/data/dataContext';


export const ProductCard = ({prod}) => {
  let result = {};
  let {dataDispatch,cart} = useContext(DataContext);
  const [inCart, setInCart] = useState(false)

  const navigate = useNavigate();
    const {id, title, author, image, price, newPrice, discount,
        rating,Language,  } = prod;

      const handleAddCart = async (prod) => {
        
        
        if(inCart) {
          navigate('/cart');
        }
        else{
        setInCart(true);

        try {
           const prod1 = {
            product: prod
           }
           const encodedToken = localStorage.getItem("encodedToken");
            const response = await fetch(`/api/user/cart`, {
              method: 'POST',
              headers: {
                "authorization": encodedToken
              },
              body: JSON.stringify(prod1)
            });
            // saving the encodedToken in the localStorage
            result = await response.json();
            
            dataDispatch({
              type: "Add_to_cart",
              payload: prod,
            })
          } catch (error) {
            console.log(error);
          }
        }

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
      
       
        <button className='btn' style={{}} onClick={()=>handleAddCart(prod)}>
          <FaShoppingCart/><span>{ inCart ? "Go to Cart" : "Add to Cart"}</span>
        </button> 
        
        
        
       
      </div>
    </li>
  )
}



