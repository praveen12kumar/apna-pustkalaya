import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { SingleCartCard } from './Components/SingleCartCard'
import { EmptyCart } from './Components/EmptyCart';
import "./cart.scss";
import { DataContext } from '../../Contexts/data/dataContext';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';

export const Cart = () => {
const {isLogIn} = useContext(AuthContext);
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

  console.log("Islog IN CART", isLogIn);   

  return (
    cart.length >= 1 ? (
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
              <h2>Price Details</h2>
            {
              cart.map(({_id, title, price, qty})=>{
                return(
                  <div className="price" key={_id}>
                    <p className='title1'>  {title}{" "}({qty}) </p>
                    <p className='amount'>{`₹ ${price * qty}`}</p>
                  </div>
                )
              })
            }
            <div className="discount">
              <p className='dis'>Discount </p>
                
              <p className='number'>-
                {cart.reduce((total, acc)=> total + (acc.price - acc.newPrice)*(acc.qty) , 0)}
              </p>
            </div>
            <div className="total-price">
              <p className='dis'>Total Price</p>
              <p className='number'> ₹{' '}
              {
                cart.reduce((total, acc)=> total + acc.newPrice * acc.qty, 0)
              }
              </p>
            </div>

            <div className="checkout">
              <button className='checkBtn'>Checkout</button>  
            </div> 

            </div>

               
        </div>    
    </div>
    ) : (
      <EmptyCart/>
    )
  )
}

 




