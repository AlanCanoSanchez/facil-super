


export const productReducer = (state, action) => {


    switch(action.type) {
        case 'add':
          return [...state, action.payload];

        case 'delete':
            return state.filter(product => product.id !== action.payload);

        case 'complete':

            // un ciclo por cada elemento
          return state.map(product => 
                ( product.id === action.payload) // if
                    ? { ...product, done:!product.done} // resultado del if
                    : product  // el else
                );

        case 'edit':

            // un ciclo por cada elemento
            return state.map(product => 
                ( product.id === action.payload) // if
                    ? { ...product, donedit:!product.donedit, donesave:false} // resultado del if
                    : product  // el else
                );

        case 'save':

                    // un ciclo por cada elemento
            return state.map(product => 
                ( product.id === action.payload) // if
                    ? { ...product, donesave:true} // resultado del if
                     : product  // el else
                );


        default:
            return;

    }
}