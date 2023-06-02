import React from 'react'

const SingleWishlistCard = ({card, index}) => {

    const handleRemove = (_id)=>{
        
    }

    const {_id, title, author, image} = card;
  return (
    <div className='card' key={index}>
     <div className="card-container">
        <div className="card-image">
            <img src={image} alt={title} />
        </div>
        <div className="card-details">
            <h3 className='card-title'>{title}</h3>
            <h4 className='card-author'>Author: {author}</h4>
            <div className="card-btn">
                <button className='remove-btn' onClick={()=> handleRemove(_id)}  >Remove</button>
                <button className='move-btn'>Move to Cart</button>
            </div>
        </div>
     </div>
    </div>
  )
}

export default SingleWishlistCard
