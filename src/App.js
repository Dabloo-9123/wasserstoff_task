
// import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Component/header/Navbar';
// import FooterComp from './Component/footer/FooterComp';
import { BrowserRouter } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';


function App() {

  return (
  <>
 <BrowserRouter>
 
 <Navbar/>

 </BrowserRouter>
 


  </>
  );
}

export default App;






// const initialState = {
//   products:Data,
//   cart: [],
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       const existingItemIndex = state.cart.findIndex(item => item.id === action.product.id);
//       if (existingItemIndex !== -1) {
//         const updatedCart = [...state.cart];
//         updatedCart[existingItemIndex].quantity++;
//         return { ...state, cart: updatedCart };
//       } else {
//         return { ...state, cart: [...state.cart, { ...action.product, quantity: 1 }] };
//       }

//     case 'REMOVE_FROM_CART':
//       return { ...state, cart: state.cart.filter(item => item.id !== action.id) };

//     case 'INCREMENT':
//       return {
//         ...state,
//         cart: state.cart.map(item =>
//           item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
//         ),
//       };

//     case 'DECREMENT':
//       return {
//         ...state,
//         cart: state.cart.map(item =>
//           item.id === action.id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
//         ),
//       };

//     default:
//       return state;
//   }
// };

// const App = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <div>
//         <h2>Product List</h2>
//         {state.products.map(product => (
//           <Product key={product.id} product={product} dispatch={dispatch} />
//         ))}
//       </div>
//       <Cart cart={state.cart} dispatch={dispatch} />
//     </div>
//   );
// };

// export default App;