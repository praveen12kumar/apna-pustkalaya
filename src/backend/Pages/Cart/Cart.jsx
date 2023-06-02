import React from 'react'
import { useContext, useState, useEffect } from 'react'

import { SingleCartCard } from './Components/SingleCartCard'

import "./cart.scss";
import { DataContext } from '../../Contexts/data/dataContext';


export const Cart = () => {
const {cart, dataDispatch} = useContext(DataContext);
  
  const getData = async() =>{
    const token = localStorage.getItem("encodedToken");
    console.log(cart);
    try{
        const response = await fetch("/api/user/cart",{
          method: "GET",
          headers: {
            "authorization": token,
          }
        })
        const result =  await response.json();
        console.log(result);
        dataDispatch({
          type:"updateCart",
          payload: result.cart
        })
    }
    catch(err){
        console.log(err);
    }
  }
  
  useEffect(()=>{
    getData();
  },[]);


  return (
    <div className='cart-container'>
        <div className="cart-title" ><p>Cart <span>{cart.length}</span></p></div>
        <div className="cart-main-container">
            <div className="cart-cards">
            {
              cart.map((card, index)=>(
                  <SingleCartCard card={card} index={index}/>
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

 




