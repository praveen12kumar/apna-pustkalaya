import React from 'react'
import { useContext, useState } from 'react'
import { DataContext } from '../../Contexts/data/dataContext'


export const Cart = () => {

    const {cart} = useContext(DataContext);
    const [cartData, setCartData] = useState(cart);
    

  return (
    <div className='cart-container'>
        <div><h1>Cart</h1><span>(cartData.length)</span></div>
        <div className="main-container">
            <div className="cart-cards">
            
            </div>
            <div className="price-section">
            
            </div>    
        </div>    
    </div>
  )
}

 




