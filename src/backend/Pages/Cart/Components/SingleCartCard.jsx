import React from 'react'
import { useContext } from 'react';

import "./singleCartCard.scss";
import { DataContext } from '../../../Contexts/data/dataContext';

export const SingleCartCard = ({card}) => {

    const {dataDispatch, cart} = useContext(DataContext);


    const {id, title, author, image, price, newPrice, discount, qty} = card;

    const handleQty = async(e, card) => {
        
        try {
            const encodedToken = localStorage.getItem("encodedToken");
             const response = await fetch(`/api/user/cart/${card.id}`, {
               method: 'POST',
               headers: {
                 "authorization": encodedToken
               },
               body: JSON.stringify({
                  action:  {type:"increment"} 
              })
             });
             // saving the encodedToken in the localStorage
             const result = await response.json();
             console.log(result.cart);
             dataDispatch({
               type: "updateCart",
               payload: result.cart,
             })
            
           } catch (error) {
             console.log(error);
           }
         }
 
    
  return (
    <div className='card'>
     <div className="card-container">
        <div className="card-image">
            <img src={image} alt={title} />
        </div>
        <div className="card-details">
            <h3>{title}</h3>
            <h4>{author}</h4>
            <div className='card-price'>
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
                <button value={"decrement"} onClick={(e)=>handleQty(e, card)}>-</button>
                <span>{qty}</span>
                <button value={"increment"} onClick={(e)=> handleQty(e, card)}>+</button>
            </div>
        </div>
        
     </div>
     <div className="card-btn">
        <button>Remove</button>
        <button>Move to wishlist</button>
        </div>
    </div>
  )
}


