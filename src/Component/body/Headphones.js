import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'
import {  addToCart } from '../../redux/cartSystem';
import FooterComp from '../footer/FooterComp';
import { toast } from 'react-toastify';


function Headphones({token}) {
  const[data,setdata]=useState('');
  const [Loader,setLoader]=useState(true)
  const dispatch = useDispatch()
  const navi=useNavigate()

  useEffect(()=>{
     axios.get('https://ecommerce-server-r7xn.onrender.com/api/data')
     .then(res=>res.data)
     .then(store=>{
      // console.log(store);
      setdata(store)
      setLoader(false)
     })
  },[])
  const handlebuttton=()=>{
    toast.success("please sign in first")
    navi('/login')
  }
  console.log(data);
  
  return (
    <>
  {Loader ? <h1>Loading</h1> :
   <div className='parent'>
           
           { data && data.filter((item)=>item.catergory==='headphones').map((item)=>{
                 return(
                <>
              
                <div  className='cart'>
                <NavLink to={`/product/${item.id}`} >
                <img src={item.img} alt='headphones'/> </NavLink>
                <p className='product_name'>{item.name.slice(0,30)}</p>
                 <div className='cart-bottom'>
                 <p>Price ₹{item.price}</p>
                 {token==='' ? <button onClick={handlebuttton}>Add to Cart</button> : <button onClick={()=>dispatch(addToCart({id:item.id,name:item.name,price:Number(item.price),quantity:item.quant,image:item.img}))}>
                    Add to cart
                    </button>}
                 </div>
                </div>
                
                
                  </>
                 
                  
                 )
             })}
        </div>}
   <FooterComp/>
    </>
  )
}

export default Headphones;