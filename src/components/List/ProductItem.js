

import React from 'react'
import { useForm } from '../../hooks/useForm';

import './MyList.css';

export const ProductItem = ({product,index,handleDelete,handleComplete,handleEdit,handleSave}) => {


    const [ {nombre,cantidad,costo} , HandleInputChange, reset ] =  useForm({
        nombre:product.nam,
        cantidad:product.cant,
        costo:product.cos
    });

    const handleSubmit = (e) => {
        // evistar el refresh del formulario
        e.preventDefault();
    
        // Para que no nos deje crear un producto sin nada, el .trim() sirve para quitar espacios
        if (nombre.trim().length <= 1 ) {
            return;
        }
        
        
        product.nam = nombre;
        product.cant = cantidad;
        product.cos = costo;

    }



    return (
        <li
            key={product.id}
            className="list-group-item fond-product"
        >

                {
                    ( product.donedit &&

                        <div className="text-black">

                            <form onSubmit={handleSubmit}>

                                <div className="form-outline mb-4">
                                    <input
                                        type="text"
                                        name="nombre"
                                        className="form-control form-control-lg "
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
                                        className="form-control form-control-lg"
                                        value={costo}
                                        onChange={ HandleInputChange }
                                    />
                                    <label className="form-label" >Cost</label> 
                                </div>

                                <div className="form-outline mb-4">
                                    <button
                                        className="btn btn-dark "
                                        onClick={() => handleSave(product.id)}
                                    >
                                        Save
                                    </button>
                                </div>

                            </form>


                        </div>

                    )
                }

                {
                    (product.donesave &&
                        

                        <h5 className="mb-4"> Changes saved!...Please select the edit button to exit</h5>    
                                            
                    )

                }

            <p className="text-info-center font-product-product"> 
                    <strong>

                        { index + 1}. { product.nam } 
                    </strong>
                    
            </p>

            <p  className="text-info-center font-product-product"> 
                    <strong> 
                    Amount: { product.cant }
                    </strong>
            </p>

            {
                    (product.done  && 

                        <span className="complete"> <strong> COMPLETE </strong> </span>
                    )
                    
            }

            <p  className="text-end font-product-cost">
                    Cost: ${ product.cos }
            </p>


            <button
                className="btn btn-danger m-2"   // Establece el boton rojo //
                onClick={() => handleDelete(product.id)} // Para pasar una funcion con parametros debemos de antes hacer una funcion
            >
                Delete
            </button>

            <button
                className="btn btn-primary button-complete m-2"
                onClick={() => handleComplete(product.id)}
            >
                Complete
            </button>

            <button 
                className="btn btn-dark m-2"
                onClick={() => handleEdit(product.id)}
            >
                Edit
            </button>

        </li>
    )
}
