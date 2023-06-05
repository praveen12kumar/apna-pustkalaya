import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import "./singleCartCard.scss";

import { DataContext } from '../../../Contexts/data/dataContext';

export const SingleCartCard = ({card, index}) => {

    const {dataDispatch, wishlist} = useContext(DataContext);
    const navigate = useNavigate();

    const {_id, title, author, image, price, newPrice, discount, qty} = card;

    const isInWishlist = wishlist.some((item)=> item._id === card._id);
    console.log("isInWishlist",isInWishlist);


    const handleQty = async(e, card) => {
        
        try {
            const encodedToken = localStorage.getItem("encodedToken");
             const response = await fetch(`/api/user/cart/${card._id}`, {
               method: 'POST',
               headers: {
                 "authorization": encodedToken
               },
               body: JSON.stringify({
                  action:  {type:e.target.value} 
              })
             });
             // saving the encodedToken in the localStorage
             const result = await response.json();
            //  console.log(result.cart);
             dataDispatch({
               type: "handleCart",
               payload: result.cart,
             })
            
           } catch (error) {
             console.log(error);
           }
         }

         const handleRemove = async(card)=>{
          try {
            const encodedToken = localStorage.getItem("encodedToken");
             const response = await fetch(`/api/user/cart/${card._id}`, {
               method: 'DELETE',
               headers: {
                 "authorization": encodedToken
               },
             });
             // saving the encodedToken in the localStorage
             const result = await response.json();
            //  console.log(result.cart);
             dataDispatch({
               type: "handleCart",
               payload: result.cart,
             })
            
           } catch (error) {
             console.log(error);
           }
      }

      const handleMoveToWishlist = async(card)=>{
        
        try {
          const encodedToken = localStorage.getItem("encodedToken");
           const response = await fetch(`/api/user/wishlist`, {
             method: 'POST',
             headers: {
               "authorization": encodedToken
             },
             body: JSON.stringify({
                product:card 
            })
           });
           // saving the encodedToken in the localStorage
           const result = await response.json();
         
           dataDispatch({
             type: "handleWishlist",
             payload: result.wishlist,
           })
          
         } catch (error) {
           console.log(error);
         }

         try {
          const encodedToken = localStorage.getItem("encodedToken");
           const response = await fetch(`/api/user/cart/${card._id}`, {
             method: 'DELETE',
             headers: {
               "authorization": encodedToken
             },
           });
           // saving the encodedToken in the localStorage
           const result = await response.json();
           console.log("move to wishlist cart result",result.cart);
           dataDispatch({
             type: "handleCart",
             payload: result.cart,
           })
          
         } catch (error) {
           console.log(error);
         }
       }
      
         
 
    
  return (
    <div className='card' key={index}>
     <div className="card-container">
        <div className="card-image">
            <img src={image} alt={title} />
        </div>
        <div className="card-details">
            <h3 className='cart-title'>{title}</h3>
            <h4 className='cart-author'>Author: {author}</h4>
            <div className='price-details'>
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
            <div className="card-quantity">
                {qty > 1 ? <button value={"decrement"} onClick={(e)=>handleQty(e, card)}>-</button> : <button>-</button>}
                <span>{qty}</span>
                <button value={"increment"} onClick={(e)=> handleQty(e, card)}>+</button>
            </div>
            <div className="card-btn">
                <button className='remove-btn' onClick={()=> handleRemove(card)}  >Remove</button>
                {
                  isInWishlist ? <button className='move-btn' onClick={()=>navigate('/wishlist')} >Go to wishlist</button>
                               : <button className='move-btn' onClick={()=>handleMoveToWishlist(card)} >Move to wishlist</button>
                }
            </div>
        </div>
     </div>
    </div>
  )
}


