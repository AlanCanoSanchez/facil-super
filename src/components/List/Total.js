
import React from 'react'

export const Total = ({products}) => {

    let total = 0.0;

    products.map( (product) => (
        (product.cos === '')
        ? total = total + 0.0
        : total = total + parseFloat(product.cos)
    ))   

    return (
        <div className="text-info-dark mb-3 mt-3">

            <h5> Total a pagar:  ${ total } </h5>

        </div>
    )
}
