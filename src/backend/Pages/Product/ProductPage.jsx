import React from "react";
import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DataContext} from "../../Contexts/data/dataContext";
import { AiFillStar, AiOutlineHeart, } from "react-icons/ai";
import {FaShoppingCart} from "react-icons/fa"
import { BsTagFill, BsLightningFill } from "react-icons/bs";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";



export const ProductPage = () => {
  const {isLogIn} = useContext(AuthContext)
  const navigate = useNavigate();

  let result = {};
  let result1 = {};

  const { productId } = useParams();
  const { products, dataDispatch,cart, wishlist } = useContext(DataContext);

  
  const product = products.find((prod) => prod._id === productId);

  const {
    _id, title, author, image, price, newPrice, discount,
    Pages, Language, rating, categoryName, cashOnDelivery,
    fastDelivery,
  } = product;
  
  
  const isInCart = cart.find((item)=> item._id === product._id);
  console.log("cart", isInCart)
  const handleAddCart = async (prod) => {
    if(isLogIn){
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
          type: "handleCart",
          payload: result.cart,
        })
      } catch (error) {
        console.log(error);
      }}
      else{
        navigate('/login')
      }
    }
    const isInWishlist = wishlist.find((item)=> item._id === product._id);
    
    
    const handleWishlist = async (prod) => {
      if(isLogIn){try {
         const encodedToken = localStorage.getItem("encodedToken");
          const response = await fetch ( isInWishlist ? `/api/user/wishlist/${prod._id}` : `/api/user/wishlist`, {
            method: isInWishlist ? 'DELETE' : 'POST', 
            headers: {
              "authorization": encodedToken
            },           
            body: isInWishlist ? ("") : (JSON.stringify({product: prod}))
          });
          // saving the encodedToken in the localStorage
          result1 = await response.json();
         
          dataDispatch({
            type: "handleWishlist",
            payload: result1.wishlist,
          })
          console.log("wishlist", wishlist, "productid", product._id );
        } catch (error) {
          console.log(error);
        }}
        else{
          navigate('/login')
        }
      }


  return (
    <div className="product-page-container" key={_id} >
      <div className="product-page-main">
        <div className="main-sections">
          <div className="image-container">
            <img src={image} />
          </div>
          <div className="details-container">
            <div className="title">
              <h3>{title}</h3>
            </div>
            <div className="rating">
              <h4>{rating}</h4>
              <h5>
                <AiFillStar />
              </h5>
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
            <div className="few-left">
              
                <p>
                  <BsLightningFill />
                </p>
                <h5> Hurry, Only Few Left</h5>
              
            </div>
            
            <div className="tag-section">
                <div className="tag">
                    <h5><BsTagFill/></h5><p>FastDelivery {fastDelivery ?"Available":"Unavailabe" }</p>
                </div>
                <div className="tag">
                    <h5><BsTagFill/></h5><p>Inclusive of All Taxes</p>
                </div>
                <div className="tag">
                    <h5><BsTagFill/></h5><p>Cash On Delivery {cashOnDelivery ?"Available":"Unavailabe" }</p>
                </div>
            </div>
            <div className="page-section">
                <h5>Pages: <span>{Pages}</span></h5>
            </div>
            
            <div className="highlights-section">
                <div className="highlight">
                    
                        <p className="auth">Author: </p>
                        <p className="cate">{author}</p>
                    
                </div>
                <div className="highlight">
                    
                        <p className="auth">Category: </p>
                        <p className="cate">{categoryName}</p>
                    
                </div>
                <div className="highlight">
                    
                        <p className="auth">Language: </p>
                        <p className="cate">{Language}</p>
                    
                </div>
            </div>
          </div>
        </div>
        <div className="buttons">
            {
          isInCart ? <button className='btn' style={{}} onClick={()=> navigate('/cart')}>
                    <FaShoppingCart/><span> Go to Cart </span>
                </button>
              :
              <button className='btn' style={{}} onClick={()=>handleAddCart(product)}>
              <FaShoppingCart/><span> Add to Cart</span>
             </button> 
        } 
            {
        isInWishlist ? <button className='btn' style={{}} onClick={()=> handleWishlist(product)}>
                    <AiOutlineHeart/><span> Remove From Wishlist </span>
                </button>
              :
              <button className='btn' style={{}} onClick={()=>handleWishlist(product)}>
              <AiOutlineHeart/><span> Add to Wishlist</span>
             </button> 
        }


            {/* <button className="btn" ><AiOutlineHeart/> <span>Add to Wishlist</span> </button>    */}
        </div>
      </div>
    </div>
  );
};
