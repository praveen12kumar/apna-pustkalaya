import React from 'react'
import { useContext, useState, useEffect } from 'react'

import { SingleCartCard } from './Components/SingleCartCard'

import "./cart.scss";
import { DataContext } from '../../Contexts/data/dataContext';


export const Cart = () => {
const {cart, setCart} = useContext(DataContext);
  
  const getData = async() =>{
    const token = localStorage.getItem("encodedToken");
    
    try{
        const response = await fetch("/api/user/cart",{
          method: "GET",
          headers: {
            "authorization": token,
          }
        })
        const result =  await response.json();
        console.log(result.cart)
        setCart(result.cart);
    }
    catch(err){
        console.log(err);
    }
  }
  console.log("cart", cart);
  
  useEffect(()=>{
    getData();
  },[]);


  return (
    <div className='cart-container'>
        <div className="cart-title" ><p>Cart <span>{cart.length}</span></p></div>
        <div className="cart-main-container">
            <div className="cart-cards">
            {
              cart.map((card)=>(
                  <SingleCartCard card={card}/>
              ) )
            }
            </div>
            <div className="price-section">
            <h1>Price section</h1>
            </div>    
        </div>    
    </div>
  )
}

 




