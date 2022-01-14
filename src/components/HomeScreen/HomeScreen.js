

import React from 'react'
import {  useNavigate } from 'react-router-dom'
import { MyList } from '../List/MyList';
import { useContext } from 'react';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

import './home.css';

export const HomeScreen = () => {

    const { user, dispatch } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogout = () => {

        dispatch({type: types.logout});

        navigate('/login',{
            replace:true
        });
    }

    return (
        
        <>
        
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <div className="navbar-collapse">

                <span className='nav-item nav-link text-info text-color ' > WELCOME { user.name } </span>
                
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <button 
                        className="nav-item nav-link btn" 
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>

        </nav>

        <div>

            <MyList/>

        </div>
        
        
        </>
    )
}
