
import React from 'react'
import { AppRoute } from './routes/AppRoute'
import { AuthContext } from './auth/authContext'
import { useReducer } from 'react'
import { authReducer } from './auth/authReducer'
import { useEffect } from 'react'
//import { HomeScreen } from './components/HomeScreen/HomeScreen'
//import { LoginScreen } from './components/LoginScreen'

const init = () => {
    
    return JSON.parse(localStorage.getItem('user')) || { logged: false };
}

export const FacilSuperApp = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init)

    useEffect(() => {
        if (!user) {
            return 
        }
        localStorage.setItem('user',JSON.stringify(user));
    }, [user])


    return (
        <>
            <AuthContext.Provider value={{
                user,
                dispatch
            }}>

                <AppRoute/>

            </AuthContext.Provider>
        </>
    )
}
