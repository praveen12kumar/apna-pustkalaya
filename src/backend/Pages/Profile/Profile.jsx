import React, { useEffect } from 'react'
import { useState } from 'react';
import {FaEdit} from "react-icons/fa";
import {MdDelete} from "react-icons/md";

import "./profile.scss";

const Profile = () => {
    const [user, setUser] = useState({})
    const [profile, setProfile] = useState(true);
    


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
                PhoneNo:"813022540",
                Pin: "204262"
            },
            
        ]
        })
    
    },[])


  return (
    <div className='container'>
      <div className="profile-main">
        <div className="button-section">
            <div className="profile">
                <span>Profile</span>
            </div>
            <div className="address">
                <span>Adress</span>
            </div>
            <div className="logout">
                <span>Logout</span>
            </div>
        </div>
        <div className="image-section">
            <div className="image-container">
            <img src="https://i.ibb.co/d5tcPjt/profile.png" alt="logo" width="30px" height="30px" />
            </div>
        </div>
        <div className="details-section">
            <div className="profile">

            </div>
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
                                <div>
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
        </div>


      </div>
    </div>
  )
}

export default Profile
