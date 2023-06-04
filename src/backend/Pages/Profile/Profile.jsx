import React, { useEffect } from 'react'
import { useState, useContext } from 'react';
import {FaEdit} from "react-icons/fa";
import {MdDelete} from "react-icons/md";

import "./profile.scss";
import { DataContext } from '../../Contexts/data/dataContext';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';

const Profile = () => {
    const {dataDispatch, address} = useContext(DataContext);
    const {isLogIn, setIsLogIn} = useContext(AuthContext);

    console.log(address);
    
    const[isEdit, setIsEdit] = useState({isEdit: true, index:0});
    const [Add_name, setAddName] = useState("");
    const [Hno, setHno] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [Phone, setPhone] = useState("");
    const [Pin, setPin] = useState("");


   
    const [profile, setProfile] = useState("profile");
    const [editAddress, setEditAddress] = useState(false);

    const addEditAddress = (obj) =>{
        
        setEditAddress(true);
        console.log("obj",obj);
        if(isEdit){
                setIsEdit({index: obj.index});
                setIsEdit(obj);
                console.log("isEdit",isEdit);
                setAddName(address[obj.index].Add_name); 
                setHno(address[obj.index].Hno);
                setStreet(address[obj.index].street); 
                setCity(address[obj.index].city); setState(address[obj.index].state); setPhone(address[obj.index].Phone);
                setPin(address[obj.index].Pin);
               
        }
        else{
                setAddName(""); 
                setHno("");
                setStreet(""); 
                setCity(""); setState(""); setPhone(""); setPin("");
        }
     
    }
  


    const handleSubmitBtn = ()=>{
        if(isEdit.isEdit)
        {
            const newAddress = [...address];
            newAddress.splice(isEdit.index, 1, {Add_name: Add_name, Hno: Hno, street: street, city: city, state: state, Pin: Pin, Phone: Phone})
            setEditAddress(false);
            dataDispatch({
                type:"editAddress",
                payload: newAddress,
            })
        }
        else{
            const addr = {Add_name: Add_name, Hno: Hno, street: street, city: city, state: state, Pin: Pin, Phone: Phone};
            console.log("yha tk pahuch gye", isEdit.isEdit, addr);
            setEditAddress(false);
            
            dataDispatch({
                type:"add-address",
                payload : addr,
            })
            
        }
    }

    const handleLogout = ()=>{
        localStorage.removeItem("encodedToken");
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        localStorage.removeItem("name")
        setIsLogIn(false);
        dataDispatch({
          type:"logout",
          
        })
      }


  return (
    <div className='container'>
        {
            editAddress && <div className='address-container'>
            <h1> Address </h1>
            <label htmlFor="Add_name">Enter Name:</label>
              <input
                type="text" value={Add_name} id="Add_name" placeholder="Enter Name" onChange={(e) => setAddName(e.target.value)}
             />
              <label htmlFor="Hno">HouseNo:</label>
             <input
                type="text" value={Hno}  id="Hn" placeholder="House No" onChange={(e) => setHno(e.target.value)}
             />
              <label htmlFor="street">Street:</label>
             <input
                type="text" value={street} id="street" placeholder="Street" onChange={(e) => setStreet(e.target.value)}
             />
              <label htmlFor="city">City:</label>
             <input
                type="text" value={city}  id="city" placeholder="City" onChange={(e) => setCity(e.target.value)}
             />
              <label htmlFor="state">State:</label>
             <input
                type="text" value={state}  id="state" placeholder="State" onChange={(e) => setState(e.target.value)}
             />
              <label htmlFor="Pin">Pin:</label>
             <input
                type="text" value={Pin}  id="Pin" placeholder="Pin" onChange={(e) => setPin(e.target.value)}
             />
              <label htmlFor="Phone">Mobile:</label>
             <input
                type="text" value={Phone} id="Phone" placeholder="Phone No" onChange={(e) => setPhone(e.target.value)}
             />
             <button className='submitBtn' type='submit' onClick={()=>handleSubmitBtn()} >Submit</button>
            <button className='cancelBtn' onClick={()=>setEditAddress(false)}>Cancel</button>
            </div>
        }



      <div className="profile-main">
        <div className="button-section">
            <div className="profile" onClick={()=> setProfile("profile")} >
                <span>Profile</span>
            </div>
            <div className="address" onClick={()=> setProfile("address")}>
                <span>Adress</span>
            </div>
            <div className="logout" onClick={handleLogout}>
                <span>Logout</span>
            </div>
        </div>
        <div className="image-section">
            <div className="image-container" >
            <img src="https://i.ibb.co/d5tcPjt/profile.png" alt="logo" width="30px" height="30px"  />
            </div>
        </div>
        <div className="details-section">
           
            {
                profile === "profile" ? <div className="profile-container">
                    <div className="profile-section">
                        <p>Name: <span>{localStorage.getItem( "name")}</span></p>
                        <p>Email: <span>{localStorage.getItem("email")}</span></p>
                    </div>
                    </div> 
                
                : 
                    <div className="address-section">
                    <div className='add-address' >
                        <button onClick={()=> addEditAddress({isEdit:false, index:0}) } > + Add Address</button>
                    </div>
                
               {
                 address.map(({Add_name, Hno, street, city, state, Phone, Pin}, index)=> {
                    return(
                        
                        <div className='address'>
                            <div className='home'>
                            <p>{Add_name}</p>
                            <p>{Hno}, {street}</p>
                            <p><span>{city}</span>, <span>{state}</span></p>
                            <p>{Pin}, Ph:{Phone}</p>
                            </div>
                            <div className='btn-section'>
                                <div onClick={()=> addEditAddress({isEdit:true, index:index})} >
                                    <FaEdit/>
                                </div>
                                <div>
                                    <MdDelete/>
                                </div>
                            </div>
                        </div>
                    )
                })
               }
            </div>
            }
            
        </div>


      </div>
    </div>
  )
}

export default Profile
