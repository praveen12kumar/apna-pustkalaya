import React from 'react'
import { useContext } from 'react';
import { DataContext } from '../../../Contexts/data/dataContext';
import { useNavigate } from 'react-router-dom';
import "./singleWishlistCard.scss";


const SingleWishlistCard = ({card, index}) => {

  const {cart, wishlist, dataDispatch} = useContext(DataContext)
  const navigate = useNavigate();

  const isInCart = cart.some((item)=> item._id === card._id);
  


    const handleRemove = async (card)=>{
      try {
        const encodedToken = localStorage.getItem("encodedToken");
         const response = await fetch(`/api/user/wishlist/${card._id}`, {
           method: 'DELETE',
           headers: {
             "authorization": encodedToken
           },
         });
         // saving the encodedToken in the localStorage
         const result = await response.json();
         console.log(result.cart);
         dataDispatch({
           type: "handleWishlist",
           payload: result.wishlist,
         })
        
       } catch (error) {
         console.log(error);
       }
    }

    const handleMoveToCart = async (card) =>{
      try {
        const encodedToken = localStorage.getItem("encodedToken");
         const response = await fetch(`/api/user/cart`, {
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
           type: "handleCart",
           payload: result.cart,
         })
        
       } catch (error) {
         console.log(error);
       }

       try {
        const encodedToken = localStorage.getItem("encodedToken");
         const response = await fetch(`/api/user/wishlist/${card._id}`, {
           method: 'DELETE',
           headers: {
             "authorization": encodedToken
           },
         });
         // saving the encodedToken in the localStorage
         const result = await response.json();
         //console.log("move to wishlist cart result",result.cart);
         dataDispatch({
           type: "handleWishlist",
           payload: result.wishlist,
         })
        
       } catch (error) {
         console.log(error);
       }


    }








    const {_id, title, author, image} = card;
  return (
    <div className='wish-card' key={_id}>
     <div className="wish-card-container">
        <div className="wish-card-image">
            <img src={image} alt={title} />
        </div>
        <div className="wish-card-details">
            <h3 className='wish-card-title'>{title}</h3>
            <h4 className='wish-card-author'>Author: <span>{author}</span> </h4>
            <div className="wish-card-btn">
                <button className='wish-remove-btn' onClick={()=> handleRemove(card)}  >Remove</button>
                {
                  isInCart ? <button className='wish-move-btn' onClick={()=> navigate('/cart')} >Go to Cart</button>
                           : <button className='wish-move-btn' onClick={()=>handleMoveToCart(card)} >Move to Cart</button>
                }
            </div>
        </div>
     </div>
    </div>
  )
}

export default SingleWishlistCard
