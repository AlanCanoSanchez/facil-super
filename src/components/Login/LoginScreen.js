
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useContext } from 'react';
import { types } from '../../types/types';
import { AuthContext } from '../../auth/authContext';
import { useState } from 'react';
import { useEffect } from 'react';


import './LoginScreen.css';

export const LoginScreen = () => {

    const { dispatch } = useContext(AuthContext);

    
    const [validForm, setvalidForm] = useState(false);

    const image = '/assets/supermarket-loginScreen.jpg';

    const [ formValues, HandleInputChange] = useForm({
        email:'',
        name:''
    })

    const { name,email } = formValues;

    const navigate = useNavigate();

    const handleLogin = (e) => {

        e.preventDefault();

        if ( name !== '' && email !== '') {
            
            const action = {
                type: types.login,
                payload: {
                    name: name,
                    email: email
                } 
            }
    
            dispatch(action);
    
            navigate('/home',{
                replace:true
            });
            
        } else {
            
            setvalidForm(!validForm);
        }

    }

    useEffect(() => {

    }, [formValues])
    
    return (

        <section className="vh-100 classname-color">

            <div className="container py-5 h-100">

                <div className="row d-flex justify-content-center align-items-center h-100">

                    <div className="container-fluid">

                        <div className="card card-border" >

                            <div className="row g-0">

                                <div className="col-6 d-none d-md-block">
                                    <img
                                    src={image}
                                    alt="login Form"
                                    className="img-fluid img-border" 
                                    />
                                </div>

                                <div className="col-5 d-flex align-items-center">

                                    <div className="card-body p-2 p-lg-5 text-black">

                                        <form onSubmit={handleLogin}>

                                            <h1 className="fw-dark mb-5 pb-3 text-center "> Login </h1>

                                            <div className="form-outline mb-4">
                                                <input 
                                                    type="email"  
                                                    className="form-control form-control-lg" 
                                                    name="email"
                                                    value={email}
                                                    onChange={HandleInputChange}
                                                />
                                                <label className="form-label" >Email address</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input 
                                                    type="text"
                                                    className="form-control form-control-lg" 
                                                    name="name"
                                                    value={name}
                                                    onChange={HandleInputChange}
                                                />
                                                <label className="form-label" >Username</label>
                                            </div>

                                            <div className="form-group mb-4">  

                                                <button 
                                                    type="submit" 
                                                    className="btn btn-dark btn-lg btn-block boton"
                                                >
                                                    Sign
                                                </button>

                                            </div> 

                                        </form>

                                        {
                                            (validForm && 
                                                <p className="text-danger"> Enter all fields </p>    
                                            )
                                        }

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    )
}
