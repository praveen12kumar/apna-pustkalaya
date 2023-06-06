import React from 'react'
import { createContext, useState } from 'react'

    export const AuthContext = createContext();

    export const AuthProvider = ({children})=>{
    const [isLogIn, setIsLogIn] = useState(localStorage.getItem("encodedToken" != undefined));
        return(
        <AuthContext.Provider value={{isLogIn, setIsLogIn}}>
            {children}
        </AuthContext.Provider>
        )
    }



