import React from 'react'
import { createContext, useState } from 'react'

    export const AuthContext = createContext();

    export const AuthProvider = ({children})=>{
    const [isLogIn, setIsLogIn] = useState(false);
        return(
        <AuthContext.Provider value={{isLogIn, setIsLogIn, item:4}}>
            {children}
        </AuthContext.Provider>
        )
    }



