

import React from 'react'
import { ProductItem } from './ProductItem'


export default function ProductList({products,handleDelete,handleComplete,handleEdit,handleSave}) {
    return (


        <ul className="list-group list-group-flush">
        { 
            // Componente donde recibe el todo , index,handleDelete, handleToggle
            // el todo representa cada todo y el i representa la posicion 
            products.map( (product,i) => (  
                <ProductItem
                    key={product.id} // el indice nunca se debe de usar como key mejor usar el id
                    product={product}
                    index={i}
                    handleDelete={handleDelete}
                    handleComplete={handleComplete} 
                    handleEdit={handleEdit}
                    handleSave={handleSave}          
                />
            ))
        
        }
        </ul>
    )
}
