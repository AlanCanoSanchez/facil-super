

import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomeScreen } from '../components/HomeScreen/HomeScreen';
import { LoginScreen } from '../components/Login/LoginScreen';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRoute = () => {
    return (

        <BrowserRouter>
          
            <Routes>

                <Route path="/login" element={
                    <PublicRoute>
                        <LoginScreen/>
                    </PublicRoute>
                    } 
                />         


                <Route path="/home" element={
                    <PrivateRoute>
                        <HomeScreen/>
                    </PrivateRoute>
                    }
                />

                <Route path="/" element={
                    <PublicRoute>
                        <LoginScreen/>
                    </PublicRoute>
                    } 
                />    


            </Routes>
          
          
        </BrowserRouter>  
    )
}
