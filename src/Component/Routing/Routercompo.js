import React, { useState } from 'react'
import {  NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import Home from '../body/Home'
import Laptop from '../body/Laptop'
import Mobile from '../body/Mobile'
import Footware from '../body/Footware'
import Signup from '../header/Signup'
import Login from '../header/Login'
// import All from '../body/All'

import '../header/navbar.css'
import Headphones from '../body/Headphones'
import SingleCart from '../singlecard/SingleCart'
import Cart from '../body/Cart'
import { useSelector } from 'react-redux'
import Sucess from '../body/Sucess'
import Cancel from '../body/Cancel'
import ProductSearch from '../body/SearchCompo'



function Routercompo() {
  const navi=useNavigate('/login')
  const [user,setuser]=useState(0)
  const [token,settoken]=useState(localStorage.getItem('user') || '')
  const {cart}=useSelector(item=>item.user)
  const userToggle=()=>{
  setuser(user+1)
  console.log(user)
  // const token=localStorage.getItem("user")
 }
 const handleLogout = () => {
  localStorage.removeItem('token');
  settoken('');
  console.log(token)
  navi('/login')
};
  return (
   <>
   
   <div className='nav'>
    <div className='nav_top'>
   <div> <h2 className='icon'>Shop4Home</h2></div>
   <div className='nav_top_right'>
    
   <div className='cart_navbar'><NavLink to='/cart'>
    <img className='cart_icon' src='data:image/png;base64,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' alt='cart_icon'></img>
    <p className='cart_count'>{cart.length}</p></NavLink></div>
    <div ><NavLink to='/searchproduct'>
      <div className='search_icon'></div>
      </NavLink></div>
    <div className='user_nav' onClick={userToggle}></div>
    {user%2!==0 ? token==='' ? <div className='user_flow' onClick={userToggle}><div><NavLink to='/login'>Login</NavLink></div><div><NavLink to='/signup' onClick={userToggle}>Signup</NavLink></div></div> :    <div className='user_flow' onClick={userToggle}><button onClick={handleLogout}>Logout</button></div> :""}
   </div>

    </div>
    
  <div className='nav_bot'>
  <div><NavLink to='/'>Home</NavLink></div>
   {/* <div><NavLink to='/all'>All</NavLink></div> */}
   <div><NavLink to='/laptop'>Laptop</NavLink></div>
   <div><NavLink to='/mobile'>Mobile</NavLink></div>
   <div><NavLink to='/footware'>Footware</NavLink></div>
   <div><NavLink to='/headphones'>HeadPhones</NavLink></div>
   
   
  </div>
   
    
   
   </div>

    <Routes>
    
        <Route path='/' element={<Home token={token}></Home>}></Route>
        {/* <Route path='/all' element={<All/>}/> */}
        <Route path='/laptop' element={<Laptop token={token}/>}/>
        <Route path='/mobile' element={<Mobile token={token}/>}/>
        <Route path='/footware' element={<Footware token={token}/>} />
        <Route path='/headphones' element={<Headphones token={token}/>} />
        <Route path='/login' element={<  Login settoken={settoken}/>} />
        <Route path='/signup' element={<Signup/>} />
       
        <Route path='/:product/:id' element={<SingleCart/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/sucess' element={<Sucess/>}/>
        <Route path='/cancel' element={<Cancel/>}/>
        <Route path='/searchproduct' element={<ProductSearch/>}/>

        {/* <Route path='*' element={<Signup/>} /> */}
     </Routes>
     
     

  
   </>
  )
}

export default Routercompo