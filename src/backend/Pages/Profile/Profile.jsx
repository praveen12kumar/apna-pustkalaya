import React, { useEffect } from 'react'
import { useState, useContext } from 'react';
import {FaEdit} from "react-icons/fa";
import {MdDelete} from "react-icons/md";

import "./profile.scss";
import { DataContext } from '../../Contexts/data/dataContext';

const Profile = () => {
    const {users} = useContext(DataContext);
    
    const[isEdit, setIsEdit] = useState(false);
    const [Add_name, setAddName] = useState("");
    const [Hno, setHno] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [Phone, setPhone] = useState("");
    const [Pin, setPin] = useState("");


    const [user, setUser] = useState({
        name: "",
        email: "",
        address:[{
            Add_name: "",
            Hno: "",
            street:"",
            city: "",
            state: "",
            Phone:"",
            Pin: ""
        }]})
    const [profile, setProfile] = useState("profile");
    

    useEffect(()=>{
        setUser({
            name: "John",
            email: "john@gmail.com",
            address:[{
                Add_name: "John",
                Hno: "123 Main",
                street:"Main",
                city: "Delhi",
                state: "Delhi",
                Phone:"813022540",
                Pin: "204262"
            },
            {
                Add_name: "John",
                Hno: "123 Main",
                street:"Main",
                city: "Delhi",
                state: "Delhi",
                Phone:"813022540",
                Pin: "204262"
            }, 
        ]
        })

    },[])


    const handleSubmitBtn = (Add_name, Hno, street, city, state, Pin, Phone, isEdit)=>{
        if(isEdit)
        {

        }
        else{
            
        }
    }


  return (
    <div className='container'>
        <div>
        <label  htmlFor=""> Address </label>
          <input
            type="text" value={Add_name} id="Add_name" placeholder="Enter Name" onChange={(e) => setAddName(e.target.value)}
         />
         <input
            type="text" value={Hno}  id="Hn" placeholder="House No" onChange={(e) => setHno(e.target.value)}
         />
         <input
            type="text" value={street} id="street" placeholder="Street" onChange={(e) => setStreet(e.target.value)}
         />
         <input
            type="text" value={city}  id="city" placeholder="City" onChange={(e) => setCity(e.target.value)}
         />
         <input
            type="text" value={state}  id="state" placeholder="State" onChange={(e) => setState(e.target.value)}
         />
         <input
            type="text" value={Pin}  id="Pin" placeholder="Pin" onChange={(e) => setPin(e.target.value)}
         />
         <input
            type="text" value={Phone} id="Phone" placeholder="Phone No" onChange={(e) => setPhone(e.target.value)}
         />
         <button type='submit' onClick={()=>handleSubmitBtn(Add_name, Hno, street, city, state, Pin, Phone, isEdit)} >Submit</button>
        </div>



      <div className="profile-main">
        <div className="button-section">
            <div className="profile" onClick={()=> setProfile("profile")} >
                <span>Profile</span>
            </div>
            <div className="address" onClick={()=> setProfile("address")}>
                <span>Adress</span>
            </div>
            <div className="logout">
                <span>Logout</span>
            </div>
        </div>
        <div className="image-section">
            <div className="image-container" >
            <img src="https://i.ibb.co/d5tcPjt/profile.png" alt="logo" width="30px" height="30px"  />
            </div>
        </div>
        <div className="details-section">
            {(()=>
            {
                if(profile === "profile")  { return( <div className="profile-container">
                    <div className="profile-section">
                        <p>Name: <span>{user.name}</span></p>
                        <p>Email: <span>{user.email}</span></p>
                    </div>
                </div> 
                )}
                elseif( profile === "address")   {return(
                    <div className="address-section">
                {console.log(user.address)}
               {
                 user.address.map(({Add_name, Hno, street, city, state, Phone, Pin})=> {
                    return(
                        
                        <div className='address'>
                            <div className='home'>
                            <p>{Add_name}</p>
                            <p>{Hno}, {street}</p>
                            <p><span>{city}</span>, <span>{state}</span></p>
                            <p>{Pin}, Ph:{Phone}</p>
                            </div>
                            <div className='btn-section'>
                                <div >
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
            )}
                
            }
        )}
            
        </div>


      </div>
    </div>
  )
}

export default Profile
