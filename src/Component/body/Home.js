import React, { useEffect, useState } from 'react'
import axios from "axios"
import './home.css'
import ImageSlider from './Imageslider'
import { addToCart } from '../../redux/cartSystem'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import FooterComp from '../footer/FooterComp'
import { toast } from 'react-toastify'


function Home({token}) {
  const[data,setdata]=useState('')
  const dispatch = useDispatch()
  const navi=useNavigate()

  useEffect(()=>{
     axios.get('https://ecommerce-server-r7xn.onrender.com/api/data')
     .then(res=>res.data)
     .then(store=>{
      // console.log(store);
      setdata(store)
     })
  },[])
  const handlebuttton=()=>{
    toast.success("please sign in first")
    navi('/login')
  }
  console.log(data);
  return (
    <>
    <ImageSlider/>
    <h3 className='bestseller_text'>Best Seller</h3>
    <div className='parent'>
           
       { data && data.filter((item)=>Number(item.rating)===5).map((item)=>{
             return(
            <>
              <div className='cart'>
              <NavLink to={`/product/${item.id}`} >
              <img src={item.img} alt='home'/>
              </NavLink>
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
    </div>
    {/* <div className='video_div'>
      
    <video width="650" height="360" autoPlay muted loop>
    <source src='../body/videoad'/>
    
</video>

      
    </div> */}
<ImageSlider/>
   
    <h3 className='bestseller_text'>Top Sold Product</h3>
    <div className='parent'>
           
           { data && data.filter((item)=>Number(item.rating)===4).map((item)=>{
                 return(
                <>
                  <div className='cart'>
                  <NavLink to={`/product/${item.id}`} >
                  <img src={item.img} alt='home'/>
                  </NavLink>
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
        </div>
        <FooterComp/>
    </>
  )
}

export default Home