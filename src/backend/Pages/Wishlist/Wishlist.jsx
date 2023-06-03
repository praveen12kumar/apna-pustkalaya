import React from 'react'
import { useContext, useState } from 'react'
import { DataContext } from '../../Contexts/data/dataContext'
import {EmptyWishlist} from "./Components/EmptyWishlist"
import SingleWishlistCard from "./Components/SingleWishlistCard"
export const Wishlist = () => {

    const {wishlist} = useContext(DataContext);

    console.log("wishList Main",wishlist);
  
    return (
    wishlist.length >= 1 ? (
        <div className='wishlist-container'>
          <div className="wishlist-title" ><p>Wishlist <span>{wishlist.length}</span></p></div>
          <div className="wishlist-main-container">
              <div className="wishlist-cards">
              {
                wishlist.map((card, index)=>(
                    <SingleWishlistCard card={card} index={index}/>
                ) )
              }
              </div>   
          </div>    
      </div>
      ) : (
        <EmptyWishlist/>
      )
    )
  
      }


