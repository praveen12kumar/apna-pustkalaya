import React from "react";
import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../Contexts/data/dataContext";
import "./login.scss";

export const Login = () => {

  const {dataDispatch, cartLength, wishlistLength,  cart, wishlist, isLoggedIn} = useContext(DataContext);
  
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const creds = {
          email: email,
          password: password,
        } 
        const response = await fetch(`/api/auth/login`, {
          method: 'POST',
          body: JSON.stringify(creds)
        });
        // saving the encodedToken in the localStorage
        const result = await response.json();
        localStorage.setItem("encodedToken", result.encodedToken);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
      } catch (error) {
        console.log(error);
      }
      try{
        const response = await fetch("/api/user/cart",{
          method: "GET",
          headers: {
            "authorization": localStorage.getItem("encodedToken"),
          }
        })
        const result =  await response.json();
        dataDispatch({
          type:"fetch_cart",
          payload: result.cart,
        })
    }
      catch(err){
        console.log(err);
    }
  };


  const handleLogout = ()=>{
    localStorage.removeItem("encodedToken");
    localStorage.removeItem("email", email);
    localStorage.removeItem("password", password);
   
    dataDispatch({
      type:"logout",
      
    })
  }

  return (
    <div className="Container">
      <div className="loginSection">
        <h1>Log In</h1>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <label  htmlFor="email">
            Email
          </label>
          <input
            type="email"
            value={email}
            name="email"
            id="email"
            placeholder="youremail@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">
            Password
          </label>
          <input
            type="password"
            value={password}
            name="password"
            id="password"
            placeholder="***********"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="btns">
            <button className="btn btn1" type="submit">Log In</button>
            <button className="btn btn2" type="submit">Log In as Guest</button>
          </div>
        </form>
        <button onClick={()=> navigate('../register')}>Don't have account? Register here</button>
      </div>

      <button onClick={handleLogout} >Logout</button>
    </div>
  );
};
