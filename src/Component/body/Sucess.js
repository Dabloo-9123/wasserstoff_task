import React from 'react'
import './succes.css'
import { useNavigate } from 'react-router-dom'


function Sucess() {
  const navi=useNavigate()
  return (
   <>
    <div class="confirmation-container">
    <div class="confirmation-icon">&#10004;</div>
    <h2>Order Confirmed!</h2>
    <p>Your order has been successfully placed.</p>
    <p>Thank you for shopping with us!</p>
   <button class="button" onClick={()=>navi('/')}>Continue Shopping</button>
  </div>
   
   </>
  
  )
}

export default Sucess