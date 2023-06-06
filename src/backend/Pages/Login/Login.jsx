import React from "react";

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../Contexts/data/dataContext";
import "./login.scss";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";

export const Login = () => {

  const {dataDispatch} = useContext(DataContext);
  const {isLogIn, setIsLogIn} = useContext(AuthContext);
  
  const navigate = useNavigate();

  const [email, setEmail] = useState("adarshbalika@gmail.com");
  const [password, setPassword] = useState("adarshbalika");
  console.log("checkLogin1", isLogIn);
  
  const handleSubmit = async (e) => {

    e.preventDefault();
    try {
        const creds = {
          email: email,
          password: password,
        } 
        console.log(creds);
        const response = await fetch(`/api/auth/login`, {
          method: 'POST',
          body: JSON.stringify(creds)
        });
        // saving the encodedToken in the localStorage
        const result = await response.json();
        if(result.encodedToken !== undefined){
          setIsLogIn(true);
        }
        console.log("checkLogin2", isLogIn);
        localStorage.setItem("encodedToken", result.encodedToken);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        localStorage.setItem("name", result.foundUser.firstName);
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

 

  console.log("checkLogin3", isLogIn);
  

  return (
    <div className="Container">
      <div className="loginSection">
        <h1>Log In</h1>
        <form action="" >
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
            <button className="btn btn1" onClick={(e) => handleSubmit(e)} type="button">Log In</button>
            {/* <button className="btn btn2" type="submit" onClick={(e)=>loginAsGuest(e)} >Log In as Guest</button> */}
          </div>
        </form>
        <button onClick={()=> navigate('../register')}>Don't have account? Register here</button>
      </div>

     
    </div>
  );
};
