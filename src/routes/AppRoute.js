

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

                <Route path="/facil-super/login" element={
                    <PublicRoute>
                        <LoginScreen/>
                    </PublicRoute>
                    } 
                />         


                <Route path="/facil-super/home" element={
                    <PrivateRoute>
                        <HomeScreen/>
                    </PrivateRoute>
                    }
                />

                <Route path="/facil-super/" element={
                    <PublicRoute>
                        <LoginScreen/>
                    </PublicRoute>
                    } 
                />    


            </Routes>
          
          
        </BrowserRouter>  
    )
}
