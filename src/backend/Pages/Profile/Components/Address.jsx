// import React from 'react'
// import {useState} from "react"
// const Address = () => {

//     const[isEdit, setIsEdit] = useState(false);
//     const [Add_name, setAddName] = useState("");
//     const [Hno, setHno] = useState("");
//     const [street, setStreet] = useState("");
//     const [city, setCity] = useState("");
//     const [state, setState] = useState("");
//     const [Phone, setPhone] = useState("");
//     const [Pin, setPin] = useState("");

//     const handleSubmitBtn = ()=>{

//     }

//   return (
//     <div className='address-container'>
//             <label  htmlFor=""> Address </label>
//               <input
//                 type="text" value={Add_name} id="Add_name" placeholder="Enter Name" onChange={(e) => setAddName(e.target.value)}
//              />
//              <input
//                 type="text" value={Hno}  id="Hn" placeholder="House No" onChange={(e) => setHno(e.target.value)}
//              />
//              <input
//                 type="text" value={street} id="street" placeholder="Street" onChange={(e) => setStreet(e.target.value)}
//              />
//              <input
//                 type="text" value={city}  id="city" placeholder="City" onChange={(e) => setCity(e.target.value)}
//              />
//              <input
//                 type="text" value={state}  id="state" placeholder="State" onChange={(e) => setState(e.target.value)}
//              />
//              <input
//                 type="text" value={Pin}  id="Pin" placeholder="Pin" onChange={(e) => setPin(e.target.value)}
//              />
//              <input
//                 type="text" value={Phone} id="Phone" placeholder="Phone No" onChange={(e) => setPhone(e.target.value)}
//              />
//              <button type='submit' onClick={()=>handleSubmitBtn(Add_name, Hno, street, city, state, Pin, Phone, isEdit)} >Submit</button>
//             </div>
//   )
// }

// export default Address
