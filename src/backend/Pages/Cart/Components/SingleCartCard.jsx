import React from 'react'


import "./singleCartCard.scss";

export const SingleCartCard = ({card}) => {
    const {title, author, image, price, newPrice, discount} = card;

    const handleplus = (e) => {
        console.log(e);
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
                <button>-</button>
                <span>1</span>
                <button onClick={(e)=> handleplus(e)}>+</button>
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


