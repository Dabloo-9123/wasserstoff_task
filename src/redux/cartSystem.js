

import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cart:[],
    totalAmount:0
}
const cartSystem=createSlice({
    name:"user",
    initialState,
    reducers:{
        AddCart:(state,action)=>{
            state.cart.push(action.payload)
            // const find= state.cart.findIndex(item => item.id===action.payload.id)
            // if(find>=0){
            //   state.cart[find].quantity+=1
            // }
            // else{
            //     const temp={...action.payload,quantity:1}
            //     state.cart.push(temp)
            // }
            
           
        },
        addToCart: (state, action) => {
            const { id, name, price, quantity, image } = action.payload;
            const existingItem = state.cart.find(item => item.id === id);
      
            if (existingItem) {
              existingItem.quantity += quantity;
            } else {
              state.cart.push({ id, name, price, quantity, image });
            }
      
            state.totalAmount += price * quantity;
          },
      
          DeleteCart: (state, action) => {
            const { id, quantity, price } = action.payload;
            const existingItem = state.cart.find(item => item.id === id);
      
            if (existingItem) {
              existingItem.quantity -= quantity;
      
              if (existingItem.quantity <= 0) {
                state.cart = state.cart.filter(item => item.id !== id);
              }
      
              state.totalAmount -= price * quantity;
            }
          },
        increaseQuantity: (state, action) => {
            const { id, price } = action.payload;
            const existingItem = state.cart.find(item => item.id === id);
      
            if (existingItem) {
              existingItem.quantity += 1;
              state.totalAmount += price;
            }
        },
       decreaseQuantity: (state, action) => {
        const { id, price } = action.payload;
        const existingItem = state.cart.find(item => item.id === id);
  
        if (existingItem) {
          existingItem.quantity -= 1;
  
          if (existingItem.quantity <= 0) {
            state.cart = state.cart.filter(item => item.id !== id);
          }
  
          state.totalAmount -= price;
        }
      },
    },
             
})

export const {AddCart,DeleteCart,increaseQuantity,decreaseQuantity,addToCart}=cartSystem.actions
export default cartSystem.reducer