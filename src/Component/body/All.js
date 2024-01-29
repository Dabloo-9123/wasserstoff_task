import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { AddCart } from '../../redux/cartSystem';


function All() {
  const[data,setdata]=useState('');
  const [Loader,setLoader]=useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
     axios.get('https://ecommerce-server-r7xn.onrender.com/api/data')
     .then(res=>res.data)
     .then(store=>{
      // console.log(store);
      setdata(store)
      setLoader(false)
     })
  },[])
  console.log(data);
  
  return (
    <>
  {Loader ? <h1>Loading</h1> :
   <div className='parent'>
           
           { data && data.map((item)=>{
                 return(
                <>
              
                <div  className='cart'>
                <NavLink to={`/product/${item.id}`} >
                <img src={item.img} alt='mobile'/> </NavLink>
                  <p>{item.name.slice(0,50)}</p>
                 <div className='cart-bottom'>
                 <p>Price ${item.price}</p>
                  <button onClick={()=>dispatch(AddCart(item))}>
                    Add to cart
                    </button>
                 </div>
                </div>
                
                
                  </>
                 
                  
                 )
             })}
        </div>}
   
    </>
  )
}

export default All