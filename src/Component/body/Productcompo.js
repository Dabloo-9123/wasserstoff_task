// import React from 'react'
// import { useDispatch } from 'react-redux'
// import { addToCart } from '../redux/slice/Slice'

// function Productcompo({product}) {
//     const dispatch=useDispatch()

//     const handleAddtoCart=()=>{
//         console.log("product added");
//         console.log( dispatch(addToCart(product)));
//     }
//   return (
//   <>
//   <h1>{product.name}</h1>
//   <p>${product.price}</p>
//   <button onClick={handleAddtoCart}>Add to cart</button>
//   </>
//   )
// }

// export default Productcompo

import React from 'react';

const Product = ({ product, dispatch }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={() => dispatch({ type: 'ADD_TO_CART', product })}>Add to Cart</button>
    </div>
  );
};

export default Product;