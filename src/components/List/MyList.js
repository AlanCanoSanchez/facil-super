

import React from 'react'
import { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { useReducer } from 'react';
import { productReducer } from './productReducer';
import ProductList from './ProductList';
import { useEffect } from 'react';

import './MyList.css';
import { Total } from './Total';

const init = () => {
    return  JSON.parse(localStorage.getItem('products'))  || [];
}

export const MyList = () => {


    const [products, dispatch] = useReducer(productReducer, [], init);


    const [ pushProduct, setpushProduct] = useState(false);

    const [ pushTotal, setpushTotal] = useState(false);

    const [{nombre,cantidad,costo},HandleInputChange,reset] =  useForm({
        nombre:'',
        cantidad:'',
        costo:'', 
    });

    useEffect(() => {
        localStorage.setItem('products',JSON.stringify(products));
    }, [products]);

    const handleSubmit = (e) => {

            // evistar el refresh del formulario
            e.preventDefault();
    
            // Para que no nos deje crear un producto sin nada, el .trim() sirve para quitar espacios
            if (nombre.trim().length <= 1 ) {
                return;
            }
            
            
            const newProduct = {
                id: new Date().getTime(),
                nam: nombre,
                cant: cantidad,
                cos: costo,
                done: false,
                donedit: false,
                donesave: false,
            };
    
            const action = {
                type:'add',
                payload: newProduct
            }
    
            dispatch(action);
            reset();
    }

    const handleDelete = (ProductId) => {

        const action = {
            type:'delete',
            payload: ProductId
        }

        dispatch(action);

    }

    const handleComplete = (ProductId) => {

        const action = {
            type:'complete',
            payload: ProductId
        }

        dispatch(action);
    }

    const handleEdit = (ProductId) => {

        const action = {
            type:'edit',
            payload: ProductId
        }

        dispatch(action);
    }

    const handleSave = (ProductId) => {

        const action = {
            type:'save',
            payload : ProductId
        }

        dispatch(action);
    }

    return (
        
        <div className="my-list">
        
            <h1>My List</h1>  

            <hr/>

            <div className="row">

                <div className="col-7">

                    <ProductList
                        products={products}
                        handleDelete={handleDelete}
                        handleComplete={handleComplete}
                        handleEdit={handleEdit}
                        handleSave={handleSave}                    
                    />


                </div>


                <div className="col-5">

                    <button 
                        className="btn btn-dark"
                        onClick={() => setpushProduct(!pushProduct)}
                    >
                        New Product +
                    </button>

                    { 
                        (pushProduct && 
                        
                        <div className="card-body p-2 p-lg-5 text-black">

                            <form onSubmit={handleSubmit} >

                                <div className="form-outline mb-4">

                                    <input 
                                        type="text"
                                        name="nombre"
                                        className="form-control form-control-lg"
                                        value={nombre}
                                        onChange={ HandleInputChange }
                                    />

                                    <label className="form-label" >Name</label>


                                </div>
                
                                <div className="form-outline mb-4">

                                    <input 
                                        type="text"
                                        name="cantidad"
                                        className="form-control form-control-lg "
                                        value={cantidad}
                                        onChange={ HandleInputChange }
                                    />

                                    <label className="form-label" >Amount</label>


                                </div>


                                <div className="form-outline mb-4">

                                    <input 
                                        type="number"
                                        name="costo"
                                        className="form-control form-control-lg "
                                        placeholder="$"
                                        value={costo}
                                        onChange={ HandleInputChange }
                                    />

                                    <label className="form-label" >Cost</label>

                                </div>
                
                                <button type="submit" className="btn btn-dark btn-lg btn-block button-submit">
                                    Submit
                                </button>
                
                            </form>
            
            
                        </div>
                    )}

                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end">

                    {
                        (pushTotal)
                        && <Total
                            key={products.id}
                            products={products}
                        />
            
                    }

                    <button 
                        className="btn btn-dark btn-lg"
                        onClick={() => setpushTotal(!pushTotal)}
                    >
                        Total
                    </button>


                </div>


            </div>
            
            
        
        </div>
        
    )
}
